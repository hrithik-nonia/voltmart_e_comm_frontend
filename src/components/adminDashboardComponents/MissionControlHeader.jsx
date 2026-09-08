import { useState } from "react";
import { RotateCcw, Calendar, ChevronDown, Download } from "lucide-react";

export default function MissionControlHeader({
  onExport = () => {},
  onRefresh = () => {},
  onDateRangeChange = () => {},
}) {
  const [selectedRange, setSelectedRange] = useState("Last 30 Days");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const dateOptions = [
    "Real-time (Live)",
    "Last 24 Hours",
    "Last 7 Days",
    "Last 30 Days",
    "Last 90 Days",
  ];

  const handleRefreshClick = () => {
    setIsRefreshing(true);
    onRefresh();
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <header>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Left Column: Badges, Title & Subtitle */}
        <div className="space-y-2 text-left max-w-2xl">
          {/* Badge & Telemetry Label */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 font-mono text-[10px] sm:text-[11px] font-bold tracking-widest uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              REALTIME ENGINE
            </span>
            <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase">
              TELEMETRY COMMAND & OPERATIONS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Mission Control & Velocity
          </h1>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
            Real-time sales velocity, hardware fulfillment pipelines, and
            quantum telemetry node acquisition metrics.
          </p>
        </div>

        {/* Right Column: Action Buttons & Controls */}
        <div className="flex flex-col gap-3 shrink-0">
          {/* Top Control Row (Live Stream & Date Selector) */}
          <div className="flex items-center gap-2.5">
            {/* Date Range Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#111C33] hover:bg-slate-800/80 border border-slate-800/90 text-xs sm:text-sm font-medium text-slate-200 transition-colors cursor-pointer"
              >
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                <span>{selectedRange}</span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400 ml-1" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-[#0B1324] border border-slate-800 rounded-xl shadow-xl z-20 py-1 text-left">
                  {dateOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setSelectedRange(opt);
                        setDropdownOpen(false);
                        onDateRangeChange(opt);
                      }}
                      className={`w-full px-3.5 py-2 text-xs font-semibold text-left transition-colors ${
                        selectedRange === opt
                          ? "bg-blue-600/20 text-cyan-400"
                          : "text-slate-300 hover:bg-slate-800/60"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Control Row (Export & Manual Refresh) */}
          <div className="flex items-center gap-2.5">
            {/* Export CSV/JSON */}
            <button
              type="button"
              onClick={onExport}
              className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-[#111C33] hover:bg-slate-800/80 border border-slate-800/90 text-xs sm:text-sm font-medium text-slate-200 transition-colors cursor-pointer"
            >
              <Download className="h-3.5 w-3.5 text-slate-400" />
              <span>Export (CSV/JSON)</span>
            </button>

            {/* Quick Refresh Icon Button */}
            <button
              type="button"
              onClick={handleRefreshClick}
              className="p-2.5 rounded-xl bg-[#111C33] hover:bg-slate-800/80 border border-slate-800/90 text-slate-200 transition-colors cursor-pointer"
              aria-label="Refresh telemetry data"
            >
              <RotateCcw
                className={`h-4 w-4 text-slate-300 ${
                  isRefreshing ? "animate-spin" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
