import { useState } from "react";
import {
  ArrowRight,
  Filter,
  Laptop,
  Headphones,
  Keyboard,
  Smartphone,
  Monitor,
  CheckCircle2,
  Clock,
  Truck,
} from "lucide-react";

const mockOrders = [
  {
    id: "#ORD-2847",
    customerName: "Arjun Vance",
    customerEmail: "arjun.vance@techcorp.io",
    hardwareName: "Titan Pro X17 AI Neural Deck",
    hardwareIcon: Laptop,
    hardwareColor: "text-cyan-400",
    amount: "₹2,49,999",
    status: "Completed",
    statusStyle: "bg-emerald-950/80 border-emerald-800/60 text-emerald-400",
    statusIcon: CheckCircle2,
  },
  {
    id: "#ORD-2831",
    customerName: "Elena Rostova",
    customerEmail: "elena.r@synapse.ai",
    hardwareName: "Aura ANC Spatial Headset (x2)",
    hardwareIcon: Headphones,
    hardwareColor: "text-blue-400",
    amount: "₹39,998",
    status: "In Transit",
    statusStyle: "bg-blue-950/80 border-blue-800/60 text-blue-400",
    statusIcon: Truck,
  },
  {
    id: "#ORD-2819",
    customerName: "Vikramaditya Roy",
    customerEmail: "v.roy@quantumlabs.org",
    hardwareName: "CyberDeck K-800 Optical Deck",
    hardwareIcon: Keyboard,
    hardwareColor: "text-amber-400",
    amount: "₹16,499",
    status: "Pending",
    statusStyle: "bg-amber-950/80 border-amber-800/60 text-amber-400",
    statusIcon: Clock,
  },
  {
    id: "#ORD-2804",
    customerName: "Sarah Jenkins",
    customerEmail: "s.jenkins@metagrid.net",
    hardwareName: "Galaxy Ultra Z9 Max Titan",
    hardwareIcon: Smartphone,
    hardwareColor: "text-cyan-400",
    amount: "₹1,24,999",
    status: "Completed",
    statusStyle: "bg-emerald-950/80 border-emerald-800/60 text-emerald-400",
    statusIcon: CheckCircle2,
  },
  {
    id: "#ORD-2798",
    customerName: "Marcus Zhang",
    customerEmail: "m.zhang@hypernode.dev",
    hardwareName: 'AW3225QF 32" Curved 4K QD-OLED',
    hardwareIcon: Monitor,
    hardwareColor: "text-blue-400",
    amount: "₹1,09,999",
    status: "In Transit",
    statusStyle: "bg-blue-950/80 border-blue-800/60 text-blue-400",
    statusIcon: Truck,
  },
];

export default function RecentOrdersTable({
  orders = mockOrders,
  onViewAll = () => {},
}) {
  const [filterQuery, setFilterQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter orders dynamically based on search query
  const filteredOrders = orders.filter((order) => {
    const q = filterQuery.toLowerCase();
    return (
      order.id.toLowerCase().includes(q) ||
      order.customerName.toLowerCase().includes(q) ||
      order.customerEmail.toLowerCase().includes(q) ||
      order.hardwareName.toLowerCase().includes(q)
    );
  });

  return (
    <section>
      <div className="w-full bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 p-5 sm:p-7 space-y-6">
        {/* Top Header & Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Title & Badge */}
          <div className="flex items-center gap-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Recent Orders
            </h2>
            <span className="rounded-full bg-blue-950/90 border border-blue-800/60 px-3 py-0.5 text-xs font-mono font-bold text-blue-400">
              14 Active Today
            </span>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Search Filter Input */}
            <div className="relative flex items-center">
              <Filter className="absolute left-3.5 h-3.5 w-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filter SKU, customer, or ID..."
                className="w-56 sm:w-64 pl-9 pr-4 py-2 bg-[#050A14] border border-slate-800 rounded-xl text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* View All Button */}
            <button
              type="button"
              onClick={onViewAll}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
            >
              <span>View All</span>
              <ArrowRight className="h-4 w-4 stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#050A14] text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider rounded-xl">
                <th className="py-3.5 px-4 rounded-l-xl">ORDER ID</th>
                <th className="py-3.5 px-4">CUSTOMER</th>
                <th className="py-3.5 px-4">HARDWARE UNIT</th>
                <th className="py-3.5 px-4">AMOUNT</th>
                <th className="py-3.5 px-4 text-right rounded-r-xl">STATUS</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => {
                  const HardwareIcon = order.hardwareIcon;
                  const StatusIcon = order.statusIcon;

                  return (
                    <tr
                      key={order.id}
                      className="hover:bg-slate-800/30 transition-colors group"
                    >
                      {/* Order ID */}
                      <td className="py-4 px-4 font-mono font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
                        {order.id}
                      </td>

                      {/* Customer */}
                      <td className="py-4 px-4">
                        <div>
                          <p className="font-bold text-white tracking-tight">
                            {order.customerName}
                          </p>
                          <p className="text-xs text-slate-400 font-mono mt-0.5">
                            {order.customerEmail}
                          </p>
                        </div>
                      </td>

                      {/* Hardware Unit */}
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2.5">
                          <HardwareIcon
                            className={`h-4 w-4 shrink-0 ${order.hardwareColor}`}
                          />
                          <span className="font-semibold text-slate-200">
                            {order.hardwareName}
                          </span>
                        </div>
                      </td>

                      {/* Amount */}
                      <td className="py-4 px-4 font-extrabold text-white tracking-tight">
                        {order.amount}
                      </td>

                      {/* Status Badge */}
                      <td className="py-4 px-4 text-right">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-mono font-bold shrink-0 ${order.statusStyle}`}
                        >
                          <StatusIcon className="h-3.5 w-3.5" />
                          <span>{order.status}</span>
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="py-8 text-center text-xs font-mono text-slate-500"
                  >
                    No matching orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer & Pagination */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-400 border-t border-slate-800/80">
          <p className="font-medium">
            Showing{" "}
            <span className="text-slate-200 font-bold">
              {filteredOrders.length}
            </span>{" "}
            of 14 orders pending routing verification
          </p>

          {/* Pagination */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-3 py-1.5 rounded-lg bg-[#050A14] border border-slate-800 hover:bg-slate-800/60 text-slate-300 disabled:opacity-40 font-bold transition-colors cursor-pointer"
            >
              Previous
            </button>

            <span className="px-2 font-mono font-bold text-slate-300">
              Page {currentPage} / 3
            </span>

            <button
              type="button"
              disabled={currentPage === 3}
              onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
              className="px-3 py-1.5 rounded-lg bg-[#050A14] border border-slate-800 hover:bg-slate-800/60 text-slate-300 disabled:opacity-40 font-bold transition-colors cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
