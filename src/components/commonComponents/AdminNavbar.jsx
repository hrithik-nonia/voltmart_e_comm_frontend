import { useState } from "react";
import { Search, Bell } from "lucide-react";

// custom imports
import UserProfileDropdown from "./UserProfileDropdown";
import ErrorBoundary from "./ErrorBoundary";
import NotificationsDropdown from "./NotificationsDropdown";

export default function DashboardTopBar({
  onSearch,
  hasNotification = true,
  userAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
}) {
  const [query, setQuery] = useState("");
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <>
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
            onClick={() => {
              setShowNotificationDropdown((prev) => !prev);
              setIsDropDownOpen(false);
            }}
            className="relative p-2 text-slate-300 hover:text-white transition-colors rounded-lg hover:bg-slate-800/60 focus:outline-none"
            aria-label="Notifications"
          >
            <Bell className="h-5 w-5 stroke-[2]" />
            {hasNotification && (
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-amber-500 ring-2 ring-[#09101F]" />
            )}
          </button>

          {/* User Profile Avatar */}
          <button
            type="button"
            className="focus:outline-none focus:ring-2 focus:ring-slate-700 rounded-full"
            onClick={() => {
              setIsDropDownOpen((prev) => !prev);
              setShowNotificationDropdown(false);
            }}
          >
            <img
              src={userAvatar}
              alt="User profile"
              className="h-9 w-9 rounded-full object-cover border border-slate-700 hover:border-slate-500 transition-colors"
            />
          </button>
        </div>
      </div>

      {isDropDownOpen && (
        <ErrorBoundary fallback={<div>Profile Dropdown Component Fatta!</div>}>
          <UserProfileDropdown />
        </ErrorBoundary>
      )}

      {showNotificationDropdown && (
        <ErrorBoundary
          fallback={<div>Notification Dropdown Component Fatta!</div>}
        >
          <NotificationsDropdown />
        </ErrorBoundary>
      )}
    </>
  );
}
