"use client";

import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import DetailsCart from "./detailsCart";

export default function Home() {
  const detail: any = [
    {
      name: "Chicken Gang",
      quandoitac: true,
      items: [
        {
          namefood: "Gà rán",
          img: "/images/Ga.png",
          description: "Chiên bột",
          price: 280000,
          quantity: 2,
          totalprice: 280000,
        },
        {
          namefood: "Gà rán",
          img: "/images/Ga.png",
          description: "Chiên bột",
          price: 280000,
          quantity: 2,
          totalprice: 280000,
        },
      ],
    },
    {
      name: "Chicken Gang",
      quandoitac: true,
      items: [
        {
          namefood: "Gà rán",
          img: "/images/Ga.png",
          description: "Chiên bột",
          price: 280000,
          quantity: 2,
          totalprice: 280000,
        },
        {
          namefood: "Gà rán",
          img: "/images/Ga.png",
          description: "Chiên bột",
          price: 280000,
          quantity: 2,
          totalprice: 280000,
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex h-20 w-full flex-row bg-white">
        <div className="flex h-full w-1/2 flex-row items-center gap-3">
          <div className="ml-10 text-4xl font-bold text-beamin">
            <ShoppingCartOutlined aria-hidden="true" />
          </div>
          <div className="text-2xl text-beamin" aria-hidden="true">
            |
          </div>
          <h1 className="m-0 text-3xl font-bold text-beamin">Giỏ hàng</h1>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4 rounded-md px-16 pb-16">
        <div className="grid h-16 w-full grid-cols-12 bg-white">
          <div className="col-span-4 flex flex-row items-center gap-5 pl-8">
            <input
              id="cart-select-all"
              type="checkbox"
              value=""
              aria-label="Chọn tất cả món ăn"
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 dark:ring-offset-gray-800"
            />
            <span className="text-base font-normal">Món ăn</span>
          </div>
          <div className="col-span-2 flex flex-row items-center justify-center gap-3">
            <span className="text-base font-normal text-gray-600">Đơn giá</span>
          </div>
          <div className="col-span-2 flex flex-row items-center justify-center gap-3">
            <span className="text-base font-normal text-gray-600">Số lượng</span>
          </div>
          <div className="col-span-2 flex flex-row items-center justify-center gap-3">
            <span className="text-base font-normal text-gray-600">Số tiền</span>
          </div>
          <div className="col-span-2 flex flex-row items-center justify-center gap-3">
            <span className="text-base font-normal text-gray-600">Thao tác</span>
          </div>
        </div>
        <DetailsCart Details={detail} />
        <div className="fixed bottom-0 mr-16 flex h-16 w-[90.6%] flex-row items-center bg-white">
          <div className="ml-10 flex h-full w-1/2 flex-row items-center gap-2">
            <button type="button" className="border-0 bg-transparent p-0 hover:text-red-600">
              Hủy
            </button>
            <div>Quán đã chọn:</div>
            <div>The Chicken Gang</div>
          </div>
          <div className="flex h-full w-1/2 flex-row items-center justify-end gap-2 pr-2">
            <div>Tổng thanh toán (0 sản phẩm):</div>
            <div className="text-red-600">₫0</div>
            <div>
              <Button
                href="/checkout"
                style={{ background: "#3AC5C9", color: "white" }}
                className="h-10 w-40 rounded-md bg-beamin text-white hover:brightness-105"
              >
                Thanh toán
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
