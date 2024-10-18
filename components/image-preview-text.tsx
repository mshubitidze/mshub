"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

interface ImagePreviewTextProps {
  children: React.ReactNode;
  imageUrl: string;
  altText: string;
}

export function ImagePreviewText({
  children,
  imageUrl,
  altText,
}: ImagePreviewTextProps) {
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const mouseX = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      mouseX.set(x);
    }
  };

  return (
    <span
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.span
        // className="absolute z-10 h-32 w-64 pointer-events-none"
        style={{
          x: springX,
          perspective: 1000,
          bottom: "100%",
          left: "50%",
          translateX: "-50%",
          marginBottom: "8px",
          position: "absolute",
          zIndex: 10,
          height: "8rem",
          width: "16rem",
          pointerEvents: "none",
        }}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={
          isHovering
            ? { opacity: 1, scale: 1, y: 0 }
            : { opacity: 0, scale: 0.8, y: 20 }
        }
        transition={{
          opacity: { duration: 0.2 },
          scale: { type: "spring", stiffness: 300, damping: 20 },
          y: { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </motion.span>
      {children}
    </span>
  );
}
