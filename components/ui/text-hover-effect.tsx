"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  text,
  duration,
  automatic = false,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    return window.matchMedia("(max-width: 640px)").matches;
  });
  const isAutoMode = isMobile || automatic;

  // Detect mobile / touch devices
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Auto-animate on mobile: sweep the gradient across the text
  useEffect(() => {
    if (!isAutoMode) return;

    const keyframes = [
      { cx: "0%", cy: "50%" },
      { cx: "25%", cy: "40%" },
      { cx: "50%", cy: "50%" },
      { cx: "75%", cy: "60%" },
      { cx: "100%", cy: "50%" },
      { cx: "75%", cy: "40%" },
      { cx: "50%", cy: "50%" },
      { cx: "25%", cy: "60%" },
    ];

    let index = 0;
    const interval = setInterval(() => {
      setMaskPosition(keyframes[index]);
      index = (index + 1) % keyframes.length;
    }, 1200);

    return () => clearInterval(interval);
  }, [isAutoMode]);

  // Update mask position from mouse cursor
  useEffect(() => {
    if (isAutoMode) return;
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor, isAutoMode]);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 500 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => !isAutoMode && setHovered(true)}
      onMouseLeave={() => !isAutoMode && setHovered(false)}
      onMouseMove={(e) => !isAutoMode && setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {(hovered || isAutoMode) && (
            <>
              <stop offset="0%" stopColor="#1E3A8A" />
              <stop offset="25%" stopColor="#1D4ED8" />
              <stop offset="50%" stopColor="#2563EB" />
              <stop offset="75%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="30%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{
            duration: isMobile ? 1.5 : (duration ?? 0),
            ease: "easeInOut",
          }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-[helvetica] text-7xl font-bold"
        fill="#0a1a3a"
        stroke="#1e3a6e"
        style={{ opacity: hovered || isAutoMode ? 0.7 : 0.4 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-[helvetica] text-7xl font-bold"
        fill="#0d2248"
        stroke="#1e3a6e"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        fill="url(#textGradient)"
        className="font-[helvetica] text-7xl font-bold"
      >
        {text}
      </text>
    </svg>
  );
};
