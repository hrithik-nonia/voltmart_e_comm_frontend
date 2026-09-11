import { Zap, Flame } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function VoltmartHeroSection({ onViewDeals }) {
  const navigate = useNavigate();
  return (
    <section className="relative w-full bg-[#0B1323] text-white py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden">
      {/* Background Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-cyan-600/35 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-amber-600/35 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center z-10">
        {/* Left Column: Headline, Description & CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-900/60 bg-[#0D243A] px-3.5 py-1.5 text-[10px] sm:text-xs font-extrabold tracking-widest text-cyan-400 uppercase shadow-xs">
            <Zap className="h-3.5 w-3.5 fill-cyan-400/20 stroke-[2.5]" />
            <span>HYPER-SPEED HARDWARE DISPATCH</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Next-Gen Electronics, <br className="hidden sm:inline" />
            <span className="text-cyan-400">Delivered Fast</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
            Unleash apex computing power. Explore flagship neural laptops,
            studio spatial acoustics, and quantum-grade peripherals with
            verified same-day lightning dispatch.
          </p>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            {/* Shop Now Button */}
            <button
              type="button"
              onClick={() => navigate("/filter")}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-amber-700 active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/40 cursor-pointer"
            >
              <span>Shop Now</span>
              <Zap className="h-4 w-4 fill-white stroke-[2.5]" />
            </button>

            {/* View Deals Button */}
            <button
              type="button"
              onClick={onViewDeals}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-[#131C2E] px-6 py-3.5 text-sm font-bold text-slate-200 hover:border-slate-700 hover:text-white active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-slate-700/40"
            >
              <span>View Deals</span>
              <Flame className="h-4 w-4 text-amber-500 fill-amber-500/20 stroke-[2.2]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
