// built in imports
import * as Icons from "lucide-react";

// component imports
import { HeadingComp } from "../commonComponents/SmallComponents";

export default function ShopByCategorySection({ categories, error, loading }) {
  if (error) {
    console.error(error);
    return (
      <>
        <div className="h-60 bg-[#131E33] flex justify-center items-center text-lg font-bold">
          <p>{error?.message}</p>
        </div>
      </>
    );
  }

  if (loading)
    return (
      <>
        <div className="h-60 bg-[#131E33] flex justify-center items-center text-lg font-bold">
          <p>Loading...</p>
        </div>
      </>
    );
  return (
    <section>
      <div className="space-y-8">
        {/* Header Bar */}
        <div className="flex items-end justify-between">
          <HeadingComp textColor="text-amber-500" text="Shop by Category" />
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {categories.map((cat, idx) => {
            const Icon = Icons[cat.icon] || Icons.Cpu;

            return (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#0F1829] p-5 shadow-sm hover:border-slate-700 hover:bg-[#131E33] hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                {/* Icon Badge */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border mb-4 shrink-0 transition-transform group-hover:scale-105 bg-blue-950/80 border-blue-800/60 text-blue-400">
                  <Icon className="h-5 w-5 stroke-[2.2]" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {cat.name}
                  </h3>

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
