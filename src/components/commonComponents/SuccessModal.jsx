import { X, CheckCircle2 } from "lucide-react";

export default function SuccessModal({ onClose, successMsg }) {
  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999 }}
      className="flex items-center justify-center p-4 font-sans bg-black/30"
    >
      {/* Modal Card Container */}
      <div className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 p-6 sm:p-8 space-y-6 text-center">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors p-1"
          aria-label="Close"
        >
          <X className="h-5 w-5 stroke-[2]" />
        </button>

        {/* Top Success Icon */}
        <div className="flex justify-center pt-2">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50/90 border border-emerald-100/60">
            <CheckCircle2 className="h-10 w-10 text-emerald-500 stroke-[2]" />
          </div>
        </div>

        {/* Action Complete Pill Badge */}
        <div className="flex justify-center">
          <span className="inline-block bg-emerald-50 border border-emerald-200/60 text-emerald-600 font-mono text-[11px] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full">
            ACTION COMPLETE
          </span>
        </div>

        {/* Heading and Description */}
        <div className="space-y-2 max-w-xs mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome back!
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
            {successMsg}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-[#1E65F3] hover:bg-blue-700 text-white font-bold text-sm sm:text-base py-3.5 px-4 rounded-2xl shadow-md shadow-blue-500/25 transition-all active:scale-[0.99] cursor-pointer"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
