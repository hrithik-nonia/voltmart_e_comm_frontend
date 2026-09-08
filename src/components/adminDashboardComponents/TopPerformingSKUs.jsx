const skusData = [
  {
    id: 1,
    title: "Titan Pro X17 AI Neural Deck",
    revenue: "₹3.55 Cr",
    specs: "Core i9 • RTX 4090 • 240Hz",
    soldCount: "142 Sold",
    velocity: "Vel: +19%/wk",
    progress: 85,
    progressGradient: "from-blue-600 via-cyan-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300",
  },
  {
    id: 2,
    title: "CyberDeck K-800 Optical Deck",
    revenue: "₹64.18 L",
    specs: "Hall-Effect • 8000Hz Polling",
    soldCount: "389 Sold",
    velocity: "Vel: +34%/wk",
    progress: 60,
    progressGradient: "from-blue-600 to-cyan-400",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300",
  },
  {
    id: 3,
    title: "Aura ANC Spatial Headset",
    revenue: "₹54.99 L",
    specs: "50mm Planar • 2.4GHz RF",
    soldCount: "275 Sold",
    velocity: "Vel: +11%/wk",
    progress: 40,
    progressGradient: "from-blue-600 to-blue-400",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
  },
];

export default function TopPerformingSKUs({ items = skusData }) {
  return (
    <div className=" bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 p-5 sm:p-6 space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 text-left">
        <div>
          <h3 className="text-xl font-extrabold text-white tracking-tight">
            Top Performing SKUs
          </h3>
          <p className="text-xs text-slate-400 font-medium mt-0.5">
            Real-time sales velocity & intake
          </p>
        </div>

        {/* Q3 Leaders Badge */}
        <span className="shrink-0 rounded-full bg-amber-950/90 border border-amber-800/60 px-3 py-1 text-[11px] font-mono font-bold text-amber-400 uppercase">
          Q3 Leaders
        </span>
      </div>

      {/* SKU Cards List */}
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#050A14] rounded-2xl border border-slate-800/80 p-4 space-y-3 text-left hover:border-slate-700 transition-colors"
          >
            {/* Top Info Row */}
            <div className="flex items-center gap-3.5 min-w-0">
              {/* Product Thumbnail */}
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 rounded-xl object-cover border border-slate-800 shrink-0"
              />

              {/* Product Details */}
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h4 className="text-sm font-bold text-white truncate tracking-tight">
                    {item.title}
                  </h4>
                  <span className="text-sm font-extrabold text-cyan-400 shrink-0 font-mono">
                    {item.revenue}
                  </span>
                </div>

                <p className="text-xs text-slate-400 font-medium truncate mt-0.5">
                  {item.specs}
                </p>

                {/* Sold & Velocity Stats */}
                <div className="flex items-center gap-2.5 mt-2">
                  <span className="rounded-md bg-blue-950/90 border border-blue-800/60 px-2 py-0.5 text-[11px] font-bold text-blue-300">
                    {item.soldCount}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {item.velocity}
                  </span>
                </div>
              </div>
            </div>

            {/* Gradient Progress Bar */}
            <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${item.progressGradient} transition-all duration-500`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
