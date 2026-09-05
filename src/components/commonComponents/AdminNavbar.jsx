import { useState } from "react";
import { Search, Bell, Plus } from "lucide-react";

export default function DashboardTopBar({
  onNewAction,
  onSearch,
  hasNotification = true,
  userAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
}) {
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <div className="w-full bg-[#09101F] text-white border-b border-slate-800/80 px-4 sm:px-6 py-3 flex items-center justify-between gap-3 sm:gap-4">
      {/* Left: Command Search Bar */}
      <form
        onSubmit={handleSearchSubmit}
        className="flex-1 flex items-center justify-between rounded-xl border border-slate-800 bg-[#0E1729] px-3.5 py-2 text-xs sm:text-sm text-slate-400 focus-within:border-slate-700 focus-within:ring-2 focus-within:ring-slate-700/40 transition-all max-w-md sm:max-w-lg"
      >
        <div className="flex items-center gap-2.5 w-full">
          <Search className="h-4 w-4 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search telemetry, orders, SKUs..."
            className="w-full bg-transparent text-slate-200 placeholder:text-slate-500 font-medium outline-none text-xs sm:text-sm"
          />
        </div>

        {/* Keyboard Shortcut Badge */}
        <kbd className="hidden sm:inline-flex items-center rounded-md border border-slate-700/60 bg-slate-800/80 px-1.5 py-0.5 text-[10px] font-mono font-bold text-slate-300 shrink-0">
          ⌘K
        </kbd>
      </form>

      {/* Right Action Controls Stack */}
      <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
        {/* Cluster Health Status Badge */}
        <div className="hidden lg:flex items-center gap-2 rounded-full border border-cyan-900/60 bg-[#0D243A] px-3.5 py-1.5">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-bold text-cyan-400 whitespace-nowrap">
            Cluster Health: 99.98% OK
          </span>
        </div>

        {/* Notification Bell Button */}
        <button
          type="button"
          className="relative p-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/60 focus:outline-none"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5 stroke-[2]" />
          {hasNotification && (
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-amber-500 ring-2 ring-[#09101F]" />
          )}
        </button>

        {/* Primary "+ New Requisition / SKU" Button */}
        <button
          type="button"
          onClick={onNewAction}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 shadow-md shadow-orange-500/20 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/40 cursor-pointer whitespace-nowrap"
        >
          <Plus className="h-4 w-4 stroke-[2.5]" />
          <span>New Requisition / SKU</span>
        </button>

        {/* User Profile Avatar */}
        <button
          type="button"
          className="focus:outline-none focus:ring-2 focus:ring-slate-700 rounded-full"
        >
          <img
            src={userAvatar}
            alt="User profile"
            className="h-9 w-9 rounded-full object-cover border border-slate-700 hover:border-slate-500 transition-colors"
          />
        </button>
      </div>
    </div>
  );
}
