"use client";

import { useEffect, useRef } from "react";

const interactiveSelector = [
  "a",
  "button",
  "[role='button']",
  "input",
  "textarea",
  "select",
  "label",
  ".clickable",
  ".project-card",
  ".skill-card",
  ".contact-link-card",
  ".footer-socials a",
].join(",");

const textInputSelector = "input, textarea, select";

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = rootRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    const ripple = rippleRef.current;

    if (!cursor || !ring || !dot || !ripple) {
      return;
    }

    const supportsCursor = window.matchMedia("(min-width: 768px) and (hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsCursor || reduceMotion) {
      cursor.style.display = "none";
      return;
    }

    let animationFrame = 0;
    let pulseTimeout = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let isVisible = false;
    let hasPointer = false;

    document.documentElement.classList.add("custom-cursor-enabled");

    const moveCursor = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate3d(-50%, -50%, 0)`;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate3d(-50%, -50%, 0)`;
      ripple.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate3d(-50%, -50%, 0)`;
      ripple.style.setProperty("--cursor-ripple-x", `${targetX}px`);
      ripple.style.setProperty("--cursor-ripple-y", `${targetY}px`);

      const deltaX = Math.abs(targetX - ringX);
      const deltaY = Math.abs(targetY - ringY);

      if (deltaX > 0.1 || deltaY > 0.1) {
        animationFrame = window.requestAnimationFrame(moveCursor);
        return;
      }

      animationFrame = 0;
    };

    const requestCursorFrame = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(moveCursor);
      }
    };

    const showCursor = () => {
      if (!isVisible) {
        isVisible = true;
        cursor.classList.add("is-visible");
      }
    };

    const updateHoverState = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null;
      const isTypingTarget = Boolean(element?.closest(textInputSelector));
      const isInteractiveTarget = Boolean(element?.closest(interactiveSelector));

      cursor.classList.toggle("is-hovering", isInteractiveTarget && !isTypingTarget);
      cursor.classList.toggle("is-typing", isTypingTarget);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") {
        return;
      }

      targetX = event.clientX;
      targetY = event.clientY;

      if (!hasPointer) {
        hasPointer = true;
        ringX = targetX;
        ringY = targetY;
      }

      showCursor();
      updateHoverState(event.target);
      requestCursorFrame();
    };

    const onPointerOver = (event: PointerEvent) => {
      updateHoverState(event.target);
    };

    const onPointerOut = (event: PointerEvent) => {
      if (!event.relatedTarget) {
        isVisible = false;
        hasPointer = false;
        cursor.classList.remove("is-visible", "is-hovering", "is-typing");
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || cursor.classList.contains("is-typing")) {
        return;
      }

      cursor.classList.remove("is-clicking");
      window.clearTimeout(pulseTimeout);

      requestAnimationFrame(() => {
        cursor.classList.add("is-clicking");
        pulseTimeout = window.setTimeout(() => cursor.classList.remove("is-clicking"), 260);
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
      window.removeEventListener("pointerdown", onPointerDown);
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(pulseTimeout);
    };
  }, []);

  return (
    <div ref={rootRef} className="custom-cursor" aria-hidden="true">
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={rippleRef} className="custom-cursor-ripple" />
    </div>
  );
}
