import { useState } from "react";
import {
  CheckCircle2,
  Clock,
  Truck,
  RotateCcw,
  FileText,
  MapPin,
  XCircle,
  Laptop,
  Mic,
  Keyboard,
  Check,
} from "lucide-react";

const mockOrders = [
  {
    id: "#ORD-2847",
    date: "12 Aug 2024",
    status: "Delivered",
    statusStyle: "bg-emerald-950/80 border-emerald-800/60 text-emerald-400",
    title: "Titan Pro X17 Gaming Laptop",
    specs: "Qty: 1 • 64GB DDR5 / 2TB SSD",
    price: "₹2,49,999",
    paymentTag: "Prepaid (UPI)",
    deliveredInfo: "Delivered on 14 Aug, 18:22 IST",
    icon: Laptop,
  },
  {
    id: "#ORD-2831",
    date: "8 Aug 2024",
    status: "Shipped",
    statusStyle: "bg-blue-950/80 border-blue-800/60 text-blue-400",
    title: "Aura ANC Spatial Audio Rig",
    specs: "Qty: 1 • Planar Magnetic Driver",
    price: "₹39,998",
    paymentTag: "Express Node",
    icon: Mic,
    tracking: {
      awb: "VLT-TRK-99281",
      estArrival: "Tomorrow by 2:00 PM",
      currentStep: 3, // 1: Ordered, 2: Packed, 3: Shipped, 4: Delivered
    },
  },
  {
    id: "#ORD-2819",
    date: "1 Aug 2024",
    status: "Pending",
    statusStyle: "bg-amber-950/80 border-amber-800/60 text-amber-400",
    title: "CyberDeck K-800 Rapid-Trigger Keyboard",
    specs: "Qty: 1 • Hall Effect Magnetic Switches",
    price: "₹16,499",
    paymentTag: "Payment Verification",
    pendingInfo: "Awaiting bank authorization confirmation",
    icon: Keyboard,
  },
];

export default function MyOrdersDashboard({
  orders = mockOrders,
  onViewDetails = () => {},
  onTrackOrder = () => {},
  onBuyAgain = () => {},
  onCancelOrder = () => {},
}) {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All", count: 3 },
    { id: "pending", label: "Pending", count: 1 },
    { id: "shipped", label: "Shipped", count: 1 },
    { id: "delivered", label: "Delivered", count: 1 },
    { id: "cancelled", label: "Cancelled", count: 0 },
  ];

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "all") return true;
    return order.status.toLowerCase() === activeTab.toLowerCase();
  });

  return (
    <div className="bg-[#070D19] p-4 sm:p-8 font-sans text-left space-y-6">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          My Orders
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 font-medium">
          Track shipments, download invoices, and reorder hardware requisitions.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-4 border-b border-slate-800/80 overflow-x-auto pb-1 text-xs sm:text-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 pb-2.5 font-bold transition-all cursor-pointer shrink-0 border-b-2 ${
              activeTab === tab.id
                ? "border-blue-500 text-white"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            <span>{tab.label}</span>
            <span
              className={`px-1.5 py-0.5 rounded font-mono text-[10px] ${
                activeTab === tab.id
                  ? "bg-blue-950/80 text-blue-400"
                  : "bg-slate-800/80 text-slate-400"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => {
            const Icon = order.icon;

            return (
              <div
                key={order.id}
                className="bg-[#091122] rounded-2xl border border-slate-800/90 shadow-xl shadow-black/40 p-5 space-y-4"
              >
                {/* Order Top Bar */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-400">
                    <span className="text-slate-200 font-bold">{order.id}</span>
                    <span>•</span>
                    <span>{order.date}</span>
                  </div>

                  {/* Status Badge */}
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-mono font-bold ${order.statusStyle}`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current inline-block" />
                    {order.status}
                  </span>
                </div>

                {/* Product Detail Section */}
                <div className="flex items-start justify-between gap-4 pt-1">
                  <div className="flex items-start gap-3.5 min-w-0">
                    {/* Item Thumbnail */}
                    <div className="h-12 w-12 rounded-xl bg-[#050A14] border border-slate-800 flex items-center justify-center text-slate-300 shrink-0">
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                        {order.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono mt-0.5 truncate">
                        {order.specs}
                      </p>
                    </div>
                  </div>

                  {/* Price & Tag */}
                  <div className="text-right shrink-0">
                    <div className="text-base sm:text-lg font-extrabold text-white font-mono">
                      {order.price}
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-slate-400">
                      {order.paymentTag}
                    </span>
                  </div>
                </div>

                {/* Embedded Progress Tracker (For Shipped Orders) */}
                {order.tracking && (
                  <div className="bg-[#050A14] rounded-xl border border-slate-800/80 p-4 space-y-4">
                    {/* 4-Step Tracker */}
                    <div className="relative flex items-center justify-between max-w-md mx-auto">
                      {/* Line Background */}
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
                      <div className="absolute top-1/2 left-0 w-3/4 h-0.5 bg-blue-600 -translate-y-1/2 z-0" />

                      {/* Step 1: Ordered */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-blue-400 mt-1">
                          Ordered ✓
                        </span>
                      </div>

                      {/* Step 2: Packed */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                          <Check className="h-3.5 w-3.5 stroke-[3]" />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-blue-400 mt-1">
                          Packed ✓
                        </span>
                      </div>

                      {/* Step 3: Shipped */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                          <Truck className="h-3.5 w-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-[11px] font-mono font-bold text-blue-400 mt-1">
                          Shipped ✓
                        </span>
                      </div>

                      {/* Step 4: Delivered */}
                      <div className="relative z-10 flex flex-col items-center">
                        <div className="h-6 w-6 rounded-full bg-slate-900 border border-slate-700 text-slate-500 flex items-center justify-center text-[10px]">
                          o
                        </div>
                        <span className="text-[11px] font-mono font-semibold text-slate-500 mt-1">
                          Delivered o
                        </span>
                      </div>
                    </div>

                    {/* AWB & Est Arrival */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-xs font-mono pt-1">
                      <span className="text-slate-400">
                        AWB:{" "}
                        <strong className="text-slate-200">
                          {order.tracking.awb}
                        </strong>
                      </span>
                      <span className="text-cyan-400 font-semibold">
                        • Est. Arrival: {order.tracking.estArrival}
                      </span>
                    </div>
                  </div>
                )}

                {/* Footer Actions & Messages */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-800/60">
                  {/* Status Messages */}
                  <div className="flex items-center gap-2 text-xs font-medium">
                    {order.status === "Delivered" && (
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <CheckCircle2 className="h-4 w-4 stroke-[2.2]" />
                        <span>{order.deliveredInfo}</span>
                      </div>
                    )}
                    {order.status === "Pending" && (
                      <div className="flex items-center gap-1.5 text-amber-400">
                        <Clock className="h-4 w-4 stroke-[2.2]" />
                        <span>{order.pendingInfo}</span>
                      </div>
                    )}
                  </div>

                  {/* Right Action Buttons */}
                  <div className="flex items-center gap-2.5 justify-end">
                    {order.status === "Pending" && (
                      <button
                        type="button"
                        onClick={() => onCancelOrder(order)}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-rose-950/30 hover:bg-rose-900/40 border border-rose-800/50 text-xs font-bold text-rose-400 transition-colors cursor-pointer"
                      >
                        <XCircle className="h-3.5 w-3.5" />
                        <span>Cancel Order</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => onViewDetails(order)}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#050A14] hover:bg-slate-800/60 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>View Details</span>
                    </button>

                    {order.status === "Delivered" && (
                      <button
                        type="button"
                        onClick={() => onBuyAgain(order)}
                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-950/40 hover:bg-amber-900/50 border border-amber-800/60 text-xs font-bold text-amber-400 transition-colors cursor-pointer"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        <span>Buy Again</span>
                      </button>
                    )}

                    {order.status === "Shipped" && (
                      <button
                        type="button"
                        onClick={() => onTrackOrder(order)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer"
                      >
                        <MapPin className="h-3.5 w-3.5" />
                        <span>Track Order</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="py-12 text-center text-slate-500 font-mono text-sm">
            No orders found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
