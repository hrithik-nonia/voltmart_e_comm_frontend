// built in imports
import { Zap } from "lucide-react";

// component imports
import { MenuItems } from "../../constants/constant";
import { NavLink } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="w-64 min-h-screen bg-[#0B101D] text-white border-r border-slate-800/80 p-4 flex flex-col justify-between shrink-0 select-none">
      <div className="space-y-6">
        {/* Header: Logo & Version */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 px-2 pt-2">
          <div className="flex items-center gap-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-500/50">
              <Zap className="h-4 w-4 fill-white stroke-[2.5]" />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight text-white leading-tight">
                VoltMart
              </h1>
              <p className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase leading-tight mt-0.5">
                ADMIN PANEL
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Items List */}
        <nav className="space-y-1.5">
          {MenuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  `w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`
                }
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-4.5 w-4.5 stroke-[2.2]" />
                  <span>{item.label}</span>
                </div>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
