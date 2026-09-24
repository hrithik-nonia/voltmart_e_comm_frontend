import { useState } from "react";
import {
  SlidersHorizontal,
  ShoppingBag,
  Bell,
  ShieldCheck,
} from "lucide-react";

const sections = [
  { id: "general", label: "General", icon: SlidersHorizontal },
  { id: "store", label: "Store", icon: ShoppingBag },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: ShieldCheck },
];

export default function ConfigurationSectionsSidebar({
  items = sections,
  defaultSelected = "general",
  onSelectSection = () => {},
}) {
  const [selectedId, setSelectedId] = useState(defaultSelected);

  const handleSelect = (id) => {
    setSelectedId(id);
    onSelectSection(id);
  };

  return (
    <aside className="bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 p-4 sm:p-5 text-left space-y-3">
      {/* Header Label */}
      <div className="px-2 pt-1">
        <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
          CONFIGURATION SECTIONS
        </span>
      </div>

      {/* Navigation List */}
      <nav className="space-y-1.5">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = selectedId === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleSelect(item.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#1E65F3] text-white shadow-lg shadow-blue-500/25 font-bold"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50 font-semibold"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <Icon
                  className={`h-5 w-5 stroke-[2] ${
                    isActive ? "text-white" : "text-slate-400"
                  }`}
                />
                <span className="text-sm tracking-tight">{item.label}</span>
              </div>

              {/* Active Indicator White Dot */}
              {isActive && (
                <span className="h-2 w-2 rounded-full bg-white shrink-0" />
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
