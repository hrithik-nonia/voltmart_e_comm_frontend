import { useState } from "react";
import { Smartphone, CreditCard, Banknote, CheckCircle2 } from "lucide-react";

export default function PaymentMethodWidget({
  onVerifyUPI = () => {},
  onSelectMethod = () => {},
}) {
  const [selectedMethod, setSelectedMethod] = useState("upi"); // 'upi' | 'card' | 'cod'
  const [upiId, setUpiId] = useState("alexchen@okaxis");
  const [isVerified, setIsVerified] = useState(false);

  const methods = [
    {
      id: "upi",
      title: "UPI",
      subtitle: "Instant Pay",
      icon: Smartphone,
    },
    {
      id: "card",
      title: "Card",
      subtitle: "Credit / Debit",
      icon: CreditCard,
    },
    {
      id: "cod",
      title: "Cash on Delivery",
      subtitle: "Pay at Door",
      icon: Banknote,
    },
  ];

  const handleVerify = (e) => {
    e.preventDefault();
    if (!upiId) return;
    setIsVerified(true);
    onVerifyUPI(upiId);
  };

  const handleMethodSelect = (id) => {
    setSelectedMethod(id);
    onSelectMethod(id);
  };

  return (
    <div className=" bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 p-5 sm:p-7 space-y-6 text-left">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-wider text-blue-500 uppercase">
            PAYMENT METHOD
          </span>
        </div>

        <span className="text-xs font-mono text-slate-400 font-semibold">
          Step 2 of 2
        </span>
      </div>

      {/* Payment Options Grid (3 Cards) */}
      <div className="grid grid-cols-3 gap-3">
        {methods.map((method) => {
          const Icon = method.icon;
          const isSelected = selectedMethod === method.id;

          return (
            <button
              key={method.id}
              type="button"
              onClick={() => handleMethodSelect(method.id)}
              className={`p-4 rounded-2xl border text-center space-y-2 transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#0D182E] border-2 border-blue-600 shadow-lg shadow-blue-500/10"
                  : "bg-[#050A14] border-slate-800 hover:border-slate-700"
              }`}
            >
              {/* Icon Container */}
              <div className="flex justify-center">
                <div
                  className={`h-11 w-11 rounded-xl flex items-center justify-center ${
                    isSelected
                      ? "bg-blue-950/80 text-blue-400 border border-blue-800/60"
                      : "bg-slate-900 text-slate-400 border border-slate-800"
                  }`}
                >
                  <Icon className="h-5 w-5 stroke-[2]" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h4
                  className={`text-xs sm:text-sm font-bold tracking-tight ${
                    isSelected ? "text-white" : "text-slate-300"
                  }`}
                >
                  {method.title}
                </h4>
                <p
                  className={`text-[11px] font-medium mt-0.5 ${
                    isSelected ? "text-blue-400" : "text-slate-500"
                  }`}
                >
                  {method.subtitle}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Payment Method Sub-Panel (UPI Form) */}
      {selectedMethod === "upi" && (
        <div className="bg-[#050A14] rounded-2xl border border-slate-800 p-4 sm:p-5 space-y-4">
          <label className="block text-xs sm:text-sm font-semibold text-slate-200">
            UPI ID (Virtual Payment Address)
          </label>

          <form onSubmit={handleVerify} className="flex items-center gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                required
                value={upiId}
                onChange={(e) => {
                  setUpiId(e.target.value);
                  setIsVerified(false);
                }}
                placeholder="username@bank"
                className="w-full bg-[#091122] border border-slate-700/80 rounded-xl px-4 py-3 font-mono text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-all"
              />
              {isVerified && (
                <CheckCircle2 className="absolute right-3.5 top-3.5 h-5 w-5 text-emerald-500 stroke-[2.5]" />
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow-md shadow-blue-500/20 transition-all active:scale-[0.99] cursor-pointer shrink-0"
            >
              {isVerified ? "Verified" : "Verify"}
            </button>
          </form>

          {/* Supported Apps */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-1">
            <span className="font-medium">Supported:</span>
            <span className="font-semibold text-slate-300">Google Pay</span>
            <span>•</span>
            <span className="font-semibold text-slate-300">PhonePe</span>
            <span>•</span>
            <span className="font-semibold text-slate-300">Paytm</span>
            <span>•</span>
            <span className="font-semibold text-slate-300">Any UPI App</span>
          </div>
        </div>
      )}

      {/* Card Option Sub-Panel */}
      {selectedMethod === "card" && (
        <div className="bg-[#050A14] rounded-2xl border border-slate-800 p-4 sm:p-5 text-xs text-slate-400 space-y-3">
          <p className="font-medium">
            Credit and Debit card payment details will be requested on the
            secure gateway page.
          </p>
        </div>
      )}

      {/* COD Option Sub-Panel */}
      {selectedMethod === "cod" && (
        <div className="bg-[#050A14] rounded-2xl border border-slate-800 p-4 sm:p-5 text-xs text-slate-400 space-y-3">
          <p className="font-medium">
            Pay with cash or UPI directly to the express node courier upon
            delivery.
          </p>
        </div>
      )}
    </div>
  );
}
