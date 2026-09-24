import { useState } from "react";

const modes = [
  {
    id: "active",
    title: "Active / Online",
    subtitle: "Full Requisition Throughput",
    color: "emerald",
  },
  {
    id: "maintenance",
    title: "Maintenance Mode",
    subtitle: "Storefront Throttled",
    color: "slate",
  },
  {
    id: "staging",
    title: "Staging Mesh",
    subtitle: "Internal QA Traffic Only",
    color: "slate",
  },
];

export default function StoreOperationalModePanel({
  defaultMode = "active",
  onModeChange = () => {},
}) {
  const [selectedMode, setSelectedMode] = useState(defaultMode);

  const handleSelect = (id) => {
    setSelectedMode(id);
    onModeChange(id);
  };

  return (
    <section className="bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 p-6 sm:p-8 text-left space-y-6">
      {/* Header */}
      <div className="space-y-1 pb-4 border-b border-slate-800/80">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Store Architecture & Currency
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-medium">
          Manage node emblem branding, global trade denominations, and runtime
          status.
        </p>
      </div>

      {/* Operational Mode Selection Grid */}
      <div className="space-y-3">
        <label className="block text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
          STORE OPERATIONAL MODE
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {modes.map((mode) => {
            const isSelected = selectedMode === mode.id;

            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => handleSelect(mode.id)}
                className={`p-4 rounded-2xl border text-left space-y-3 transition-all cursor-pointer ${
                  isSelected
                    ? "border-2 border-emerald-500 bg-[#061517] shadow-lg shadow-emerald-500/10"
                    : "bg-[#050A14] border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Radio Circle & Title */}
                <div className="flex items-start gap-3">
                  <div
                    className={`h-4.5 w-4.5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? "border-emerald-400 bg-emerald-950/60"
                        : "border-slate-700"
                    }`}
                  >
                    {isSelected && (
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    )}
                  </div>

                  <div>
                    <h3
                      className={`text-sm font-bold tracking-tight ${
                        isSelected ? "text-white" : "text-slate-300"
                      }`}
                    >
                      {mode.title}
                    </h3>

                    <p
                      className={`text-xs font-mono font-semibold mt-1 leading-snug ${
                        isSelected ? "text-emerald-400" : "text-slate-500"
                      }`}
                    >
                      {mode.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
