export default function MissionControlKPICards({ cards, loading, error }) {
  if (loading)
    return (
      <>
        <div className="flex justify-center items-center border-r-gray-700 text-lg font-semibold">
          Loading...
        </div>
      </>
    );

  if (error)
    return (
      <>
        <div className="flex justify-center items-center border-r-gray-700 text-lg font-semibold">
          {error?.message}
        </div>
      </>
    );
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, i) => {
          const Icon = card.icon;

          return (
            <div
              key={i}
              className="bg-[#091122] rounded-2xl border border-slate-800/90 p-5 space-y-4 shadow-xl shadow-black/40 hover:border-slate-700/90 hover:-translate-y-0.5 transition-all duration-200 text-left"
            >
              {/* Header: Title & Icon */}
              <div className="flex items-start justify-between gap-2">
                <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase leading-snug">
                  {card.label}
                </span>

                <div
                  className={`h-11 w-11 rounded-xl border flex items-center justify-center shrink-0 ${card.iconStyle}`}
                >
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>
              </div>
              {/* Main Metric Value */}
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white tracking-tight">
                  {card.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
