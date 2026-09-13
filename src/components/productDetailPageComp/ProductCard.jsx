import { BadgeCheck, Palette, ShieldCheck } from "lucide-react";

const ProductCard = ({ image, specs, loading, error }) => {
  const specsData = [
    {
      icon: BadgeCheck,
      title: specs?.brand,
    },
    {
      icon: Palette,
      title: specs?.color,
    },
    {
      icon: ShieldCheck,
      title: specs?.warranty,
    },
  ];

  if (loading)
    return (
      <>
        <div>Loading...</div>
      </>
    );

  if (error)
    return (
      <>
        <p>{error?.message}</p>
      </>
    );
  return (
    <>
      <div className="rounded-xl bg-[#111a2e] p-3">
        {/* Card */}
        <div className="relative overflow-hidden rounded-lg bg-[#171b1f]">
          {/* Product Image */}
          <div className="aspect-[5/3] w-full">
            <img
              src={image}
              alt={specs?.brand}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* product spece */}
      <div className="grid grid-cols-3 gap-1.5 w-full mt-5">
        {specsData.map(({ icon: Icon, title, value }, i) => (
          <div
            key={i}
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
