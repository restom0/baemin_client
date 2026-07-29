'use client';

import {
  ClockCircleTwoTone,
  DollarTwoTone,
  DoubleRightOutlined,
  LikeFilled,
  PlusOutlined,
  SearchOutlined,
  StarFilled,
  StarOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import Image from "next/image";
import { useState } from "react";

const menuItems = ["Sản phẩm mới", "Family combo", "Gà rán", "Burger"];

const products = [
  {
    name: "Mua 2 tặng 2 gà rán",
    description:
      "Bao gồm: 4 miếng gà (cay/không cay), 2 nước vừa, 2x tương cà, 1x tương ớt ngọt, 1x tương ớt tỏi.",
    price: "118.000đ",
    image: "/images/Ga.png",
  },
  {
    name: "Mua 2 tặng 2 gà rán",
    description:
      "Bao gồm: 4 miếng gà (cay/không cay), 2 nước vừa, 2x tương cà, 1x tương ớt ngọt, 1x tương ớt tỏi.",
    price: "118.000đ",
    image: "/images/Ga.png",
  },
];

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(menuItems[0]);

  return (
    <main className="flex h-auto w-full flex-col">
      <section className="flex h-80 w-full bg-white" aria-labelledby="restaurant-title">
        <div className="h-full w-[45%] px-10 py-4">
          <div className="relative h-full w-full">
            <Image
              layout="fill"
              objectFit="cover"
              src="/food/ga1.jpg"
              alt="Gà rán Jollibee"
            />
          </div>
        </div>
        <div className="relative h-full w-[55%]">
          <div className="absolute left-0 top-0 px-8 py-4">
            <nav aria-label="Đường dẫn" className="text-[13px] text-[#187CAA]">
              <ol className="flex flex-row items-center gap-1">
                <li>
                  <a href="/dashboard">Home</a>
                </li>
                <li aria-hidden="true">
                  <DoubleRightOutlined className="text-[10px]" />
                </li>
                <li>
                  <span>TP.HCM</span>
                </li>
                <li aria-hidden="true">
                  <DoubleRightOutlined className="text-[10px]" />
                </li>
                <li aria-current="page">Gà rán Jollibee - Nguyễn Văn Cừ</li>
              </ol>
            </nav>
            <div className="mt-3 flex flex-row items-center justify-start text-[11px]">
              <button
                type="button"
                className="mr-2 flex cursor-pointer gap-1 border-0 bg-beamin p-1 tracking-wider text-white"
              >
                <LikeFilled aria-hidden="true" />
                <span>Yêu thích</span>
              </button>
              <span className="text-[#737373]">
                QUÁN ĂN -{" "}
                <button type="button" className="border-0 bg-transparent p-0 text-[#0288D1]">
                  Chi nhánh
                </button>
              </span>
            </div>
            <h1 id="restaurant-title" className="mt-2 text-[22px] font-bold">
              Gà rán Jollibee - Nguyễn Văn Cừ
            </h1>
            <div className="mt-1 text-[13px]">
              356 Trần Hưng Đạo, Phường 2, Quận 5, TP. Hồ Chí Minh
            </div>
            <div className="flex flex-row items-center justify-start gap-2 text-[14px]">
              <ol className="flex flex-row gap-1 text-[#FFC107]" aria-label="Đánh giá 4 trên 5 sao">
                <li>
                  <StarFilled aria-hidden="true" />
                </li>
                <li>
                  <StarFilled aria-hidden="true" />
                </li>
                <li>
                  <StarFilled aria-hidden="true" />
                </li>
                <li>
                  <StarFilled aria-hidden="true" />
                </li>
                <li>
                  <StarOutlined aria-hidden="true" />
                </li>
              </ol>
              <p className="rounded-md bg-[#FFC107] px-1 py-[2px] text-white">999+</p>
              <span>đánh giá trên Baemin</span>
            </div>
            <div className="my-1 flex flex-row items-center justify-start gap-4 text-[15px]">
              <div className="flex flex-row items-center justify-start gap-1 text-[#277A19]">
                <div className="h-2 w-2 rounded-full bg-[#277A19]" aria-hidden="true" />
                <span>Mở cửa</span>
              </div>
              <div className="flex flex-row items-center justify-start gap-1">
                <ClockCircleTwoTone twoToneColor="#3AC5C9" aria-hidden="true" />
                <span>06:00 - 22:59</span>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-1 text-[15px] text-[#737373]">
              <DollarTwoTone twoToneColor="#737373" className="text-[16px]" aria-hidden="true" />
              <span>99.000 - 399.000</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 mb-4 flex w-full flex-col px-8 text-[13px] text-[#737373]">
            <div className="border-t-[1px]" aria-hidden="true" />
            <div className="flex flex-row items-center justify-start gap-4 py-[10px]">
              <div className="flex flex-col">
                <span>PHÍ DỊCH VỤ</span>
                <span className="text-[14px] font-bold text-beamin">0.8% phí dịch vụ</span>
              </div>
              <div className="h-6 border-l border-solid" aria-hidden="true" />
              <div className="flex flex-col">
                <span>DỊCH VỤ BỞI</span>
                <span className="text-[14px] font-bold text-beamin">Baemin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full" aria-labelledby="menu-heading">
        <h2 id="menu-heading" className="px-[26px] py-[13px] text-[14px] font-bold text-beamin">
          THỰC ĐƠN
        </h2>
        <div className="flex w-full flex-row gap-3">
          <nav className="w-[20%] bg-white p-5" aria-label="Danh mục thực đơn">
            <ul>
              {menuItems.map((item) => (
                <li key={item} className="mt-2 first:mt-0">
                  <button
                    type="button"
                    aria-pressed={activeMenu === item}
                    className={`w-fit cursor-pointer border-0 px-1 text-left ${
                      activeMenu === item ? "bg-[#595959] text-white" : "bg-transparent"
                    }`}
                    onClick={() => setActiveMenu(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex h-auto w-[50%] flex-col bg-white px-4 py-3">
            <div className="mb-5 w-full">
              <label className="ds-visually-hidden" htmlFor="menu-search">
                Tìm món trong thực đơn
              </label>
              <Input
                id="menu-search"
                addonBefore={<SearchOutlined aria-hidden="true" />}
                placeholder="Tìm món"
              />
            </div>
            <div className="flex w-full flex-col gap-3 pl-1">
              <h3 className="font-medium">MÓN ĐANG GIẢM</h3>
              <div className="flex w-full flex-col gap-4 border-b">
                {products.map((product, index) => (
                  <div className="flex flex-row" key={`${product.name}-${index}`}>
                    <div className="relative h-16 w-[15%]">
                      <Image layout="fill" objectFit="cover" src={product.image} alt={product.name} />
                    </div>
                    <div className="flex w-[60%] flex-col gap-1 px-2">
                      <span className="font-bold text-[#464646]">{product.name}</span>
                      <span className="text-wrap text-sm text-[#464646]">{product.description}</span>
                    </div>
                    <div className="flex w-[15%] items-center justify-center">
                      <span className="text-base font-bold text-[#0288d1]">{product.price}</span>
                    </div>
                    <div className="flex w-[10%] items-center justify-center">
                      <button
                        type="button"
                        aria-label={`Thêm ${product.name} vào giỏ hàng`}
                        className="flex h-6 w-6 cursor-pointer items-center justify-center rounded-md border-0 bg-beamin text-white hover:brightness-110"
                      >
                        <PlusOutlined aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <aside className="w-[30%] bg-white" aria-label="Thông tin giỏ hàng" />
        </div>
      </section>
    </main>
  );
}
