'use client';

import { AccountBookOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import DetailsCheckout from "./detailsCheckout";

const paymentMethods = ["MoMo", "ZaloPay", "Thẻ tín dụng/Thẻ ghi nợ", "Thanh toán khi nhận hàng"];

export default function Home() {
  const detail: any = [
    {
      name: "Gà rán",
      description: "Chiên bột",
      price: 17000,
      quantity: 2,
      totalprice: 17000,
      img: "/food/ga1.jpg",
    },
    {
      name: "Gà rán",
      description: "Chiên bột",
      price: 17000,
      quantity: 2,
      totalprice: 17000,
      img: "/food/ga1.jpg",
    },
  ];
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/statusorder");
  };

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
          <h1 className="m-0 text-3xl font-bold text-beamin">Thanh toán</h1>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-16">
        <section className="flex h-28 w-full flex-col rounded-md bg-white pl-10 pt-5" aria-labelledby="delivery-address-title">
          <div className="flex flex-row gap-1">
            <div className="text-xl" aria-hidden="true">
              <svg
                version="1.1"
                viewBox="0 0 2048 2048"
                width="30"
                height="30"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
              >
                <path
                  fill="#3AC5C9"
                  transform="translate(1e3 353)"
                  d="m0 0h48l30 3 28 5 32 8 29 10 27 12 23 12 24 15 18 13 14 11 11 10 8 7 21 21 7 8 13 16 13 18 14 22 12 22 11 23 11 29 8 28 6 28 4 29 2 33v12l-1 23-3 27-5 28-7 27-10 30-11 26-12 26-16 36-18 40-12 27-36 80-18 41-16 35-16 36-18 40-12 27-36 80-11 25-13 29-19 42-32 72-19 42-18 40-13 30-16 35-2 3-8-16-18-40-18-41-17-37-32-72-13-29-36-80-11-25-36-80-20-45-36-80-28-63-19-42-17-38-16-36-13-29-18-40-11-27-9-29-7-30-4-26-2-20v-55l3-28 5-28 7-28 11-32 11-25 13-25 13-21 12-17 10-13 12-14 12-13 16-16 8-7 14-12 18-13 15-10 15-9 18-10 28-13 28-10 25-7 28-6 31-4zm7 183-27 4-25 7-19 8-19 10-16 11-11 9-10 9-11 11-11 14-9 13-8 14-8 16-9 27-4 19-2 15v38l3 21 4 17 7 21 10 21 12 19 10 13 9 10 7 8 8 7 12 10 15 10 16 9 15 7 24 8 25 5 7 1 24 1 20-1 24-4 21-6 20-8 21-11 17-12 11-9 14-13 7-8 11-14 10-15 11-21 9-24 6-26 2-15v-39l-4-26-6-21-6-16-8-16-8-14-14-19-12-13-11-11-14-11-13-9-16-9-17-8-21-7-23-5-16-2z"
                />
              </svg>
            </div>
            <h2 id="delivery-address-title" className="m-0 text-xl font-bold text-beamin">
              Địa chỉ giao hàng
            </h2>
          </div>
          <div className="mb-3 mt-3 flex flex-row items-center gap-5 pl-3">
            <span className="font-bold">Trần Minh Thiện (+84) 344034531</span>
            <span>Địa chỉ: 123 Lê Lợi, Quận 1, TP. Hồ Chí Minh</span>
            <div className="border border-solid border-beamin p-1 text-xs text-beamin">Mặc định</div>
            <button type="button" className="ml-3 border-0 bg-transparent p-0 text-sm text-blue-600">
              Thay đổi
            </button>
          </div>
        </section>

        <section className="flex w-full flex-col rounded-md bg-white pt-5" aria-labelledby="checkout-items-title">
          <h2 id="checkout-items-title" className="m-0 ml-10 text-base font-medium">
            The Chicken Gang
          </h2>

          <DetailsCheckout items={detail} />
          <div className="mt-4 w-full border-t">
            <div className="ml-[40%] flex flex-row items-center justify-between py-2">
              <div className="flex flex-row items-center gap-3">
                <div className="text-xl text-beamin">
                  <AccountBookOutlined aria-hidden="true" />
                </div>
                <span className="text-base">Voucher của bạn</span>
              </div>
              <button type="button" className="pr-10 text-blue-600 border-0 bg-transparent">
                Chọn voucher
              </button>
            </div>
          </div>
          <div className="grid h-28 w-full grid-cols-12 border-t">
            <div className="col-span-5 flex flex-row items-center gap-3 border-r pb-10 pl-9 pt-4">
              <label className="text-nowrap" htmlFor="seller-note">
                Lời nhắn:
              </label>
              <input
                id="seller-note"
                type="text"
                placeholder="Lưu ý cho người bán"
                className="mr-3 h-8 w-full border border-solid border-gray-300 pl-1 focus-visible:border-beamin"
              />
            </div>
            <div className="col-span-7">
              <div className="grid grid-cols-12 pt-4">
                <div className="col-span-4 ml-3 pt-3 text-sm">Phương thức vận chuyển:</div>
                <div className="col-span-4 flex flex-col gap-1">
                  <span className="font-bold">Vận chuyển tiết kiệm</span>
                  <span className="text-sm">Giao hàng từ 15-30 phút</span>
                </div>
                <div className="col-span-2">
                  <button type="button" className="border-0 bg-transparent p-0 text-sm text-blue-600">
                    Thay đổi
                  </button>
                </div>
                <div className="col-span-2">
                  <span className="text-sm">₫17.000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-16 w-full items-center justify-end gap-2 border-t pr-5">
            <span>Tổng số tiền (1 sản phẩm):</span>
            <span className="font-bold text-beamin">₫176.000</span>
          </div>
        </section>

        <section className="flex w-full flex-col gap-3 rounded-md bg-white pt-5" aria-labelledby="payment-title">
          <div className="mb-4 flex flex-row gap-3 pl-10">
            <h2 id="payment-title" className="m-0 font-medium">
              Phương thức thanh toán:
            </h2>
            <div role="radiogroup" aria-labelledby="payment-title" className="flex flex-row gap-3">
              {paymentMethods.map((method, index) => (
                <label
                  key={method}
                  className="cursor-pointer border border-solid border-gray-300 p-1 hover:border-beamin hover:text-beamin"
                >
                  <input
                    type="radio"
                    name="payment-method"
                    defaultChecked={index === 0}
                    value={method}
                    className="mr-1"
                  />
                  {method}
                </label>
              ))}
            </div>
          </div>
          <div className="flex w-full flex-col items-end justify-end gap-4 border-t pt-4">
            <div className="flex w-[30%] justify-between">
              <div className="text-sm text-gray-900">Tổng tiền hàng</div>
              <div className="mr-5 text-sm">₫259.000</div>
            </div>
            <div className="flex w-[30%] justify-between">
              <div className="text-sm text-gray-900">Phí vận chuyển</div>
              <div className="mr-5 text-sm">₫38.000</div>
            </div>
            <div className="flex w-[30%] justify-between">
              <div className="text-sm text-gray-900">Tổng cộng voucher giảm giá:</div>
              <div className="mr-5 text-sm">-₫10.000</div>
            </div>
            <div className="flex w-[30%] justify-between">
              <div className="text-sm text-gray-900">Tổng thanh toán</div>
              <div className="mr-5 text-2xl text-beamin">₫287.000</div>
            </div>
          </div>
          <div className="mb-4 flex w-full flex-row items-center justify-between gap-4 border-t pt-4">
            <div className="ml-8 w-[70%]">
              Nhấn &quot;Đặt hàng&quot; đồng nghĩa với việc bạn đồng ý tuân theo{" "}
              <a href="/terms" className="text-sm text-blue-600">
                Điều khoản Baemin
              </a>
            </div>
            <div className="w-[30%] pl-48">
              <button
                type="button"
                onClick={handleNavigate}
                className="h-10 w-36 rounded-md bg-beamin p-1 text-white hover:brightness-105"
              >
                Đặt hàng
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
