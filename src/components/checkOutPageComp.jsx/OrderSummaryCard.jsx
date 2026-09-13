import { ShieldCheck, ArrowRight, Mic } from "lucide-react";

const mockItems = [
  {
    id: 1,
    title: "Titan Pro X17 Gaming Laptop",
    specs: "Qty: 1 • 64GB DDR5 / 2TB SSD",
    price: "₹2,49,999",
    qty: 1,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300",
  },
  {
    id: 2,
    title: "Aura ANC Spatial Audio Rig",
    specs: "Qty: 1 • Planar Magnetic Driver",
    price: "₹39,998",
    qty: 1,
    icon: Mic,
  },
];

export default function OrderSummaryCard({
  items = mockItems,
  subtotal = "₹2,89,997",
  discount = "-₹5,000",
  promoCode = "VOLT10 Promo",
  totalPayable = "₹2,84,997",
  onPlaceOrder = () => {},
}) {
  return (
    <div className="bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 p-5 sm:p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-extrabold text-white tracking-tight">
          Order Summary
        </h3>
        <span className="text-xs font-semibold text-slate-400">
          {items.length} items
        </span>
      </div>

      {/* Items List */}
      <div className="space-y-3.5">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3.5 p-2.5 rounded-2xl bg-[#050A14] border border-slate-800/80 text-left"
          >
            {/* Thumbnail Box */}
            <div className="relative h-14 w-14 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shrink-0 flex items-center justify-center">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Mic className="h-6 w-6 text-slate-400" />
              )}
              {/* Qty Badge */}
              <span className="absolute top-1 right-1 bg-blue-600 text-white font-mono text-[9px] font-bold px-1 rounded">
                x{item.qty}
              </span>
            </div>

            {/* Product Details */}
            <div className="min-w-0 flex-1">
              <h4 className="text-sm font-bold text-white truncate tracking-tight">
                {item.title}
              </h4>
              <p className="text-xs text-slate-400 font-medium truncate mt-0.5">
                {item.specs}
              </p>
              <p className="text-sm font-extrabold text-white mt-1 font-mono">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Cost Breakdown */}
      <div className="space-y-2.5 pt-2 border-t border-slate-800/80 text-sm">
        <div className="flex items-center justify-between text-slate-400">
          <span>Subtotal</span>
          <span className="font-mono font-bold text-slate-200">{subtotal}</span>
        </div>

        {discount && (
          <div className="flex items-center justify-between text-emerald-400">
            <span>Discount ({promoCode})</span>
            <span className="font-mono font-bold">{discount}</span>
          </div>
        )}

        <div className="flex items-center justify-between text-slate-400">
          <span>Shipping</span>
          <span className="rounded-md bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 text-xs font-mono font-bold text-emerald-400">
            Free
          </span>
        </div>
      </div>

      {/* Total Payable Row */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-left">
        <div>
          <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
            TOTAL PAYABLE
          </span>
          <p className="text-[11px] text-slate-500 font-medium">
            Includes all applicable taxes
          </p>
        </div>

        <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
          {totalPayable}
        </div>
      </div>

      {/* Place Order CTA Button */}
      <button
        type="button"
        onClick={onPlaceOrder}
        className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-base py-3.5 px-4 rounded-xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer"
      >
        <span>Place Order</span>
        <ArrowRight className="h-5 w-5 stroke-[2.5]" />
      </button>

      {/* Footer Trust Badges */}
      <div className="flex items-center justify-center gap-2 text-xs font-medium text-slate-400 pt-1">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="h-4 w-4 text-blue-400 stroke-[2]" />
          <span>Encrypted Checkout</span>
        </div>
        <span>•</span>
        <span>Instant Dispatch</span>
      </div>
    </div>
  );
}
