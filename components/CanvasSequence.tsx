"use client";

import { useEffect, useRef, useState } from "react";
import { useTransform, motion, MotionValue, useSpring } from "framer-motion";

const FRAME_COUNT = 240;

interface CanvasSequenceProps {
  progress: MotionValue<number>;
}

export default function CanvasSequence({ progress }: CanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  // Smooth the scroll progress for a much higher quality playback
  const smoothProgress = useSpring(progress, {
    stiffness: 400,
    damping: 90,
    restDelta: 0.001
  });

  // Create an animated value for the frame index based on the smoothed scroll
  const frameIndex = useTransform(smoothProgress, [0, 1], [1, FRAME_COUNT]);

  useEffect(() => {
    // Preload all 240 frames
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      // ezgif-frame-001.jpg
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/car-frames/ezgif-frame-${frameNum}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (images.length < FRAME_COUNT || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      // Get the current frame based on Framer Motion's animated value
      const currentIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(frameIndex.get()) - 1)
      );

      const img = images[currentIndex];
      if (img && img.complete) {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Calculate aspect ratio to cover or fit
        // For a seamless cinematic feel, we'll try to fit it beautifully or cover
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        // "Cover" behavior
        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          drawHeight = canvas.height;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [images, frameIndex]);

  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current) {
        // High DPI canvas rendering for sharp quality
        const dpr = window.devicePixelRatio || 1;
        canvasRef.current.width = window.innerWidth * dpr;
        canvasRef.current.height = window.innerHeight * dpr;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-[#050505] overflow-hidden">
      {/* Fallback loading state or subtle gradient behind the canvas */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0A0A1A] via-[#050505] to-[#050505] opacity-50"></div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 translate-y-16 w-full h-full object-cover"
        style={{ width: "100%", height: "100%", imageRendering: "crisp-edges" }}
      />
      {/* Gradient overlays to blend edges perfectly into black */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] pointer-events-none opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none opacity-50" />
    </div>
  );
}
