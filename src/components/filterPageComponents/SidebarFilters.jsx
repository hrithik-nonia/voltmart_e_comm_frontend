import { useState } from "react";
import { SlidersHorizontal, ChevronDown, ChevronUp } from "lucide-react";
import { useFetchAppDataContext } from "../../context/FetchAppDataContext";

export default function SidebarFilters({ categories, error, loading }) {
  const [categoriesOpen, setCategoriesOpen] = useState(true);
  const { selectCategory, categoryId } = useFetchAppDataContext();

  // =====================
  if (error) {
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
  // =====================

  return (
    <aside className="bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 text-left overflow-hidden">
      {/* Header: Filters Title & Clear All */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <SlidersHorizontal className="h-4.5 w-4.5 text-white stroke-[2.2]" />
          <h3 className="text-base font-extrabold text-white tracking-tight">
            Filters
          </h3>
        </div>
      </div>

      <div className="p-5 space-y-6">
        {/* Categories Section */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={() => setCategoriesOpen(!categoriesOpen)}
            className="w-full flex items-center justify-between cursor-pointer"
          >
            <h4 className="text-sm font-bold text-white tracking-tight">
              Categories
            </h4>
            {categoriesOpen ? (
              <ChevronUp className="h-4 w-4 text-slate-400" />
            ) : (
              <ChevronDown className="h-4 w-4 text-slate-400" />
            )}
          </button>

          {categoriesOpen && (
            <div className="space-y-2.5">
              {categories.map((cat) => (
                <label
                  key={cat.id}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      checked={categoryId === cat.id}
                      onChange={() => {
                        if (categoryId === cat.id) {
                          selectCategory(null);
                        } else {
                          selectCategory(cat.id);
                        }
                      }}
                      onClick={() => selectCategory(cat.id)}
                      className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 accent-blue-600 cursor-pointer"
                    />
                    <span
                      className={`text-sm font-medium transition-colors ${
                        cat.checked
                          ? "text-blue-400 font-semibold"
                          : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {cat.name}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
