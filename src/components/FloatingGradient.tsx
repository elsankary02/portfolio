"use client";

import { useEffect, useRef } from "react";

export default function FloatingGradient() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      blobRef.current.style.transform = `translate(${x * 40 - 20}px, ${y * 40 - 20}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div
        ref={blobRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[120px] transition-transform duration-500 ease-out"
        style={{
          background:
            "radial-gradient(circle at center, rgba(59,130,246,0.35) 0%, rgba(6,182,212,0.26) 40%, rgba(59,130,246,0.18) 70%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px] animate-float"
        style={{
          background:
            "radial-gradient(circle at center, rgba(96,165,250,0.24) 0%, rgba(59,130,246,0.16) 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px] animate-float-delayed"
        style={{
          background:
            "radial-gradient(circle at center, rgba(37,99,235,0.3) 0%, rgba(59,130,246,0.2) 40%, transparent 100%)",
        }}
      />
    </div>
  );
}
