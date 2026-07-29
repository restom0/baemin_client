'use client';

import { ShoppingCartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';
import DetailsCheckout from '../checkout/detailsCheckout';
import Status from './status';

const status = [
  {
    id: '1',
    number: 1,
    name: 'Nhà hàng đã nhận đơn',
    st: false,
  },
  {
    id: '2',
    number: 2,
    name: 'Shipper đã nhận đơn',
    st: false,
  },
  {
    id: '3',
    number: 3,
    name: 'Shipper đang đến nhà hàng',
    st: false,
  },
  {
    id: '4',
    number: 4,
    name: 'Shipper đã đến nhà hàng',
    st: false,
  },
  {
    id: '5',
    number: 5,
    name: 'Shipper đang giao hàng',
    st: false,
  },
  {
    id: '6',
    number: 6,
    name: 'Đơn hàng hoàn tất',
    st: false,
  },
];

const detail: any = [
  {
    name: 'Gà rán',
    description: 'Chiên bột',
    price: 17000,
    quantity: 2,
    totalprice: 17000,
    img: '/food/ga1.jpg',
  },
  {
    name: 'Gà rán',
    description: 'Chiên bột',
    price: 17000,
    quantity: 2,
    totalprice: 17000,
    img: '/food/ga1.jpg',
  },
];

const Page: React.FC = () => {
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
          <h1 className="m-0 text-3xl font-bold text-beamin">Trình trạng đơn hàng</h1>
        </div>
      </div>
      <main className="grid grid-cols-12">
        <aside className="col-span-3 pb-3 pl-16 pt-3" aria-labelledby="status-title">
          <section className="flex h-full w-full flex-col rounded-md bg-white pb-4 pl-4 pt-2">
            <h2 id="status-title" className="m-0 font-semibold">
              Trình trạng
            </h2>
            <Status items={status} />
          </section>
        </aside>
        <section className="col-span-9 flex h-full flex-col gap-2 pb-3 pl-6 pr-10 pt-3">
          <div className="h-[70%] w-full rounded-md">
            <div className="relative h-full w-full">
              <Image
                layout="fill"
                objectFit="cover"
                src="/images/baemin-1.jpg"
                alt="Minh họa trạng thái giao hàng Baemin"
              />
            </div>
          </div>
          <div className="flex w-full flex-col rounded-md bg-white p-4">
            <div className="flex w-full flex-row">
              <div className="flex w-1/3 flex-col gap-2">
                <div>Đồ ăn | Gà rán Popeys - Nguyễn Thị Thập</div>
                <div className="text-sm text-gray-600">143.000đ - 1 món - Ví MoMo</div>
                <div className="text-sm text-gray-600">Thiện Trần - 0901234567</div>
              </div>
              <div className="flex w-1/3 flex-col gap-2">
                <div>Giao hàng đến</div>
                <div className="text-sm text-gray-600">
                  169 Nguyễn Thị Thập, Phường Bình Thuận, Quận 7
                </div>
                <div className="text-sm text-gray-600">Thời gian hoàn thành: --:--</div>
              </div>
              <div className="flex w-1/3 flex-col gap-2 pl-5">
                <div className="flex flex-row justify-between font-medium">
                  <span>Tổng (1 món):</span>
                  <span className="text-beamin">164.000đ</span>
                </div>
                <div className="flex flex-row justify-between border-t text-sm">
                  <span>Phí giao hàng (1 km):</span>
                  <span className="text-beamin">16.000đ</span>
                </div>
                <div className="flex flex-row justify-between text-sm">
                  <span>Phí dịch vụ:</span>
                  <span className="text-beamin">16.000đ</span>
                </div>
                <div className="flex flex-row justify-between text-sm">
                  <span>Giảm giá:</span>
                  <span className="text-beamin">16.000đ</span>
                </div>
                <div className="flex w-full flex-row items-end justify-end pr-3 pt-3 text-xl font-medium text-beamin">
                  <span>164.000đ</span>
                </div>
              </div>
            </div>
            <div className="mt-2 w-full border-t">
              <DetailsCheckout items={detail} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
