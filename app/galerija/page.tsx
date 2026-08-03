"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const images: string[] = [
  "/images/slika1.jpg",
  "/images/slika2.jpg",
  "/images/slika3.jpg",
  "/images/slika1.jpg",
  "/images/slika2.jpg",
  "/images/slika1.jpg",
  "/images/slika2.jpg",
  "/images/slika3.jpg",
  "/images/slika1.jpg",
  "/images/slika2.jpg",
];

export default function GalerijaPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // animation
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [animating, setAnimating] = useState(false);
  // navigation
  const next = useCallback(() => {
    if (activeIndex === null || animating) return;

    setDirection("right");
    setAnimating(true);

    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % images.length;
    });

    setTimeout(() => setAnimating(false), 400);
  }, [activeIndex, animating]);

  const prev = useCallback(() => {
    if (activeIndex === null || animating) return;

    setDirection("left");
    setAnimating(true);

    setActiveIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + images.length) % images.length;
    });

    setTimeout(() => setAnimating(false), 400);
  }, [activeIndex, animating]);
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        next();
      }

      if (e.key === "ArrowLeft") {
        prev();
      }

      if (e.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [activeIndex, next, prev]);

  return (
    <div className="pb-10 min-h-screen flex flex-col bg-black text-white">
      <main className="flex-1 pt-24 px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 max-w-6xl mx-auto">
          Galerija radova
        </h1>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* BIG IMAGE */}
          <div
            onClick={() => setActiveIndex(0)}
            className="relative md:col-span-2 h-[400px] group overflow-hidden rounded-xl cursor-pointer"
          >
            <Image
              src={images[0]}
              alt="Gallery"
              fill
              className="object-cover pointer-events-none transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* SIDE */}
          <div className="flex flex-col gap-4">
            {images.slice(1, 3).map((src, i) => (
              <div
                key={i}
                onClick={() => setActiveIndex(i + 1)}
                className="relative h-[190px] group overflow-hidden rounded-xl cursor-pointer"
              >
                <Image
                  src={src}
                  alt="Gallery"
                  fill
                  className="object-cover pointer-events-none transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* BOTTOM */}
          {images.slice(3).map((src, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i + 3)}
              className="relative h-[250px] group overflow-hidden rounded-xl cursor-pointer"
            >
              <Image
                src={src}
                alt="Gallery"
                fill
                className="object-cover pointer-events-none transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </main>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/90">
          <div className="grid grid-cols-[1fr_0.5fr_auto_0.5fr_1fr] h-full items-center">
            {/* LEFT SWIPE */}
            <div
              className="h-full flex items-center justify-start pl-4 md:pl-8 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              <span className="text-white text-3xl md:text-5xl opacity-70 hover:opacity-100 transition">
                ‹
              </span>
            </div>

            {/* LEFT CLOSE AREA */}
            <div
              className="h-full cursor-pointer"
              onClick={() => setActiveIndex(null)}
            />

            {/* IMAGE */}
            <div className="relative w-[85vw] max-w-5xl h-[60vh] md:h-[80vh] overflow-hidden">
              <div
                key={activeIndex}
                onTransitionEnd={() => setAnimating(false)}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  direction === "right"
                    ? "translate-x-0 animate-slide-from-right"
                    : "translate-x-0 animate-slide-from-left"
                }`}
              >
                <Image
                  src={images[activeIndex]}
                  alt="Fullscreen"
                  fill
                  className="object-contain"
                />
              </div>

              {/* X BUTTON */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(null);
                }}
                className="absolute bg-white/20 top-2 md:top-4 right-2 md:right-4 text-white text-2xl md:text-3xl cursor-pointer hover:scale-110 transition"
              >
                ✕
              </button>
            </div>

            {/* RIGHT CLOSE AREA */}
            <div
              className="h-full cursor-pointer"
              onClick={() => setActiveIndex(null)}
            />

            {/* RIGHT SWIPE */}
            <div
              className="h-full flex items-center justify-end pr-4 md:pr-8 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              <span className="text-white text-3xl md:text-5xl opacity-70 hover:opacity-100 transition">
                ›
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
