import React from 'react';
import AreaSelector from './area';
import FilterSelector from './filter';
import ResultFood from './result';
import TypeSelector from './type';

const items = Array.from({ length: 13 }, (_, index) => ({
  id: String(index + 1),
  name: 'Cơm chiên & nui xào bò - Cống Quỳnh',
  address: '102/12 Cống Quỳnh, Quận 1, TP. HCM',
  img: '/food/ga1.jpg',
  kind: 'Quán ăn',
}));

const Page: React.FC = () => {
  return (
    <main>
      <h1 className="ds-visually-hidden">Kết quả tìm kiếm món ăn</h1>
      <div className="flex w-full flex-row items-center justify-between border-b border-solid">
        <div className="flex flex-row gap-3" aria-label="Bộ lọc tìm kiếm">
          <AreaSelector />
          <TypeSelector />
        </div>
        <div className="flex items-center justify-center">
          <FilterSelector />
        </div>
      </div>
      <ResultFood items={items} />
    </main>
  );
};

export default Page;
