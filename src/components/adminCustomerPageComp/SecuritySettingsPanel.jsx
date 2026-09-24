import { useState } from "react";
import { KeyRound, Eye, EyeOff, ShieldCheck, Check } from "lucide-react";

export default function SecuritySettingsPanel({ onUpdatePassword = () => {} }) {
  const [currentPassword, setCurrentPassword] = useState("••••••••••••••••");
  const [newPassword, setNewPassword] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword) return;
    setIsSaved(true);
    onUpdatePassword({ currentPassword, newPassword });
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <section className="bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 p-6 sm:p-8 text-left space-y-6">
      {/* Header */}
      <div className="space-y-1 pb-4 border-b border-slate-800/80">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          Security & Authentication Mesh
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-medium">
          Operator authentication credentials, key rotation, and active cluster
          access tokens.
        </p>
      </div>

      {/* Form Container Box */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-[#050A14] rounded-2xl border border-slate-800/90 p-5 sm:p-6 space-y-4">
          {/* Sub-section Title */}
          <div className="flex items-center gap-2">
            <KeyRound className="h-4 w-4 text-cyan-400 stroke-[2.2]" />
            <h3 className="text-xs font-mono font-bold tracking-widest text-slate-300 uppercase">
              UPDATE ROOT ACCESS PASSWORD
            </h3>
          </div>

          {/* 2-Column Password Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Current Password Field */}
            <div>
              <label className="block text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-1.5">
                CURRENT PASSWORD
              </label>

              <div className="relative flex items-center">
                <input
                  type={showCurrent ? "text" : "password"}
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="w-full bg-[#091122] border border-slate-800 rounded-xl pl-4 pr-10 py-3 text-sm font-mono text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute right-3.5 text-slate-500 hover:text-slate-300 transition-colors p-1"
                  aria-label="Toggle password visibility"
                >
                  {showCurrent ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* New Password Field */}
            <div>
              <label className="block text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-1.5">
                NEW PASSWORD
              </label>

              <div className="relative flex items-center">
                <input
                  type={showNew ? "text" : "password"}
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter 16+ char passphrase"
                  className="w-full bg-[#091122] border border-slate-800 rounded-xl pl-4 pr-10 py-3 text-sm font-mono text-cyan-400 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute right-3.5 text-slate-500 hover:text-slate-300 transition-colors p-1"
                  aria-label="Toggle new password visibility"
                >
                  {showNew ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button & Security Badge Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <ShieldCheck className="h-4 w-4 text-emerald-500 stroke-[2.2]" />
            <span>Passphrase requirement: Min 16 characters with symbols</span>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#1E65F3] hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all active:scale-[0.99] cursor-pointer"
          >
            <Check className="h-4.5 w-4.5 stroke-[2.5]" />
            <span>{isSaved ? "Updated!" : "Update Password"}</span>
          </button>
        </div>
      </form>
    </section>
  );
}
