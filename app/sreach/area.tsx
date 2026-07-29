'use client';

import { DownOutlined } from '@ant-design/icons';
import React, { useId, useState } from 'react';

const areas = [
  'Quận 1',
  'Quận 3',
  'Quận 6',
  'Quận 9',
  'Quận 12',
  'Phú Nhuận',
  'Gò Vấp',
  'Quận 4',
  'Quận 7',
  'Quận 10',
  'Bình Thạnh',
  'Bình Tân',
  'Quận 2',
  'Quận 5',
  'Quận 8',
  'Quận 11',
  'Tân Bình',
  'Tân Phú',
];

const AreaSelector = () => {
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
        <span className="rounded px-1 uppercase">Khu vực</span>
        <span className="text-[10px]">
          <DownOutlined aria-hidden="true" />
        </span>
      </button>
      {isOpen && (
        <fieldset
          id={panelId}
          className="absolute z-10 mt-2 w-96 rounded border-0 bg-white p-4 shadow-lg"
        >
          <legend className="ds-visually-hidden">Chọn khu vực giao hàng</legend>
          <div className="grid grid-cols-3 gap-4">
            {areas.map((area) => (
              <label key={area} className="block">
                <input type="checkbox" name="area" value={area} /> {area}
              </label>
            ))}
          </div>
        </fieldset>
      )}
    </div>
  );
};

export default AreaSelector;
