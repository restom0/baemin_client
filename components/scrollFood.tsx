'use client';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useId, useState } from 'react';

export default function ScrollFood({ items }: { items: any }) {
  const router = useRouter();
  const titleId = useId();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleNavigate = () => {
    router.push('/detailfood');
  };

  const handleNext = () => {
    if (containerRef.current) {
      if (items.items.length - 1 > currentIndex) {
        setCurrentIndex(currentIndex + 1);
      }
      containerRef.current.scrollBy({ left: 180, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (containerRef.current) {
      if (0 < currentIndex) {
        setCurrentIndex(currentIndex - 1);
      }
      containerRef.current.scrollBy({ left: -180, behavior: 'smooth' });
    }
  };

  return (
    <section className="h-[300px] w-full rounded-2xl bg-white" aria-labelledby={titleId}>
      <div className="flex h-full w-full flex-col px-4 pb-2 pt-4">
        <h2 id={titleId} className="relative ml-3 mb-2 text-xl font-bold">
          {items.title}
        </h2>
        <div className="relative h-full w-full">
          {currentIndex > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Xem mục trước"
              className="absolute top-20 z-20 h-8 w-8 rounded-full bg-white hover:bg-slate-50 hover:text-beamin"
            >
              <LeftOutlined aria-hidden="true" />
            </button>
          )}
          <div ref={containerRef} className="scroll-container flex h-full w-full flex-row gap-3">
            {items.items.map((item: any, index: number) => (
              <button
                key={`${item.name}-${index}`}
                type="button"
                onClick={handleNavigate}
                aria-label={`Xem chi tiết ${item.name}`}
                className="group h-full w-48 cursor-pointer border-0 bg-transparent p-0 text-left"
              >
                <div className="h-2/3 w-full">
                  <div className="relative h-full w-full group-hover:brightness-75">
                    <Image layout="fill" objectFit="cover" src={item.img} alt={item.name} />
                  </div>
                </div>
                <div className="flex h-1/3 w-full flex-col border-2 border-solid border-beamin-50 pl-2 pr-2 group-hover:bg-slate-50">
                  <div className="w-full truncate text-base">
                    <span>{item.name}</span>
                  </div>
                  <div className="w-full truncate text-sm text-[#595959]">
                    <span>{item.adrress}</span>
                  </div>
                  <div className="mt-2 w-full border-t border-beamin-50 text-sm">
                    <span className="mt-2">{item.kind}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
          {currentIndex < items.items.length - 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Xem mục tiếp theo"
              className="absolute right-1 top-20 z-20 h-8 w-8 rounded-full bg-white hover:bg-slate-50 hover:text-beamin"
            >
              <RightOutlined aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
