// component imports
import { Perks } from "../../constants/constant";

export default function TrustPerksBanner({ items = Perks }) {
  return (
    <section>
      <div className="rounded-3xl border border-slate-800/90 bg-[#0F1829] p-6 sm:p-8 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 group cursor-pointer"
              >
                {/* Icon Badge */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl border shrink-0 transition-transform group-hover:scale-105 ${perk.badgeStyle}`}
                >
                  <Icon className="h-5 w-5 stroke-[2.2]" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-normal mt-0.5 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
