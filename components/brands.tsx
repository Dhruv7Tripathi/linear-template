import { FaApple } from "react-icons/fa";
import { SiHp, SiDell, SiXiaomi, SiJbl, SiAsus, Si1Panel } from "react-icons/si";

const brands = [
  { name: "EPSON", icon: null },
  { name: "HP", icon: <SiHp size={50} /> },
  { name: "DELL", icon: <SiDell size={50} /> },
  { name: "Apple", icon: <FaApple size={50} /> },
  { name: "Mi", icon: <SiXiaomi size={50} /> },
  { name: "Logi", icon: null },
  { name: "JBL", icon: <SiJbl size={50} /> },
  { name: "ASUS", icon: <SiAsus size={50} /> },
  // { name: "1Panel", icon: <Si1Panel size={50} /> },
];

export default function SelectedBrands() {
  return (
    <section className="py-10 mt-16  bg-white dark:bg-black text-center">
      {/* <h2 className="text-2xl font-semibold text-neutral-900  dark:text-neutral-100 mb-10">Selected Brands</h2> */}
      <div className="flex flex-wrap max-w-7xl space-x-10 justify-center gap-16">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex  items-center justify-center text-neutral-800 dark:text-neutral-200 dark:hover:text-white hover:text-black transition"
          >
            {brand.icon ? (
              brand.icon
            ) : (
              <span className="text-xl font-bold">{brand.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}