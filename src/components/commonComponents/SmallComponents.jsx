import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Calendar, ChevronDown, Download, Plus } from "lucide-react";

export function HeadingComp({ text }) {
  return (
    <>
      <div>
        <div
          className={`flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest ${text ? text : "text-white"} uppercase mb-1`}
        >
          <span>NODE ARCHITECTURES</span>
          <span>•</span>
          <span className="text-white font-light">6 Hubs Active</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Shop by Category
        </h2>
      </div>
    </>
  );
}

export function AdminHeaderComp({
  heading,
  text,
  btnText,
  onExportTelemetry = () => {},

  onDateRangeChange = () => {},
}) {
  const location = useLocation();
  const [selectedRange, setSelectedRange] = useState("Last 30 Days");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dateRangeOptions = [
    "Real-time (Live)",
    "Today",
    "Last 7 Days",
    "Last 30 Days",
    "Last 90 Days",
  ];

  return (
    <header>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left Column: Title, SLA Badge & Subtitle */}
        <div className="space-y-2 text-left max-w-2xl">
          {/* Title Row with SLA Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {heading}
            </h1>
          </div>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
            {text}
          </p>
        </div>

        {/* Right Column: Date Filter, Export & Refresh Controls */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          {/* Date Range Dropdown */}

          <div className="relative">
            {(location.pathname === "/adminDashboard") |
            (location.pathname === "/adminOrderPage") ? (
              <>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111C33] hover:bg-slate-800/80 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-200 transition-colors cursor-pointer"
                >
                  <Calendar className="h-4 w-4 text-slate-400 shrink-0" />
                  <span>{selectedRange}</span>
                  <ChevronDown className="h-4 w-4 text-slate-400 shrink-0 ml-1" />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#0B1324] border border-slate-800 rounded-xl shadow-2xl z-20 py-1.5 text-left">
                    {dateRangeOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setSelectedRange(option);
                          setIsDropdownOpen(false);
                          onDateRangeChange(option);
                        }}
                        className={`w-full px-4 py-2 text-xs font-semibold text-left transition-colors ${
                          selectedRange === option
                            ? "bg-blue-600/20 text-cyan-400"
                            : "text-slate-300 hover:bg-slate-800/60"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                {location.pathname === "/adminCustomersPage" ? null : (
                  <button
                    type="button"
                    className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/25 transition-all active:scale-[0.99] cursor-pointer"
                  >
                    <Plus className="h-4 w-4 stroke-[3]" />
                    <span>{btnText}</span>
                  </button>
                )}
              </>
            )}
          </div>

          {/* Export Telemetry (CSV) */}
          <button
            type="button"
            onClick={onExportTelemetry}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#111C33] hover:bg-slate-800/80 border border-slate-800 text-xs sm:text-sm font-semibold text-slate-200 transition-colors cursor-pointer"
          >
            <Download className="h-4 w-4 text-slate-400 stroke-[2.2]" />
            <span>Export Telemetry (CSV)</span>
          </button>
        </div>
      </div>
    </header>
  );
}
