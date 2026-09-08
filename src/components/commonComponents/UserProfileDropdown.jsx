import {
  User,
  Settings,
  Shield,
  LogOut,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function UserProfileDropdown({
  user = {
    name: "Alex Chen",
    email: "alex@voltmart.com",
    role: "ADMIN",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
    is2FA: true,
  },
  onProfileClick = () => {},
  onSettingsClick = () => {},
  onSecurityClick = () => {},
  onLogout = () => {},
}) {
  return (
    <div className="w-full max-w-xs sm:max-w-sm bg-[#091122] text-white rounded-2xl border border-slate-800/90 shadow-2xl shadow-black/80 p-4 space-y-3 font-sans absolute md:right-2">
      {/* User Info Header */}
      <div className="flex items-center justify-between gap-3 p-1">
        <div className="flex items-center gap-3 min-w-0">
          {/* Avatar Container with Online Indicator */}
          <div className="relative shrink-0">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-12 w-12 rounded-xl object-cover border border-blue-500/40 shadow-md"
            />
            <span
              className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 bg-emerald-500 rounded-full border-2 border-[#091122]"
              title="Online"
            />
          </div>

          {/* Name & Email */}
          <div className="min-w-0 text-left">
            <h4 className="text-base font-bold text-white tracking-tight truncate">
              {user.name}
            </h4>
            <p className="text-xs font-medium text-slate-400 truncate mt-0.5">
              {user.email}
            </p>
          </div>
        </div>

        {/* Superadmin Badge */}
        <span className="shrink-0 rounded-full bg-blue-950/90 border border-blue-800/60 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider text-blue-400 uppercase">
          {user.role}
        </span>
      </div>

      {/* Primary Navigation List */}
      <div className="pt-2 space-y-1 text-left">
        {/* My Profile */}
        <button
          type="button"
          onClick={onProfileClick}
          className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/60 transition-colors group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <User className="h-4.5 w-4.5 text-slate-400 group-hover:text-white transition-colors" />
            <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
              My Profile
            </span>
          </div>
          <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
        </button>

        {/* Account Settings */}
        <button
          type="button"
          onClick={onSettingsClick}
          className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/60 transition-colors group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Settings className="h-4.5 w-4.5 text-slate-400 group-hover:text-white transition-colors" />
            <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
              Account Settings
            </span>
          </div>
          <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
        </button>

        {/* Security */}
        <button
          type="button"
          onClick={onSecurityClick}
          className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-800/60 transition-colors group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <Shield className="h-4.5 w-4.5 text-slate-400 group-hover:text-white transition-colors" />
            <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
              Security
            </span>
          </div>
          {user.is2FA && (
            <span className="rounded-md bg-cyan-950/80 border border-cyan-800/60 px-2 py-0.5 text-[10px] font-mono font-bold text-cyan-400">
              2FA On
            </span>
          )}
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-800/80 my-1.5" />

      {/* Logout Action */}
      <div className="text-left">
        <button
          type="button"
          onClick={onLogout}
          className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-rose-950/30 transition-colors group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <LogOut className="h-4.5 w-4.5 text-rose-400/90 group-hover:text-rose-300 transition-colors" />
            <span className="text-sm font-semibold text-rose-300 group-hover:text-rose-200 transition-colors">
              Logout
            </span>
          </div>
          <ArrowRight className="h-4 w-4 text-rose-400/90 group-hover:text-rose-300 transition-colors" />
        </button>
      </div>
    </div>
  );
}
