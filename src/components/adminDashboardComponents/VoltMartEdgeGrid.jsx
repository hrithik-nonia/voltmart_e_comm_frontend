import { Server } from "lucide-react";

const mockNodes = [
  {
    id: "BLR-Edge-01",
    name: "Node BLR-Edge-01",
    load: "31%",
    status: "Healthy",
  },
  {
    id: "BOM-Edge-04",
    name: "Node BOM-Edge-04",
    load: "48%",
    status: "Healthy",
  },
];

export default function VoltMartEdgeGrid({
  sla = "99.98% SLA",
  latency = "14.2 ms",
  paymentGateway = "100% OK",
  nodes = mockNodes,
}) {
  return (
    <div className="bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 p-5 sm:p-6 space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 text-left">
        <div className="flex items-center gap-3">
          {/* Server Icon Box */}
          <div className="h-10 w-10 rounded-xl bg-cyan-950/70 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0">
            <Server className="h-5 w-5 stroke-[2]" />
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
            VoltMart Edge Grid
          </h3>
        </div>

        {/* SLA Status Indicator */}
        <span className="font-mono text-xs sm:text-sm font-bold text-cyan-400 tracking-wider">
          {sla}
        </span>
      </div>

      {/* Metric Cards Grid (2 Columns) */}
      <div className="grid grid-cols-2 gap-3 text-left">
        {/* Card 1: API Latency */}
        <div className="bg-[#050A14] rounded-2xl border border-slate-800/80 p-4 space-y-1">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
            API LATENCY
          </span>
          <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {latency}
          </div>
          <p className="text-xs font-mono text-cyan-400 font-medium">
            Global p99 nominal
          </p>
        </div>

        {/* Card 2: Payment Gateway */}
        <div className="bg-[#050A14] rounded-2xl border border-slate-800/80 p-4 space-y-1">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase leading-snug">
            PAYMENT GATEWAY
          </span>
          <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            {paymentGateway}
          </div>
          <p className="text-xs font-mono text-cyan-400 font-medium">
            UPI / Cards Synced
          </p>
        </div>
      </div>

      {/* Node Status Bar List */}
      <div className="space-y-2.5 text-left">
        {nodes.map((node) => (
          <div
            key={node.id}
            className="bg-[#050A14] rounded-2xl border border-slate-800/80 px-4 py-3 flex items-center justify-between text-xs sm:text-sm font-mono hover:border-slate-700 transition-colors"
          >
            {/* Glowing Dot & Node Name */}
            <div className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              <span className="font-bold text-slate-200">{node.name}</span>
            </div>

            {/* Node Load & Health */}
            <div className="flex items-center gap-2">
              <span className="text-slate-400">
                Load:{" "}
                <strong className="text-white font-bold">{node.load}</strong>
              </span>
              <span className="text-cyan-400 font-bold">{node.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
