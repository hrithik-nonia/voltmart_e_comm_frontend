import { useState } from "react";
import { Eye, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const mockCustomerNodes = [
  {
    id: "node-1",
    name: "Arjun Vance",
    tag: "TECH-CORP-US",
    email: "arjun.v@techcorp.io",
    ordersCount: 28,
    totalSpent: "$34,850.00",
    status: "Active",
    statusType: "active", // 'active' | 'vip' | 'inactive'
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    badgeColor: "bg-cyan-400",
  },
  {
    id: "node-2",
    name: "Elena Rostova",
    tag: "QUANTUM-CORE-DE",
    email: "elena@quantum-core.de",
    ordersCount: 19,
    totalSpent: "$22,410.00",
    status: "Enterprise VIP",
    statusType: "vip",
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150",
    badgeColor: "bg-blue-500",
  },
  {
    id: "node-3",
    name: "Siddharth Roy",
    tag: "HYPERION-IN",
    email: "siddharth@hyperion.in",
    ordersCount: 14,
    totalSpent: "$18,900.00",
    status: "Active",
    statusType: "active",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    badgeColor: "bg-cyan-400",
  },
  {
    id: "node-4",
    name: "Marcus Thorne",
    tag: "APEX-LABS-US",
    email: "m.thorne@apex-labs.com",
    ordersCount: 31,
    totalSpent: "$41,200.00",
    status: "Active",
    statusType: "active",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    badgeColor: "bg-cyan-400",
  },
  {
    id: "node-5",
    name: "Aria Montana",
    tag: "NEBULA-NET",
    email: "aria.m@nebula.net",
    ordersCount: 6,
    totalSpent: "$4,850.00",
    status: "Inactive",
    statusType: "inactive",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    badgeColor: "bg-slate-500",
  },
  {
    id: "node-6",
    name: "Daisuke Sato",
    tag: "TOKYO-ROBOTICS-JP",
    email: "sato@tokyo-robotics.jp",
    ordersCount: 42,
    totalSpent: "$56,700.00",
    status: "Enterprise VIP",
    statusType: "vip",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    badgeColor: "bg-blue-500",
  },
];

export default function CustomerNodesTable({
  nodes = mockCustomerNodes,
  onViewMore = () => {},
}) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className="bg-[#070D19]">
      <div className="w-full bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 p-5 sm:p-7 space-y-6 text-left">
        {/* Header Title */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Customer Node Directory
            </h2>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              Manage enterprise clients, node order volumes, and VIP status
              routing.
            </p>
          </div>
        </div>

        {/* Data Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#050A14] text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider rounded-xl">
                <th className="py-3.5 px-4 rounded-l-xl">CUSTOMER NODE</th>
                <th className="py-3.5 px-4">IDENTIFIER / DOMAIN</th>
                <th className="py-3.5 px-4">ORDERS</th>
                <th className="py-3.5 px-4">TOTAL SPENT</th>
                <th className="py-3.5 px-4">STATUS</th>
                <th className="py-3.5 px-4 text-right rounded-r-xl">ACTIONS</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {nodes.map((node) => (
                <tr
                  key={node.id}
                  className="hover:bg-slate-800/30 transition-colors group"
                >
                  {/* Customer Node (Avatar + Name + Tag) */}
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="relative shrink-0">
                        <img
                          src={node.avatar}
                          alt={node.name}
                          className="h-10 w-10 rounded-xl object-cover border border-slate-800 shadow-sm"
                        />
                        <span
                          className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#091122] ${node.badgeColor}`}
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors truncate">
                          {node.name}
                        </p>
                        <p className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider truncate mt-0.5">
                          {node.tag}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Identifier / Domain */}
                  <td className="py-4 px-4 font-mono text-xs text-slate-300">
                    {node.email}
                  </td>

                  {/* Orders Count */}
                  <td className="py-4 px-4">
                    <div className="font-mono text-xs">
                      <span className="font-extrabold text-white text-sm block">
                        {node.ordersCount}
                      </span>
                      <span className="text-slate-400 text-[11px] font-medium">
                        Orders
                      </span>
                    </div>
                  </td>

                  {/* Total Spent */}
                  <td className="py-4 px-4 font-mono font-extrabold text-cyan-400 text-base">
                    {node.totalSpent}
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-4">
                    {node.statusType === "vip" ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-mono font-bold text-blue-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        Enterprise VIP
                      </span>
                    ) : node.statusType === "active" ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                        Inactive
                      </span>
                    )}
                  </td>

                  {/* Action Column (View More) */}
                  <td className="py-4 px-4 text-right">
                    <button
                      type="button"
                      onClick={() => onViewMore(node)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#050A14] hover:bg-slate-800/80 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white transition-all cursor-pointer group/btn"
                    >
                      <Eye className="h-3.5 w-3.5 text-slate-400 group-hover/btn:text-cyan-400 transition-colors" />
                      <span>View More</span>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover/btn:translate-x-0.5 transition-transform" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer & Pagination Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs font-mono text-slate-400 border-t border-slate-800/80">
          <div>
            Displaying <strong className="text-white">6</strong> of 14,820
            Customer Nodes •{" "}
            <span className="text-cyan-400">Directory Latency: 9ms</span>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="p-1.5 rounded-lg bg-[#050A14] border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage(1)}
              className={`px-3 py-1 rounded-lg font-bold ${
                currentPage === 1
                  ? "bg-blue-600 text-white"
                  : "bg-[#050A14] border border-slate-800 text-slate-300"
              }`}
            >
              1
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage(2)}
              className={`px-3 py-1 rounded-lg font-bold ${
                currentPage === 2
                  ? "bg-blue-600 text-white"
                  : "bg-[#050A14] border border-slate-800 text-slate-300"
              }`}
            >
              2
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage(3)}
              className={`px-3 py-1 rounded-lg font-bold ${
                currentPage === 3
                  ? "bg-blue-600 text-white"
                  : "bg-[#050A14] border border-slate-800 text-slate-300"
              }`}
            >
              3
            </button>

            <span className="px-1 text-slate-500">...</span>

            <button
              type="button"
              onClick={() => setCurrentPage(2470)}
              className="px-2.5 py-1 rounded-lg bg-[#050A14] border border-slate-800 text-slate-300 font-bold"
            >
              2470
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage((p) => p + 1)}
              className="p-1.5 rounded-lg bg-[#050A14] border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
