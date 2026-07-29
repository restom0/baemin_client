'use client';

import { DownOutlined } from '@ant-design/icons';
import React, { useId, useState } from 'react';

const foodTypes = ['Đồ ăn', 'Bánh kem', 'Vỉa hè', 'Tráng miệng', 'Pizza', 'Sushi'];

const TypeSelector = () => {
  const panelId = useId();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((current) => !current);
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="mb-1 flex cursor-pointer flex-col items-center justify-center border-0 bg-transparent"
        onClick={toggleDropdown}
      >
        <span className="rounded px-1 uppercase">Phân loại</span>
        <span className="text-[10px]">
          <DownOutlined aria-hidden="true" />
        </span>
      </button>

      {isOpen && (
        <fieldset
          id={panelId}
          className="absolute z-10 mt-2 w-96 rounded border-0 bg-white p-4 shadow-lg"
        >
          <legend className="ds-visually-hidden">Chọn phân loại món ăn</legend>
          <div className="grid grid-cols-2 gap-4">
            {foodTypes.map((type) => (
              <label key={type} className="block">
                <input type="checkbox" name="food-type" value={type} /> {type}
              </label>
            ))}
          </div>
        </fieldset>
      )}
    </div>
  );
};

export default TypeSelector;
