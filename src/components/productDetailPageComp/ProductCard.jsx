import { Heart, Cpu, Gauge, Fan } from "lucide-react";

const specs = [
  {
    icon: Cpu,
    title: "ARCHITECTURE",
    value: "Intel i9-14900HX",
  },
  {
    icon: Gauge,
    title: "CLOCK BOOST",
    value: "5.8 GHz Neural",
  },
  {
    icon: Fan,
    title: "THERMAL LOAD",
    value: "175W Liquid Metal",
  },
];

const ProductCard = () => {
  return (
    <>
      <div className="rounded-xl bg-[#111a2e] p-3">
        {/* Card */}
        <div className="relative overflow-hidden rounded-lg bg-[#171b1f]">
          {/* Wishlist */}
          <button
            className="
            absolute right-2 top-2 z-10
            flex h-8 w-8 items-center justify-center
            rounded-lg bg-[#283044]/90
            text-gray-400
            transition-all duration-200
            hover:bg-[#35405a]
            hover:text-white
          "
          >
            <Heart size={17} strokeWidth={2} />
          </button>

          {/* Product Image */}
          <div className="aspect-[5/3] w-full">
            <img
              src="/product-laptop.png"
              alt="Gaming Laptop"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* product spece */}
      <div className="grid grid-cols-3 gap-1.5 w-full mt-5">
        {specs.map(({ icon: Icon, title, value }) => (
          <div
            key={title}
            className="
            flex items-center gap-2
            rounded-md
            bg-[#111b30]
            px-2.5 py-3
          "
          >
            {/* Icon */}
            <Icon
              size={25}
              strokeWidth={2.5}
              className="shrink-0 text-cyan-400"
            />

            {/* Text */}
            <div className="min-w-0 leading-none">
              <p className="mb-0.5 text-[12px] font-bold tracking-wide text-gray-300">
                {title}
              </p>

              <p className="truncate text-[14px] font-medium text-white">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
