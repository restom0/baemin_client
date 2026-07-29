'use client';

import { Fragment, useState } from "react";

export default function Status({ items }: { items: any[] }) {
  const [current, setCurrent] = useState(0);
  const [statusOverrides, setStatusOverrides] = useState<Record<string, boolean>>({});
  const status = items.map((item) => ({
    ...item,
    st: statusOverrides[item.id] ?? item.st,
  }));

  const handleClick = (id: string) => {
    const selectedItem = status.find((item) => item.id === id);

    if (!selectedItem) {
      return;
    }

    if (selectedItem.number === current + 1 || selectedItem.number === current) {
      setCurrent(selectedItem.number);
      setStatusOverrides((previous) => ({
        ...previous,
        [id]: !selectedItem.st,
      }));
    }
  };

  return (
    <ol className="relative mt-2 flex flex-col gap-3">
      {status.map((item: any, index: number) => (
        <Fragment key={item.id}>
          <li>
            <button
              type="button"
              onClick={() => handleClick(item.id)}
              aria-current={item.number === current ? "step" : undefined}
              aria-pressed={item.st}
              className="flex cursor-pointer flex-row items-center gap-3 border-0 bg-transparent p-0 text-left"
            >
              <span
                className={`${item.st ? "border-beamin" : ""} flex h-10 w-10 items-center justify-center rounded-full border border-solid`}
                aria-hidden="true"
              >
                <span className={item.st ? "text-beamin" : "text-gray-600"}>{item.number}</span>
              </span>
              <span className={`text-wrap text-[14px] ${item.st ? "text-beamin" : "text-gray-600"}`}>
                {item.name}
              </span>
            </button>
          </li>
          {status.length - 1 !== index && (
            <div
              aria-hidden="true"
              className="relative bottom-5 left-4 flex flex-col gap-1 text-xl font-bold"
            >
              {Array.from({ length: 5 }).map((_, dotIndex) => (
                <span key={dotIndex} className={`h-2 ${item.st ? "text-beamin" : "text-gray-600"}`}>
                  .
                </span>
              ))}
            </div>
          )}
        </Fragment>
      ))}
    </ol>
  );
}
