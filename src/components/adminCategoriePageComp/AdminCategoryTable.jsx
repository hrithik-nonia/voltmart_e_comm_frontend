import {
  Cpu,
  Smartphone,
  Monitor,
  Headphones,
  Terminal,
  Zap,
  Bot,
  Pencil,
  Trash2,
} from "lucide-react";

const categories = [
  {
    name: "Neural Compute",
    code: "TAX-NC-098",
    description: "Tensor Accelerators & NPUs",
    units: 412,
    status: "Active",
    date: "Oct 24, 2024 · 14:10",
    icon: Cpu,
  },
  {
    name: "Peripherals",
    code: "TAX-PR-332",
    description: "Split Hall Deck & Keyboards",
    units: 238,
    status: "Active",
    date: "Oct 24, 2024 · 13:45",
    icon: Smartphone,
  },
  {
    name: "Displays",
    code: "TAX-DP-412",
    description: "Curved QD-OLED & Telemetry Panels",
    units: 186,
    status: "Active",
    date: "Oct 24, 2024 · 11:20",
    icon: Monitor,
  },
  {
    name: "Acoustics",
    code: "TAX-AC-104",
    description: "Planar Magnetic Headsets",
    units: 124,
    status: "Active",
    date: "Oct 23, 2024 · 21:05",
    icon: Headphones,
  },
  {
    name: "Terminals",
    code: "TAX-TM-650",
    description: "Satellite Comms & Mobile Decks",
    units: 94,
    status: "Active",
    date: "Oct 23, 2024 · 18:30",
    icon: Terminal,
  },
  {
    name: "Power & Thermal",
    code: "TAX-PT-880",
    description: "Cryo-Loop Coolers & PSUs",
    units: 0,
    status: "Inactive",
    date: "Oct 18, 2024 · 09:12",
    icon: Zap,
    dormant: true,
  },
  {
    name: "Robotics & Automation",
    code: "TAX-RB-901",
    description: "High-precision Actuators",
    units: 374,
    status: "Active",
    date: "Oct 15, 2024 · 08:00",
    icon: Bot,
  },
];

const CategoryTable = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-800/80 bg-[#080f20]">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] border-collapse">
          {/* Header */}
          <thead>
            <tr className="h-[52px] border-b border-slate-800/80 bg-[#0d172b]">
              <th className="w-[38%] px-5 text-left text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Category
              </th>

              <th className="w-[16%] px-4 text-left text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Allocated SKUs
              </th>

              <th className="w-[17%] px-4 text-left text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Operational
                <br />
                Status
              </th>

              <th className="w-[20%] px-4 text-left text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Last Telemetry Stamp
              </th>

              <th className="w-[9%] px-4 text-left text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Actions
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <tr
                  key={category.code}
                  className="
                    h-[65px]
                    border-b border-slate-800/70
                    transition-colors
                    hover:bg-[#0c162a]
                  "
                >
                  {/* Category */}
                  <td className="px-5">
                    <div className="flex items-center gap-3">
                      {/* Icon box */}
                      <div
                        className="
                          flex h-[34px] w-[34px]
                          shrink-0 items-center justify-center
                          rounded-lg
                          border border-slate-700/80
                          bg-[#101d34]
                        "
                      >
                        <Icon
                          size={15}
                          strokeWidth={1.6}
                          className="text-cyan-400"
                        />
                      </div>

                      {/* Name + metadata */}
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold text-slate-100">
                          {category.name}
                        </div>

                        <div className="mt-[2px] truncate font-mono text-[9px] text-slate-500">
                          {category.code}
                          <span className="mx-2 text-slate-700">•</span>
                          {category.description}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Units */}
                  <td className="px-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[12px] font-bold text-slate-100">
                        {category.units}
                      </span>

                      <span className="text-[10px] text-slate-400">Units</span>
                    </div>

                    {category.dormant && (
                      <span className="font-mono text-[9px] text-slate-500">
                        (Dormant)
                      </span>
                    )}
                  </td>

                  {/* Status */}
                  <td className="px-4">
                    <span
                      className={`
                        inline-flex items-center gap-1.5
                        rounded-full
                        border
                        px-2.5 py-1
                        text-[9px]
                        font-semibold
                        ${
                          category.status === "Active"
                            ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                            : "border-slate-700 bg-slate-800/70 text-slate-500"
                        }
                      `}
                    >
                      <span
                        className={`
                          h-1.5 w-1.5 rounded-full
                          ${
                            category.status === "Active"
                              ? "bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.7)]"
                              : "bg-slate-500"
                          }
                        `}
                      />

                      {category.status}
                    </span>
                  </td>

                  {/* Telemetry */}
                  <td className="px-4">
                    <div className="font-mono text-[9px] leading-[15px] text-slate-400">
                      {category.date}
                    </div>

                    <div className="font-mono text-[9px] text-slate-400">
                      UTC
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-4">
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        className="
                          text-slate-400
                          transition-colors
                          hover:text-cyan-400
                        "
                        title="Edit"
                      >
                        <Pencil size={14} strokeWidth={1.7} />
                      </button>

                      <button
                        type="button"
                        className="
                          text-slate-500
                          transition-colors
                          hover:text-red-400
                        "
                        title="Delete"
                      >
                        <Trash2 size={14} strokeWidth={1.7} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div
        className="
          flex h-[31px]
          items-center justify-between
          border-t border-slate-800/80
          bg-[#0a1426]
          px-5
        "
      >
        <div className="font-mono text-[9px] text-slate-400">
          Displaying <span className="text-slate-300">7 Categories</span> • Mesh
          Shards: <span className="text-slate-300">US-East / EU-West</span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[9px] text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.7)]" />

          <span>Sync Latency: 12ms</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
