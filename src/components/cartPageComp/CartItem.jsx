import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";

const cartItems = [
  {
    id: 1,
    name: "Titan Pro X17 AI Neural Deck",
    status: "In Stock",
    details: "64GB DDR5 • 2TB PCIe Gen5 • 240Hz OLED • Lunar...",
    sku: "VM-X17-PRO",
    tag: "3Y ArmorCare Included",
    price: "₹2,49,999",
    oldPrice: "₹3,04,999",
    quantity: 1,
    image: "/products/titan-pro.png",
    badge: "GEN-5",
  },
  {
    id: 2,
    name: "CyberDeck K-800 Rapid-Trigger Keyboard",
    status: "Ready",
    details: "Hall Effect Magnetic Switches • 8000Hz Polling • Ca...",
    sku: "KB-VM-800K",
    tag: "Hot-Swappable PCB",
    price: "₹16,499",
    oldPrice: "₹19,999",
    quantity: 1,
    image: "/products/cyberdeck-k800.png",
    badge: "8KHZ",
  },
  {
    id: 3,
    name: "Aura ANC Spatial Audio Headset",
    status: "Pair Pack (2x)",
    details: "Lossless 2.4GHz + BT 5.4 • 50mm Planar Drivers • ...",
    sku: "AU-VM-ANC9",
    tag: "Low-Latency RF",
    price: "₹39,998",
    oldPrice: "₹19,999 each",
    quantity: 2,
    image: "/products/aura-headset.png",
    badge: "PLANAR",
  },
];

const CartItem = ({ item }) => {
  return (
    <div className="grid grid-cols-[66px_minmax(0,1fr)_66px_90px_20px] items-center gap-3 border-b border-[#202a40] px-4 py-4 last:border-b-0">
      {/* Product Image */}
      <div className="relative h-[70px] w-[70px] overflow-hidden rounded-sm bg-[#080f20]">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Product Information */}
      <div className="min-w-0">
        <h3 className="truncate text-[15px] font-bold text-gray-200">
          {item.name}
        </h3>

        {/* Stock */}
        <p className="mt-1 truncate text-[9px] font-semibold text-emerald-400">
          ● {item.status}
        </p>

        {/* Details */}
        <p className="mt-1 truncate text-[10px] text-gray-400">
          {item.details}
        </p>
      </div>

      {/* Quantity */}
      <div className="flex h-7 items-center justify-between rounded-sm bg-[#080f20] px-2">
        <button className="text-gray-400 hover:text-white">
          <Minus size={12} />
        </button>

        <span className="text-[12px] text-white">{item.quantity}</span>

        <button className="text-gray-400 hover:text-white">
          <Plus size={12} />
        </button>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="text-[14px] font-bold text-orange-400">{item.price}</p>

        <p className="text-[10px] text-gray-500 line-through">
          {item.oldPrice}
        </p>
      </div>

      {/* Delete */}
      <button
        className="text-gray-500 transition hover:text-red-400"
        title="Remove item"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

const MyCart = () => {
  return (
    <main>
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <h1 className="text-[24px] font-bold">My Cart</h1>

        <span className="rounded-full bg-blue-600/20 px-2 py-0.5 text-[12px] font-bold text-blue-400">
          3 ITEMS
        </span>
      </div>

      {/* Cart Container */}
      <div className="overflow-hidden rounded-md bg-[#151e32]">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="mt-6 flex items-center justify-between">
        {/* Continue Shopping */}
        <button
          className="
            flex items-center gap-1
            text-[12px] font-semibold
            text-gray-300
            transition hover:text-white
          "
        >
          <ArrowLeft size={12} />
          Continue Hardware Shopping
        </button>
      </div>
    </main>
  );
};

export default MyCart;
