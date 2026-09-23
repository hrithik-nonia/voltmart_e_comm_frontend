import * as Icons from "lucide-react";

const CategoryTable = ({ data, loading, error }) => {
  // handle loading
  if (loading)
    return (
      <>
        <div className="h-60 bg-gray-800 flex justify-center items-center text-lg font-semibold">
          Loading...
        </div>
      </>
    );

  // handle error
  if (error)
    return (
      <>
        <div className="h-60 bg-gray-800 flex justify-center items-center text-lg font-semibold">
          {error?.message}
        </div>
      </>
    );

  return (
    <div className="w-full overflow-hidden rounded-xl border border-slate-800/80 bg-[#080f20]">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px] border-collapse">
          {/* Header */}
          <thead>
            <tr className="h-[52px] border-b border-slate-800/80 bg-[#0d172b]">
              <th className="w-[43%] px-5 text-left text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Category
              </th>

              <th className="w-[21%] px-4 text-left text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Allocated SKUs
              </th>

              <th className="w-[22%] px-4 text-left text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Operational
                <br />
                Status
              </th>

              <th className="w-[14%] px-4 text-left text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                Actions
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {data.map((cat) => {
              const Icon = Icons[cat.icon] || Icons.CircleHelp;

              return (
                <tr
                  key={cat.id}
                  className="
                    h-[65px]
                    border-b border-slate-800/70
                    transition-colors
                    hover:bg-[#0c162a]
                  "
                >
                  {/* Category */}
                  <td className="px-5">
                    <div className="flex items-center gap-3">
                      {/* Icon box */}
                      <div
                        className="
                          flex h-[34px] w-[34px]
                          shrink-0 items-center justify-center
                          rounded-lg
                          border border-slate-700/80
                          bg-[#101d34]
                        "
                      >
                        <Icon
                          size={15}
                          strokeWidth={1.6}
                          className="text-cyan-400"
                        />
                      </div>

                      {/* Name + metadata */}
                      <div className="min-w-0">
                        <div className="text-[11px] font-bold text-slate-100">
                          {cat.name}
                        </div>

                        <div className="mt-[2px] truncate font-mono text-[9px] text-slate-500">
                          <span className="mx-2 text-slate-700">•</span>
                          {cat.description}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Units */}
                  <td className="px-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-[12px] font-bold text-slate-100">
                        {cat.totalProducts}
                      </span>

                      <span className="text-[10px] text-slate-400">Units</span>
                    </div>

                    {cat.isActive && (
                      <span className="font-mono text-[9px] text-slate-500">
                        (Dormant)
                      </span>
                    )}
                  </td>

                  {/* Status */}
                  <td className="px-4">
                    <span
                      className={`
                        inline-flex items-center gap-1.5
                        rounded-full
                        border
                        px-2.5 py-1
                        text-[9px]
                        font-semibold
                        ${
                          cat.status === "Active"
                            ? "border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                            : "border-slate-700 bg-slate-800/70 text-slate-500"
                        }
                      `}
                    >
                      <span
                        className={`
                          h-1.5 w-1.5 rounded-full
                          ${
                            cat.status === "Active"
                              ? "bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.7)]"
                              : "bg-slate-500"
                          }
                        `}
                      />

                      {cat.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4">
                    <div className="flex items-center gap-10">
                      <button
                        type="button"
                        className="
                          text-slate-400
                          transition-colors
                          hover:text-cyan-400
                        "
                        title="Edit"
                      >
                        <Icons.Pencil size={14} strokeWidth={1.7} />
                      </button>

                      <button
                        type="button"
                        className="
                          text-slate-500
                          transition-colors
                          hover:text-red-400
                        "
                        title="Delete"
                      >
                        <Icons.Trash2 size={14} strokeWidth={1.7} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div
        className="
          flex h-[31px]
          items-center justify-between
          border-t border-slate-800/80
          bg-[#0a1426]
          px-5
        "
      >
        <div className="font-mono text-[9px] text-slate-400">
          Displaying{" "}
          <span className="text-slate-300">{data.length} Categories</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
