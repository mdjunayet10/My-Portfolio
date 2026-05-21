"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
  words: string[];
};

export function TypewriterText({ words }: TypewriterTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (!words.length) {
      return;
    }

    if (reducedMotion) {
      return;
    }

    const currentWord = words[wordIndex] ?? words[0];
    const isWordComplete = !isDeleting && letterIndex === currentWord.length;
    const isWordDeleted = isDeleting && letterIndex === 0;
    const delay = isWordComplete ? 1250 : isDeleting ? 42 : 82;

    const timeout = window.setTimeout(() => {
      if (isWordComplete) {
        setIsDeleting(true);
        return;
      }

      if (isWordDeleted) {
        setIsDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
        return;
      }

      setLetterIndex((index) => index + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [isDeleting, letterIndex, reducedMotion, wordIndex, words]);

  const currentWord = words[wordIndex] ?? words[0] ?? "";
  const visibleWord = reducedMotion ? words[0] ?? "" : currentWord.slice(0, letterIndex);

  return (
    <span className="typewriter" data-role-index={wordIndex} aria-label={visibleWord || words[0] || "Software Developer"}>
      <span className="typewriter-word">{visibleWord}</span>
      <span className="typewriter-cursor" aria-hidden="true" />
    </span>
  );
}
