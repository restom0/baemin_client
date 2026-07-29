'use client';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React, { useState } from 'react';

export default function ScrollBar({ items }: { items: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (containerRef.current) {
      if (items.length - 1 > currentIndex) {
        setCurrentIndex(currentIndex + 1);
      }
      containerRef.current.scrollBy({ left: 489, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      if (0 < currentIndex) {
        setCurrentIndex(currentIndex - 1);
      }
      containerRef.current.scrollBy({ left: -489, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[300px] w-full" aria-label="Khuyến mãi nổi bật">
      {currentIndex > 0 && (
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Xem mục trước"
          className="absolute left-6 top-32 z-20 h-8 w-8 rounded-full bg-white hover:bg-slate-50 hover:text-beamin"
        >
          <LeftOutlined aria-hidden="true" />
        </button>
      )}
      <div
        ref={containerRef}
        className="scroll-container relative flex h-[300px] w-full gap-2 rounded-2xl bg-white p-4"
      >
        {items.map((item: any, index: number) => (
          <div key={`${item.id}-${index}`} className="relative w-1/2 flex-shrink-0 bg-blue-200 p-4">
            <Image
              layout="fill"
              objectFit="cover"
              src={item.url}
              alt={item.name || `Khuyến mãi ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {currentIndex < items.length - 1 && (
        <button
          type="button"
          onClick={handleNext}
          aria-label="Xem mục tiếp theo"
          className="absolute right-3 top-32 z-20 h-8 w-8 rounded-full bg-white hover:bg-slate-50 hover:text-beamin"
        >
          <RightOutlined aria-hidden="true" />
        </button>
      )}
    </section>
  );
}
