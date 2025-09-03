'use client';

import React, { useState, KeyboardEvent } from 'react';
import Image from 'next/image';

interface ImageItem {
  src: string;   
  alt?: string;
}

interface HighlightsCarouselProps {
  images: ImageItem[]; 
  className?: string;
}

export default function HighlightsCarousel({ images, className = '' }: HighlightsCarouselProps) {
  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const handleKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      setIndex((prev) => (prev + 1) % images.length);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      setIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div
      className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${className}`}
      tabIndex={0}
      onKeyDown={handleKey}
      aria-roledescription="carousel"
      aria-label="Destaques do CyberDefender"
    >
      <div className="w-full md:w-[517px]">
        <div className="relative w-full overflow-hidden rounded-lg">
          {images.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                i === index ? 'opacity-100 relative' : 'opacity-0 pointer-events-none'
              }`}
              aria-hidden={i === index ? 'false' : 'true'}
            >
              <Image
                src={img.src}
                alt={img.alt ?? `Destaque ${i + 1}`}
                width={517}
                height={309}
                sizes="(max-width: 768px) 100vw, 517px"
                className="w-full h-auto object-cover block"
                priority={i === index}  
              />
            </div>
          ))}
        </div>
      </div>

       
      <div className="flex md:flex-col items-center gap-3">
        {images.map((_, i) => {
          const selected = i === index;
          return (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-pressed={selected}
              aria-label={`Mostrar imagem ${i + 1}`}
              className={`w-6 h-6 md:w-7 md:h-7 transform rotate-45 focus:outline-none transition-all
                ${selected
                  ? 'bg-[#15fc9e] shadow-[0_0_8px_#15fc9e] hover:shadow-[0_0_12px_#15fc9e]'
                  : 'bg-transparent border-2 border-[#15fc9e]'}
                rounded-sm`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            />
          );
        })}
      </div>
    </div>
  );
}