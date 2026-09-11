import { useState } from "react";
import {
  Minus,
  Plus,
  ShoppingBag,
  Zap,
  Truck,
  ShieldCheck,
} from "lucide-react";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedMemory, setSelectedMemory] = useState("64GB / 2TB");

  const memoryOptions = [
    {
      name: "32GB / 1TB",
      label: "Standard Core",
      price: "",
    },
    {
      name: "64GB / 2TB",
      label: "Pro Choice",
      price: "",
    },
    {
      name: "128GB / 4TB",
      label: "+₹52,000",
      price: "",
    },
  ];

  return (
    <section className=" ">
      {/* Product Title */}
      <h1 className="text-4xl font-bold leading-[1.15] tracking-tight">
        Titan Pro X17 AI Neural
        <br />
        Deck
      </h1>

      {/* Stock */}
      <div className="mt-4 flex items-center gap-2 text-sm">
        <span className="flex items-center gap-1 text-cyan-400">
          In Stock - 14 units left in Express Node
        </span>

        <span className="text-gray-300">Dispatches in 2h</span>
      </div>

      {/* Price Box */}
      <div className="mt-4 rounded-lg bg-[#121c32] p-3">
        <div className="flex items-center gap-2">
          <span className="text-[24px] font-extrabold text-orange-500">
            ₹2,49,999
          </span>

          <span className="text-[12px] text-gray-500 line-through">
            ₹3,04,999
          </span>
        </div>

        {/* Savings */}
        <div className="mt-1 inline-flex rounded-full bg-orange-500/20 px-1.5 py-0.5">
          <span className="text-[10px] font-bold text-orange-400">
            SAVE ₹55,000 (18% OFF)
          </span>
        </div>

        {/* Tax */}
        <p className="mt-1 text-[10px] leading-[1.35] text-gray-300">
          Inclusive of all applicable GST, import surcharges, and 3-Year
          VoltShield Zero-Downtime Guarantee.
        </p>
      </div>

      {/* Description */}
      <p className="mt-6 text-[10px] leading-[1.55] text-gray-200">
        Engineered for elite esports and generative AI workloads. Featuring dual
        liquid metal cryo-vapor cooling, 100% DCI-P3 factory-calibrated OLED
        panel, and zero-latency per-key optical mechanical deck.
      </p>

      {/* Memory Header */}
      <div className="mt-5 flex items-center justify-between">
        <h3 className="text-[11px] font-bold">Neural Memory & NVMe Matrix</h3>

        <span className="text-[7px] font-bold text-cyan-400">
          UPGRADEABLE TO 128GB
        </span>
      </div>

      {/* Memory Options */}
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {memoryOptions.map((option) => {
          const active = selectedMemory === option.name;

          return (
            <button
              key={option.name}
              onClick={() => setSelectedMemory(option.name)}
              className={`
                h-[40px] rounded-md px-1 text-center
                transition-all duration-200
                ${
                  active
                    ? "bg-blue-600 shadow-lg shadow-blue-600/20"
                    : "bg-[#111b30] hover:bg-[#17243d]"
                }
              `}
            >
              <p className="text-[12px] font-semibold">{option.name}</p>

              <p
                className={`mt-1 text-[10px] ${
                  active ? "text-white" : "text-gray-500"
                }`}
              >
                {active ? "Pro Choice" : option.label}
              </p>
            </button>
          );
        })}
      </div>

      {/* Quantity + Add Cart */}
      <div className="mt-5 flex gap-2">
        {/* Quantity */}
        <div className="flex h-[34px] w-[78px] items-center justify-between rounded-md bg-[#111b30] px-2">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="text-gray-400 hover:text-white"
          >
            <Minus size={12} />
          </button>

          <span className="text-[10px]">{quantity}</span>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="text-gray-400 hover:text-white"
          >
            <Plus size={12} />
          </button>
        </div>

        {/* Add Cart */}
        <button
          className="
            flex h-[34px] flex-1 items-center
            justify-center gap-2
            rounded-md bg-orange-500
            text-[12px] font-semibold text-white
            transition-all duration-200
            hover:bg-orange-600
            active:scale-[0.98]
          "
        >
          <ShoppingBag size={12} />
          Add to Cart
        </button>
      </div>

      {/* Instant Checkout */}
      <button
        className="
          mt-2 flex h-[35px] w-full
          items-center justify-center gap-2
          rounded-md bg-blue-600
          text-[12px] font-semibold
          shadow-lg shadow-blue-600/20
          transition-all
          hover:bg-blue-500
          active:scale-[0.99]
        "
      >
        <Zap size={12} fill="currentColor" />
        Instant Checkout via Lightning Node
      </button>

      {/* Bottom Features */}
      <div className="mt-5 grid grid-cols-2 gap-1.5">
        {/* Delivery */}
        <div className="flex items-center gap-2 rounded-md bg-[#111b30] px-2 py-2">
          <Truck size={20} className="shrink-0 text-blue-400" />

          <div>
            <p className="text-[12px] font-semibold">Free Express Delivery</p>

            <p className="mt-0.5 text-[10px] text-gray-400">
              Arriving Tomorrow, 2:00 PM
            </p>
          </div>
        </div>

        {/* Shield */}
        <div className="flex items-center gap-2 rounded-md bg-[#111b30] px-2 py-2">
          <ShieldCheck size={20} className="shrink-0 text-cyan-400" />

          <div>
            <p className="text-[12px] font-semibold">VoltShield™ 3-Year</p>

            <p className="mt-0.5 text-[10px] text-gray-400">
              Comprehensive on-site repair
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
