import { useState } from "react";
import {
  Eye,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Monitor,
  Mouse,
  Headphones,
  Server,
  CreditCard,
  Building2,
  Zap,
} from "lucide-react";

const orders = [
  {
    id: "#ORD-9482",
    customer: "Arjun Vance",
    email: "arjun.v@techcorp.io",
    hardware: "Titan Pro X17 AI Neural Dock",
    qty: "Qty: 01 · 128GB NPU Compute",
    Icon: Cpu,
    telemetryDate: "Oct 24, 2024",
    telemetryTime: "14:32:08 UTC",
    netValue: "$2,499.00",
    settlementIcon: CreditCard,
    settlementLabel: "Visa Corp",
    settlementSub: "•••• 4242",
    status: "Processing",
    statusText: "text-blue-400",
    statusBg: "bg-blue-400/10",
    statusBorder: "border-blue-400/30",
    dot: "bg-blue-400",
  },
  {
    id: "#ORD-9481",
    customer: "Elena Rostova",
    email: "elena@quantum-core.de",
    hardware: "CyberDeck K-800 Split Matrix",
    qty: "Qty: 02 · Magnetic Hall Switches",
    Icon: Monitor,
    telemetryDate: "Oct 24, 2024",
    telemetryTime: "13:15:42 UTC",
    netValue: "$789.00",
    settlementIcon: Building2,
    settlementLabel: "Wire",
    settlementSub: "Transfer",
    status: "Shipped",
    statusText: "text-emerald-400",
    statusBg: "bg-emerald-400/10",
    statusBorder: "border-emerald-400/30",
    dot: "bg-emerald-400",
  },
  {
    id: "#ORD-9480",
    customer: "Siddharth Rao",
    email: "siddharth@hyperion.in",
    hardware: 'VoltVision 49" OLED curved Display',
    qty: "Qty: 01 · 240Hz 0.03ms",
    Icon: Monitor,
    telemetryDate: "Oct 24, 2024",
    telemetryTime: "12:04:19 UTC",
    netValue: "$1,899.00",
    settlementIcon: Zap,
    settlementLabel: "UPI",
    settlementSub: "Instant / AutoPay",
    status: "Pending Review",
    statusText: "text-orange-300",
    statusBg: "bg-orange-500/20",
    statusBorder: "border-orange-400/40",
    dot: "bg-orange-400",
    rowHighlight: true,
  },
  {
    id: "#ORD-9479",
    customer: "Marcus Thorne",
    email: "m.thorne@apex-labs.com",
    hardware: "VoltHyper Carbon Mouse V3",
    qty: "Qty: 04 · 8000Hz Polling",
    Icon: Mouse,
    telemetryDate: "Oct 23, 2024",
    telemetryTime: "19:48:11 UTC",
    netValue: "$596.00",
    settlementIcon: CreditCard,
    settlementLabel: "Mastercard",
    settlementSub: "•••• 8821",
    status: "Delivered",
    statusText: "text-teal-300",
    statusBg: "bg-teal-400/10",
    statusBorder: "border-teal-400/30",
    dot: "bg-teal-400",
  },
  {
    id: "#ORD-9478",
    customer: "Aria Montgomery",
    email: "aria.m@nebula.net",
    hardware: "AeroWave Planar Headset",
    qty: "Qty: 01 · ANC Lossless DSP",
    Icon: Headphones,
    telemetryDate: "Oct 23, 2024",
    telemetryTime: "16:10:05 UTC",
    netValue: "$449.00",
    settlementIcon: CreditCard,
    settlementLabel: "Amex Fleet",
    settlementSub: "•••• 1009",
    status: "Cancelled",
    statusText: "text-red-400",
    statusBg: "bg-red-400/10",
    statusBorder: "border-red-400/30",
    dot: "bg-red-400",
  },
  {
    id: "#ORD-9477",
    customer: "Daisuke Sato",
    email: "sato@tokyo-robotics.jp",
    hardware: "VoltBlade Cluster Module 4X",
    qty: "Qty: 02 · Hot-Swappable 40Gbps",
    Icon: Server,
    telemetryDate: "Oct 23, 2024",
    telemetryTime: "11:21:38 UTC",
    netValue: "$3,120.00",
    settlementIcon: Building2,
    settlementLabel: "SWIFT",
    settlementSub: "Fedwire",
    status: "Shipped",
    statusText: "text-emerald-400",
    statusBg: "bg-emerald-400/10",
    statusBorder: "border-emerald-400/30",
    dot: "bg-emerald-400",
  },
];

export default function OrderDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 214;

  const goTo = (p) => setCurrentPage(Math.min(totalPages, Math.max(1, p)));

  return (
    <div className="w-full bg-[#091122] rounded-2xl border border-slate-800/90 shadow-xl shadow-black/50 p-3 sm:p-4 font-sans">
      {/* Page header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-slate-100 text-lg font-semibold tracking-tight">
            Order Management
          </h1>
          <p className="text-slate-500 text-xs mt-0.5 tracking-wide">
            Hardware fulfillment · relay node view
          </p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Relay Latency: 12ms
        </div>
      </div>

      {/* Table card */}
      <div className="rounded-xl border border-slate-800 overflow-hidden">
        {/* Column headers */}
        <div
          className="bg-[#0f1520] border-b border-slate-800 px-4 py-2.5 grid items-center"
          style={{
            gridTemplateColumns: "90px 1fr 1.7fr 140px 100px 140px 130px 70px",
          }}
        >
          {[
            "ORDER ID",
            "CUSTOMER NODE",
            "HARDWARE SPECIFICATION",
            "TELEMETRY STAMP",
            "NET VALUE",
            "SETTLEMENT",
            "FULFILLMENT STATE",
            "ACTION",
          ].map((h) => (
            <span
              key={h}
              className="text-[9px] tracking-widest font-bold text-slate-600 uppercase"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Rows */}
        {orders.map((o) => {
          const SI = o.settlementIcon;
          return (
            <div
              key={o.id}
              className={`grid items-center gap-x-4 px-4 py-3.5 border-b border-slate-800/60 hover:bg-slate-800/20 transition-colors ${o.rowHighlight ? "bg-orange-500/[0.04]" : "bg-[#131a24]"}`}
              style={{
                gridTemplateColumns:
                  "90px 1fr 1.7fr 140px 100px 140px 130px 70px",
              }}
            >
              {/* Order ID */}
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 text-[11px] text-slate-500">
                  ⬡
                </div>
                <span className="text-[11px] font-mono text-cyan-400 font-semibold truncate">
                  {o.id}
                </span>
              </div>

              {/* Customer */}
              <div className="min-w-0">
                <div className="text-slate-200 text-sm font-medium truncate">
                  {o.customer}
                </div>
                <div className="text-slate-500 text-xs truncate">{o.email}</div>
              </div>

              {/* Hardware */}
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <o.Icon size={15} className="text-slate-400" />
                </div>
                <div className="min-w-0">
                  <div className="text-slate-200 text-xs font-medium leading-snug truncate">
                    {o.hardware}
                  </div>
                  <div className="text-slate-500 text-xs">{o.qty}</div>
                </div>
              </div>

              {/* Telemetry */}
              <div className="font-mono text-xs leading-relaxed">
                <div className="text-slate-300">{o.telemetryDate}</div>
                <div className="text-slate-500">{o.telemetryTime}</div>
              </div>

              {/* Net value */}
              <div className="text-slate-100 text-sm font-semibold">
                {o.netValue}
              </div>

              {/* Settlement */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0">
                  <SI size={12} className="text-slate-400" />
                </div>
                <div className="leading-tight">
                  <div className="text-slate-200 text-xs font-medium">
                    {o.settlementLabel}
                  </div>
                  <div className="text-slate-500 text-xs">
                    {o.settlementSub}
                  </div>
                </div>
              </div>

              {/* Status badge */}
              <div>
                <span
                  className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md border text-[11px] font-medium whitespace-nowrap ${o.statusText} ${o.statusBg} ${o.statusBorder}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${o.dot}`}
                  />
                  {o.status}
                </span>
              </div>

              {/* Action */}
              <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-slate-700 bg-slate-800 hover:bg-slate-700 hover:border-slate-600 text-slate-300 text-xs font-medium transition-colors">
                <Eye size={11} />
                View
              </button>
            </div>
          );
        })}
      </div>

      {/* Footer / Pagination */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-slate-500">
          Showing <span className="text-slate-300 font-medium">1 to 6</span> of{" "}
          <span className="text-slate-300 font-medium">1,284</span> orders
          <span className="ml-4 inline-flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Relay Latency: 12ms
          </span>
        </span>

        <div className="flex items-center gap-1">
          <PagBtn
            onClick={() => goTo(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={13} />
          </PagBtn>

          {[1, 2, 3].map((p) => (
            <PagBtn key={p} active={currentPage === p} onClick={() => goTo(p)}>
              {p}
            </PagBtn>
          ))}

          <span className="text-slate-600 text-xs px-0.5">…</span>

          <PagBtn
            active={currentPage === totalPages}
            onClick={() => goTo(totalPages)}
          >
            {totalPages}
          </PagBtn>

          <PagBtn
            onClick={() => goTo(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={13} />
          </PagBtn>
        </div>
      </div>
    </div>
  );
}

function PagBtn({ children, active, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`min-w-[32px] h-8 px-2 flex items-center justify-center rounded-md border text-xs font-medium transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
        active
          ? "border-cyan-500 bg-cyan-500/20 text-cyan-300"
          : "border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-400"
      }`}
    >
      {children}
    </button>
  );
}
