'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ResultFood({ items }: { items: any[] }) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/detailfood');
  };

  return (
    <div className="mt-3 flex flex-row flex-wrap gap-3">
      {items.map((item: any, index) => (
        <button
          type="button"
          onClick={handleNavigate}
          aria-label={`Xem chi tiết ${item.name}`}
          key={`${item.id}-${index}`}
          className="group flex h-56 w-[19%] cursor-pointer flex-col border-0 bg-white p-0 text-left"
        >
          <div className="relative h-[60%] w-full group-hover:brightness-105">
            <Image layout="fill" objectFit="cover" src={item.img} alt={item.name} />
          </div>
          <div className="h-[40%] w-full border border-solid pr-3 group-hover:bg-slate-50">
            <div className="ml-3 h-[30%] w-full truncate text-base">
              <span className="font-bold text-[#252525]"> {item.name} </span>
            </div>
            <div className="ml-3 h-[30%] w-full truncate text-sm text-[#595959]">
              <span>{item.address}</span>
            </div>
            <div className="flex h-[30%] w-full items-center border-t border-beamin-50 text-sm">
              <span className="ml-3">{item.kind}</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
