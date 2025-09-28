import { FaApple } from "react-icons/fa"
import {
  SiHp,
  SiDell,
  SiXiaomi,
  SiJbl,
  SiAsus,
  SiEpson,
  SiLapce,
} from "react-icons/si"

const brands = [
  { name: "EPSON", icon: <SiEpson size={60} /> },
  { name: "HP", icon: <SiHp size={50} /> },
  { name: "DELL", icon: <SiDell size={50} /> },
  { name: "Apple", icon: <FaApple size={50} /> },
  { name: "Mi", icon: <SiXiaomi size={50} /> },
  { name: "Logi", icon: <SiLapce size={50} /> },
  { name: "JBL", icon: <SiJbl size={50} /> },
  { name: "ASUS", icon: <SiAsus size={50} /> },
]

export default function SelectedBrands() {
  return (
    <section className="py-12 mt-16 bg-white dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-10">
          Selected Brands
        </h2> */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-10 place-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="text-neutral-800 dark:text-neutral-200 dark:hover:text-white hover:text-black transition"
            >
              {brand.icon ? (
                brand.icon
              ) : (
                <span className="text-lg font-bold">{brand.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
