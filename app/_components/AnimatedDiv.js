"use client"

import { useEffect, useRef, useState } from "react";

export function AnimatedDiv({ children, delay = 0, className = "" }) {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("AnimatedDiv: masuk viewport");
          setTimeout(() => setShow(true), delay);
        }
      },
      { threshold: 0 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`opacity-0 ${show ? "animate-slide-up" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
