"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState, ReactNode } from "react";
import CountUp from "react-countup";

interface CounterProps {
  end: number;
  duration?: number;
  delay?: number;
  text: ReactNode;
}

const Counter = ({ end, duration = 2, delay = 0.2, text }: CounterProps) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startAnimation) {
            setStartAnimation(true);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of element is visible
      },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [startAnimation]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 180 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: false, amount: 0.3 }}
      className="counter"
      ref={counterRef}
    >
      <h2 className="timer count-title count-number">
        {startAnimation ? (
          <CountUp end={end} duration={duration} separator="," />
        ) : (
          "0"
        )}
      </h2>
      <p className="count-text">{text}</p>
    </motion.div>
  );
};

export default Counter;
