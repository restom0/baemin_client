import Image from "next/image";

export default function DetailsCheckout({ items }: { items: any[] }) {
  return (
    <div role="table" aria-label="Chi tiết đơn hàng">
      <div role="row" className="ml-10 mt-3 grid grid-cols-12 font-medium">
        <div role="columnheader" className="col-span-6">
          Món ăn
        </div>
        <div role="columnheader" className="col-span-2">
          Đơn giá
        </div>
        <div role="columnheader" className="col-span-2">
          Số lượng
        </div>
        <div role="columnheader" className="col-span-2">
          Thành tiền
        </div>
      </div>

      {items.map((item: any, index: number) => (
        <div role="row" key={`${item.name}-${index}`} className="ml-10 mt-4 grid grid-cols-12">
          <div role="cell" className="col-span-6 flex flex-row items-center gap-3">
            <div className="relative h-16 w-16">
              <Image layout="fill" objectFit="cover" src={item.img} alt={item.name} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-base">{item.name}</span>
              <span className="text-sm text-gray-600">{item.description}</span>
            </div>
          </div>
          <div role="cell" className="col-span-2 ml-1 flex items-center">
            {item.price}
          </div>
          <div role="cell" className="col-span-2 ml-5 flex items-center">
            {item.quantity}
          </div>
          <div role="cell" className="col-span-2 ml-5 flex items-center">
            {item.totalprice}
          </div>
        </div>
      ))}
    </div>
  );
}
