import { useState } from "react";
import {
  ShoppingBag,
  RotateCcw,
  AlertTriangle,
  CreditCard,
  ArrowRight,
} from "lucide-react";

const initialNotifications = [
  {
    id: "orders",
    title: "New Orders",
    subtitle: "2 orders pending routing",
    count: 2,
    icon: ShoppingBag,
    colorStyle: "bg-blue-950/70 border-blue-800/50 text-blue-400",
    badgeStyle: "bg-blue-950/90 border-blue-800/60 text-blue-300",
  },
  {
    id: "returns",
    title: "Return Requests",
    subtitle: "1 request awaiting review",
    count: 1,
    icon: RotateCcw,
    colorStyle: "bg-teal-950/70 border-teal-800/50 text-teal-400",
    badgeStyle: "bg-teal-950/90 border-teal-800/60 text-teal-300",
  },
  {
    id: "stock",
    title: "Low Stock Alerts",
    subtitle: "3 items critical threshold",
    count: 3,
    icon: AlertTriangle,
    colorStyle: "bg-amber-950/70 border-amber-800/50 text-amber-400",
    badgeStyle: "bg-amber-950/90 border-amber-800/60 text-amber-300",
  },
  {
    id: "payments",
    title: "Payment Issues",
    subtitle: "1 transaction failed verification",
    count: 1,
    icon: CreditCard,
    colorStyle: "bg-rose-950/70 border-rose-800/50 text-rose-400",
    badgeStyle: "bg-rose-950/90 border-rose-800/60 text-rose-300",
  },
];

export default function NotificationsDropdown({
  items = initialNotifications,
  onItemClick = () => {},
  onViewAll = () => {},
}) {
  const [notifications, setNotifications] = useState(items);

  const totalNew = notifications.reduce((acc, curr) => acc + curr.count, 0);

  const handleMarkAllRead = () => {
    setNotifications((prev) => prev.map((item) => ({ ...item, count: 0 })));
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md bg-[#091122] text-white rounded-2xl border border-slate-800/90 shadow-2xl shadow-black/80 font-sans overflow-hidden absolute md:right-2 z-40">
      {/* Top Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
            Notifications
          </h3>
          {totalNew > 0 && (
            <span className="rounded-full bg-blue-950/90 border border-blue-800/60 px-2.5 py-0.5 text-[11px] font-mono font-bold text-blue-400">
              {totalNew} New
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleMarkAllRead}
          className="text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          Mark all as read
        </button>
      </div>

      {/* Notifications List */}
      <div className="divide-y divide-slate-800/70 text-left">
        {notifications.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              onClick={() => onItemClick(item)}
              className="flex items-center justify-between px-5 py-3.5 hover:bg-slate-800/40 transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                {/* Category Icon Box */}
                <div
                  className={`h-11 w-11 rounded-xl border flex items-center justify-center shrink-0 ${item.colorStyle}`}
                >
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>

                {/* Notification Text */}
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors truncate">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium truncate mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* Counter Badge */}
              {item.count > 0 && (
                <div
                  className={`h-6 min-w-[24px] px-1.5 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 ${item.badgeStyle}`}
                >
                  {item.count}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer View All Link */}
      <button
        type="button"
        onClick={onViewAll}
        className="w-full py-3.5 bg-[#070D1A] hover:bg-slate-800/60 border-t border-slate-800/80 flex items-center justify-center gap-2 text-xs font-bold text-slate-300 hover:text-white transition-all cursor-pointer"
      >
        <span>View All Notifications</span>
        <ArrowRight className="h-4 w-4 stroke-[2.2]" />
      </button>
    </div>
  );
}
