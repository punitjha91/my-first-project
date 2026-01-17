"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ScrollyCanvas({
  numFrames = 120, // Adjusted to actual count
}: {
  numFrames?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 0; i < numFrames; i++) {
      const img = new Image();
      img.src = `/sequence/${String(i).padStart(3, "0")}.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === numFrames) {
          setIsLoaded(true);
        }
      };
      imgs.push(img);
    }
    setImages(imgs);
  }, [numFrames]);

  // Render logic
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Use device pixel ratio for sharpness
    const dpr = window.devicePixelRatio || 1;
    
    // Set canvas dimensions if not set (or on resize)
    // For simplicity, we assume browser handles resize observer external or here.
    // Ideally we update width/height on resize.
    
    // Canvas fitting logic (cover)
    const img = images[index];
    
    // We want to fill the canvas:
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    
    // Clear
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Calculate Aspect Ratio
    const imgRatio = img.width / img.height;
    const canvasRatio = canvasWidth / canvasHeight;
    
    let drawWidth, drawHeight, offsetX, offsetY;
    
    if (canvasRatio > imgRatio) {
        // Canvas is wider than image -> fit width
        drawWidth = canvasWidth;
        drawHeight = canvasWidth / imgRatio;
        offsetX = 0;
        offsetY = (canvasHeight - drawHeight) / 2;
    } else {
        // Canvas is taller than image -> fit height
        drawHeight = canvasHeight;
        drawWidth = canvasHeight * imgRatio;
        offsetY = 0;
        offsetX = (canvasWidth - drawWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Scroll listener
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isLoaded || images.length === 0) return;
    
    // Map 0-1 to 0-(numFrames-1)
    // We map strictly to the parent container's scroll.
    // Assuming this component is inside the long scroll container.
    // However, `useScroll` by default tracks window scroll.
    // If the parent is 500vh, we want the animation to play over that range.
    // We will control the progress mapping in the parent or pass a ref. 
    // Here we use default window scroll progress for global page scroll 
    // OR we should accept a ref if verify strict container.
    // Given the prompt: "sticky container... parent 500vh", simple window scroll 
    // might be enough if this is the main interaction on the page.
    
    // Let's rely on global scroll for now, or map it.
    // Actually, simple Mapping:
    const frameIndex = Math.min(
      numFrames - 1,
      Math.floor(latest * numFrames)
    );
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth * (window.devicePixelRatio || 1);
        canvasRef.current.height = window.innerHeight * (window.devicePixelRatio || 1);
        // Re-render current frame ? We need state for current index if we want.
        // Or just let next scroll event handle it.
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Init
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-[500vh] relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center text-white/50">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
}
