import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "../lib/utils";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const getRandomInt = (max) => Math.floor(Math.random() * max);

export function HyperText({
  text = "",
  duration = 800,
  framerProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 3 },
  },
  className = "",
  animateOnLoad = true,
}) {
  const [displayText, setDisplayText] = useState(text.split(""));
  const iterations = useRef(0);

  const triggerAnimation = () => {
    iterations.current = 0;

    const interval = setInterval(() => {
      if (iterations.current < text.length) {
        setDisplayText((currentText) =>
          currentText.map((char, i) =>
            char === " "
              ? char
              : i <= iterations.current
              ? text[i]
              : alphabets[getRandomInt(26)]
          )
        );
        iterations.current += 0.1;
      } else {
        clearInterval(interval);
      }
    }, duration / (text.length * 10));
  };

  useEffect(() => {
    if (animateOnLoad) {
      triggerAnimation();
    }
    // Clean-up function
    return () => clearInterval();
  }, [text, duration, animateOnLoad]);

  return (
    <div
      className="flex scale-100 cursor-default overflow-hidden py-2"
      onMouseEnter={triggerAnimation}
    >
      <AnimatePresence mode="wait">
        {displayText.map((letter, i) => (
          <motion.span
            key={i}
            className={cn("font-mono", letter === " " ? "w-3" : "", className)}
            {...framerProps}
          >
            {letter.toUpperCase()}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default HyperText;
