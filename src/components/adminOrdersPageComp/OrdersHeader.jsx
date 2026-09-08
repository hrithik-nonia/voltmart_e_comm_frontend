import { useState } from "react";
import { Calendar, ChevronDown, Download, RotateCcw } from "lucide-react";

export default function OrdersHeader({
  onExportTelemetry = () => {},
  onRefresh = () => {},
  onDateRangeChange = () => {},
  systemStatus = "Orders System Online • 99.98% SLA",
}) {
  const [selectedRange, setSelectedRange] = useState("Last 30 Days");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const dateRangeOptions = [
    "Real-time (Live)",
    "Today",
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
        {/* Left Column: Title, SLA Badge & Subtitle */}
        <div className="space-y-2 text-left max-w-2xl">
          {/* Title Row with SLA Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Orders
            </h1>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 font-mono text-xs font-bold tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {systemStatus}
            </span>
          </div>

          {/* Subtitle Description */}
          <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
            Monitor and manage customer orders, routing telemetry, and regional
            fulfillment velocity across global distribution clusters.
          </p>
        </div>

        {/* Right Column: Date Filter, Export & Refresh Controls */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          {/* Date Range Dropdown */}
          <div className="relative">
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

          {/* Refresh Blue Square Button */}
          <button
            type="button"
            onClick={handleRefreshClick}
            className="p-3 rounded-xl bg-[#1E65F3] hover:bg-blue-600 text-white shadow-md shadow-blue-500/25 transition-all active:scale-[0.99] cursor-pointer flex items-center justify-center"
            aria-label="Refresh orders telemetry"
          >
            <RotateCcw
              className={`h-4.5 w-4.5 stroke-[2.5] ${
                isRefreshing ? "animate-spin" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </header>
  );
}
