import { Banknote, Truck, Cpu, Share2 } from "lucide-react";

const kpiData = [
  {
    id: "revenue",
    label: "GROSS REVENUE",
    value: "₹4,82,000",
    icon: Banknote,
    iconStyle: "bg-[#0E1A30] border-cyan-800/50 text-cyan-400",
  },
  {
    id: "fulfillment",
    label: "TOTAL FULFILLMENT",
    value: "1,284",
    icon: Truck,
    iconStyle: "bg-[#0E1A30] border-blue-800/50 text-blue-400",
  },
  {
    id: "hardware",
    label: "HARDWARE MATRIX SKUS",
    value: "342",
    icon: Cpu,
    iconStyle: "bg-[#1E1416] border-amber-900/50 text-amber-500",
  },
  {
    id: "clients",
    label: "QUANTUM CLIENTS",
    value: "5,621",
    icon: Share2,
    iconStyle: "bg-[#0E1A30] border-cyan-800/50 text-cyan-400",
  },
];

export default function MissionControlKPICards({ cards = kpiData }) {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.id}
              className="bg-[#091122] rounded-2xl border border-slate-800/90 p-5 space-y-4 shadow-xl shadow-black/40 hover:border-slate-700/90 hover:-translate-y-0.5 transition-all duration-200 text-left"
            >
              {/* Header: Title & Icon */}
              <div className="flex items-start justify-between gap-2">
                <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase leading-snug">
                  {card.label}
                </span>

                <div
                  className={`h-11 w-11 rounded-xl border flex items-center justify-center shrink-0 ${card.iconStyle}`}
                >
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>
              </div>
              {/* Main Metric Value */}
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white tracking-tight">
                  {card.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
