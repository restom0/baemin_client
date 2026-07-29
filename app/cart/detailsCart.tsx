import Image from "next/image";

export default function DetailsCart({ Details }: { Details: any[] }) {
  return (
    <>
      {Details.map((items, groupIndex) => (
        <section
          key={`${items.name}-${groupIndex}`}
          aria-label={`Giỏ hàng từ ${items.name}`}
          className="flex w-full flex-col rounded-md bg-white"
        >
          <div className="my-7 ml-8 flex flex-row items-center gap-3">
            <input
              type="checkbox"
              value=""
              aria-label={`Chọn ${items.name}`}
              className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 dark:ring-offset-gray-800"
            />
            <span className="text-base font-normal">{items.name}</span>
            <div className="rounded-md bg-beamin p-1">
              {items.quandoitac && <span className="text-sm font-normal text-white">Quán đối tác</span>}
            </div>
          </div>
          <div className="w-full border-y border-solid border-gray-600 py-3">
            {items.items.map((item: any, index: number) => (
              <div
                key={`${item.namefood}-${index}`}
                className={
                  index === items.items.length - 1
                    ? "grid w-full grid-cols-12"
                    : "grid w-full grid-cols-12 border-b border-solid border-x-gray-300"
                }
              >
                <div className="col-span-4 flex flex-row items-center gap-3 pl-8">
                  <input
                    type="checkbox"
                    value=""
                    aria-label={`Chọn ${item.namefood}`}
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 dark:ring-offset-gray-800"
                  />
                  <div className="relative h-36 w-36">
                    <Image layout="fill" objectFit="cover" src={item.img} alt={item.namefood} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <span className="text-base">{item.namefood}</span>
                    <span className="text-sm text-gray-600">{item.description}</span>
                  </div>
                </div>
                <div className="col-span-2 flex flex-row items-center justify-center gap-3">₫{item.price}</div>
                <div className="col-span-2 flex flex-row items-center justify-center gap-3">
                  <input
                    type="number"
                    aria-label={`Số lượng ${item.namefood}`}
                    className="w-16 rounded border border-gray-300 text-center"
                    defaultValue={item.quantity}
                    min="1"
                    max="100"
                  />
                </div>
                <div className="col-span-2 flex flex-row items-center justify-center gap-3">
                  ₫{item.totalprice}
                </div>
                <div className="col-span-2 flex flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    aria-label={`Xóa ${item.namefood}`}
                    className="cursor-pointer border-0 bg-transparent p-0 hover:text-red-600"
                  >
                    Xóa
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
