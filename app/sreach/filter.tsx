'use client';

import React, { useId, useState } from 'react';

const options = ['Đúng nhất', 'Gần tôi', 'Đánh giá', 'Bán chạy', 'Giao nhanh'];

const FilterSelector = () => {
  const listboxId = useId();
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((current) => !current);
  };

  const selectOption = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-row items-center justify-center gap-2">
      <span className="text-[13px] text-[#464646]">200 Kết quả</span>
      <button
        type="button"
        aria-controls={listboxId}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="mb-2 flex cursor-pointer items-center justify-between rounded border-0 bg-white px-4 py-2"
        onClick={toggleDropdown}
      >
        <span className="ds-visually-hidden">Sắp xếp theo: </span>
        {selected}
        <svg
          aria-hidden="true"
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          aria-label="Chọn cách sắp xếp kết quả"
          className="absolute top-10 z-10 mt-2 w-40 rounded bg-white p-2 shadow-lg"
        >
          {options.map((option) => (
            <button
              type="button"
              role="option"
              aria-selected={selected === option}
              key={option}
              className="w-full cursor-pointer border-0 bg-transparent p-2 text-left hover:bg-gray-100"
              onClick={() => selectOption(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterSelector;
