"use client";

import { useRef, useEffect, useState, ReactNode } from "react";
import CountUp from "react-countup";

interface CounterProps {
  end: number;
  duration?: number;
  text: ReactNode;
}

const Counter = ({ end, duration = 2, text }: CounterProps) => {
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
    <div className="counter" ref={counterRef}>
      <h2 className="timer count-title count-number">
        {startAnimation ? (
          <CountUp end={end} duration={duration} separator="," />
        ) : (
          "0"
        )}
      </h2>
      <p className="count-text">{text}</p>
    </div>
  );
};

export default Counter;
