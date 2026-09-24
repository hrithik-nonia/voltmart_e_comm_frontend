import { useState } from "react";
import { Mail, Phone, Check } from "lucide-react";

export default function GeneralConfigurationPanel({
  initialData = {
    identityName: "VoltMart Global High-Tech",
    telemetryEmail: "ops-telemetry@voltmart.io",
    operationsPhone: "+1 (888) 942-VOLT",
    isValidated: true,
  },
  onSave = () => {},
}) {
  const [identityName, setIdentityName] = useState(initialData.identityName);
  const [telemetryEmail, setTelemetryEmail] = useState(
    initialData.telemetryEmail,
  );
  const [operationsPhone, setOperationsPhone] = useState(
    initialData.operationsPhone,
  );
  const [isSaved, setIsSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaved(true);
    onSave({
      identityName,
      telemetryEmail,
      operationsPhone,
    });
    setTimeout(() => setIsSaved(false), 2000);
  };

  return (
    <section className="bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 p-6 sm:p-8 text-left space-y-6">
      {/* Header */}
      <div className="space-y-1 pb-4 border-b border-slate-800/80">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
          General Configuration
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-medium">
          Core identity and contact endpoints for the VoltMart network.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Store Identity Name */}
        <div>
          <label className="block text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-1.5">
            STORE IDENTITY NAME
          </label>

          <div className="relative flex items-center">
            <input
              type="text"
              required
              value={identityName}
              onChange={(e) => setIdentityName(e.target.value)}
              placeholder="Store handle name..."
              className="w-full bg-[#050A14] border border-slate-800 rounded-xl pl-4 pr-28 py-3 text-sm font-semibold text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all"
            />
            {initialData.isValidated && (
              <span className="absolute right-3 rounded-md bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-1 text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                VALIDATED
              </span>
            )}
          </div>

          <p className="text-xs text-slate-500 font-medium mt-1.5">
            Public node handle displayed across invoices and client hardware
            manifests.
          </p>
        </div>

        {/* 2-Column Inputs (Telemetry Email & Operations Phone) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Store Telemetry Email */}
          <div>
            <label className="block text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-1.5">
              STORE TELEMETRY EMAIL
            </label>

            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
              <input
                type="email"
                required
                value={telemetryEmail}
                onChange={(e) => setTelemetryEmail(e.target.value)}
                placeholder="email@voltmart.io"
                className="w-full bg-[#050A14] border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm font-mono text-cyan-400 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>

            <p className="text-xs text-slate-500 font-medium mt-1.5">
              Receives automated failure reports and SLA logs.
            </p>
          </div>

          {/* Store Operations Phone */}
          <div>
            <label className="block text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-1.5">
              STORE OPERATIONS PHONE
            </label>

            <div className="relative flex items-center">
              <Phone className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
              <input
                type="text"
                required
                value={operationsPhone}
                onChange={(e) => setOperationsPhone(e.target.value)}
                placeholder="+1 (888) 000-VOLT"
                className="w-full bg-[#050A14] border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-sm font-mono text-cyan-400 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>

            <p className="text-xs text-slate-500 font-medium mt-1.5">
              Carrier line for hardware requisition dispatch.
            </p>
          </div>
        </div>

        {/* Save Changes CTA Button */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1E65F3] hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all active:scale-[0.99] cursor-pointer"
          >
            <Check className="h-4.5 w-4.5 stroke-[2.5]" />
            <span>{isSaved ? "Saved!" : "Save Changes"}</span>
          </button>
        </div>
      </form>
    </section>
  );
}
