import { X, AlertCircle } from "lucide-react";

export default function MinimalErrorCard({
  onClose,
  onGoHome = () => (window.location.href = "/"),
  errorMessage,
}) {
  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 9999 }}
      className="flex items-center justify-center p-4 font-sans bg-black/30"
    >
      {/* Card Container */}
      <div className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200/70 shadow-xl shadow-slate-200/50 p-6 sm:p-8 space-y-6 text-center">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors p-1"
          aria-label="Close"
        >
          <X className="h-5 w-5 stroke-[2]" />
        </button>

        {/* Top Icon Circle */}
        <div className="flex justify-center pt-2">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-50/90 border border-red-100/50">
            <AlertCircle className="h-10 w-10 text-red-500 stroke-[2]" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-1.5 max-w-xs mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            OOPs !
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
            {errorMessage}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2">
          <button
            type="button"
            onClick={onGoHome}
            className="w-full bg-[#1E65F3] hover:bg-blue-700 text-white font-bold text-sm sm:text-base py-3.5 px-4 rounded-2xl shadow-md shadow-blue-500/25 transition-all active:scale-[0.99] cursor-pointer"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
