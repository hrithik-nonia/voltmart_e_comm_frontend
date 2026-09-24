import { useState } from "react";

const alertSettings = [
  {
    id: "orderAlerts",
    title: "Order Notifications",
    subtitle:
      "Real-time alerts for incoming hardware orders and fulfillment requisitions.",
    defaultChecked: true,
  },
  {
    id: "stockAlerts",
    title: "Low Stock Notifications",
    subtitle:
      "Trigger threshold alerts when SKU inventory dips below safe operational reserve.",
    defaultChecked: true,
  },
  {
    id: "customerAlerts",
    title: "Customer Notifications",
    subtitle:
      "Receive telemetry pings on new enterprise customer onboarding and VIP node requests.",
    defaultChecked: true,
  },
];

export default function TelemetryAlertsPanel({
  settings = alertSettings,
  onToggle = () => {},
}) {
  const [toggles, setToggles] = useState(
    settings.reduce((acc, curr) => {
      acc[curr.id] = curr.defaultChecked;
      return acc;
    }, {}),
  );

  const handleToggle = (id) => {
    setToggles((prev) => {
      const updated = { ...prev, [id]: !prev[id] };
      onToggle(updated);
      return updated;
    });
  };

  return (
    <section className="bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 p-6 sm:p-8 text-left space-y-6">
      {/* Header */}
      <div className="space-y-1 pb-4 border-b border-slate-800/80">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Event Notifications & Telemetry Alerts
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-medium">
          Toggle automated webhook dispatches, stock alerts, and operator
          broadcasts.
        </p>
      </div>

      {/* Toggles List */}
      <div className="divide-y divide-slate-800/70">
        {settings.map((item) => {
          const isChecked = toggles[item.id];

          return (
            <div
              key={item.id}
              className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4"
            >
              {/* Text Info */}
              <div className="space-y-1 max-w-xl">
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 font-medium leading-relaxed">
                  {item.subtitle}
                </p>
              </div>

              {/* Blue Toggle Switch */}
              <button
                type="button"
                onClick={() => handleToggle(item.id)}
                className={`relative w-12 h-6.5 rounded-full transition-colors duration-200 cursor-pointer shrink-0 ${
                  isChecked
                    ? "bg-[#1E65F3] shadow-md shadow-blue-500/25"
                    : "bg-slate-700"
                }`}
                aria-label={`Toggle ${item.title}`}
              >
                <span
                  className={`absolute top-1 left-1 h-4.5 w-4.5 rounded-full bg-white shadow-md transition-transform duration-200 ${
                    isChecked ? "translate-x-5.5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
