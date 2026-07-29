import ScrollBar from "@/components/scrollBar";
import ScrollFood from "@/components/scrollFood";
import Image from "next/image";

const categories = [
  { name: "Gà rán", imageSrc: "/images/Ga.png", description: "Gà rán" },
  { name: "Burger", imageSrc: "/images/burger.jpg", description: "Burger" },
  { name: "Bún", imageSrc: "/images/noddle.png", description: "Bún" },
  { name: "Mì", imageSrc: "/images/noddle.png", description: "Mì" },
  { name: "Món nhanh", imageSrc: "/images/noddle.png", description: "Món nhanh" },
];

const banneritems = [
  {
    id: "1",
    name: "Bản đồ khu vực giao hàng 1",
    url: "/images/map1.png",
  },
  {
    id: "2",
    name: "Bản đồ khu vực giao hàng 2",
    url: "/images/map2.png",
  },
  {
    id: "3",
    name: "Bản đồ khu vực giao hàng 3",
    url: "/images/map3.png",
  },
  {
    id: "4",
    name: "Bản đồ khu vực giao hàng 4",
    url: "/images/map4.png",
  },
];

const todayFood = {
  title: "Hôm nay ăn gì",
  items: Array.from({ length: 6 }, (_, index) => ({
    id: String(index + 1),
    name: "Gà ủ muối hoa tiêu - Food",
    adrress: "4A Đường Số 71, P. Tân Quy, Quận 7, TP. HCM",
    img: "/food/ga1.jpg",
    kind: "Quán ăn",
  })),
};

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <aside className="col-span-3 z-40 pl-8 pr-8 pt-3" aria-labelledby="menu-title">
        <nav className="fixed flex w-64 flex-col gap-3 rounded-2xl bg-white pb-5 pl-3 pt-2">
          <h2 id="menu-title" className="m-0 text-base font-semibold">
            Thực đơn
          </h2>
          {categories.map((item) => (
            <button
              type="button"
              key={item.name}
              className="flex cursor-pointer flex-col gap-3 border-0 bg-transparent p-0 text-left hover:bg-slate-100"
            >
              <span className="flex flex-row items-center gap-1">
                <Image src={item.imageSrc} width={30} height={30} alt={item.description} />
                <span>{item.name}</span>
              </span>
            </button>
          ))}
        </nav>
      </aside>
      <main className="col-span-9 flex w-full flex-col gap-3 pr-8 pt-3">
        <h1 className="ds-visually-hidden">Baemin dashboard</h1>
        <ScrollBar items={banneritems} />
        <ScrollFood items={todayFood} />
        <ScrollFood items={todayFood} />
      </main>
    </div>
  );
}
