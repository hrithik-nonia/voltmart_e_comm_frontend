import {
  Zap,
  Flame,
  Star,
  Rocket,
  ShieldCheck,
  Radio,
  Cpu,
} from "lucide-react";

export default function VoltmartHeroSection({ onShopNow, onViewDeals }) {
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
              onClick={onShopNow}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 hover:from-orange-600 hover:to-amber-700 active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/40"
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

          {/* Micro Social Proof Bar */}
          <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-400">
            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-amber-400 fill-amber-400 stroke-[2]" />
              <span>
                <strong className="text-white font-bold">4.9/5 Rating</strong>{" "}
                (12.4k Reviews)
              </span>
            </div>

            <span className="hidden sm:inline text-slate-700">•</span>

            {/* Express Node */}
            <div className="flex items-center gap-1.5 text-cyan-400">
              <Rocket className="h-4 w-4 stroke-[2.2]" />
              <span>Express Node &lt; 2h ETA</span>
            </div>

            <span className="hidden sm:inline text-slate-700">•</span>

            {/* Warranty */}
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-slate-400 stroke-[2.2]" />
              <span>3-Year Zero-Downtime</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hardware Telemetry Card & Preview */}
        <div className="lg:col-span-5 flex justify-center  ">
          <div className="w-full max-w-md rounded-3xl border border-slate-800/90 bg-[#0F1829] p-5 shadow-2xl space-y-4  hover:shadow-2xl hover:scale-101 hover:shadow-gray-900 transition duration-400 ease-in-out">
            {/* Top Badges Row */}
            <div className="flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-900/50 bg-[#102438] px-3 py-1.5 text-xs font-bold text-cyan-400">
                <Cpu className="h-3.5 w-3.5 stroke-[2.5]" />
                <span>RTX 4090 · 64GB DDR5</span>
              </div>

              <div className="inline-flex items-center gap-1.5 rounded-lg border border-amber-900/50 bg-[#2A1D16] px-3 py-1.5 text-xs font-bold text-amber-500">
                <Radio className="h-3.5 w-3.5 stroke-[2.5]" />
                <span>LIVE TELEMETRY 99.4%</span>
              </div>
            </div>

            {/* Laptop Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950 shadow-inner group">
              <img
                src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800"
                alt="Titan Pro X17 Laptop"
                className="w-full h-56 sm:h-64 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Overlay Tag */}
              <div className="absolute bottom-3 left-3 rounded-md border border-slate-700/70 bg-slate-950/85 px-3 py-1.5 text-[10px] font-mono font-bold tracking-wider text-slate-200 backdrop-blur-xs shadow-md">
                TITAN PRO X17 · FLAGSHIP M3 MAX
              </div>
            </div>

            {/* Bottom 3 Spec Metrics */}
            <div className="grid grid-cols-3 gap-2 rounded-xl bg-[#09101C] p-3 text-center border border-slate-800/60">
              <div>
                <p className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase">
                  CLOCK
                </p>
                <p className="text-xs sm:text-sm font-black text-white mt-0.5">
                  5.8 GHz
                </p>
              </div>

              <div className="border-x border-slate-800/80">
                <p className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase">
                  THERMAL
                </p>
                <p className="text-xs sm:text-sm font-black text-cyan-400 mt-0.5">
                  48°C Active
                </p>
              </div>

              <div>
                <p className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase">
                  THROUGHPUT
                </p>
                <p className="text-xs sm:text-sm font-black text-amber-500 mt-0.5">
                  40 Gbps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
