"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const updateVisibility = () => {
      frameId = 0;
      const nextIsVisible = window.scrollY > 720;
      setIsVisible((current) => (current === nextIsVisible ? current : nextIsVisible));
    };

    const onScroll = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(updateVisibility);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <button
      type="button"
      className={isVisible ? "back-to-top visible" : "back-to-top"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
