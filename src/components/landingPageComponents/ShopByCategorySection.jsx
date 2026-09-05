// built in imports

// component imports
import { Categories } from "../../constants/constant";
import { HeadingComp } from "../commonComponents/SmallComponents";

export default function ShopByCategorySection({ onCategoryClick }) {
  return (
    <section>
      <div className="space-y-8">
        {/* Header Bar */}
        <div className="flex items-end justify-between">
          <HeadingComp text="text-amber-500" />

          <p className="text-xs text-slate-400 font-medium hidden sm:block">
            Select high-performance node architecture
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {Categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                onClick={() => onCategoryClick && onCategoryClick(cat)}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#0F1829] p-5 shadow-sm hover:border-slate-700 hover:bg-[#131E33] hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                {/* Icon Badge */}
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border mb-4 shrink-0 transition-transform group-hover:scale-105 ${cat.badgeStyle}`}
                >
                  <Icon className="h-5 w-5 stroke-[2.2]" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-bold text-cyan-400 mt-0.5">
                    {cat.items}
                  </p>
                  <p className="text-xs text-slate-400 font-normal mt-1">
                    {cat.description}
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
