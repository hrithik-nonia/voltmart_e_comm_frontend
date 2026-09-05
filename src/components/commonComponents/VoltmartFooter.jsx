import { useState } from "react";
import { Zap, Lock, ShieldCheck, Globe } from "lucide-react";

export default function VoltmartFooter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    alert(`Subscribed ${email} to Terminal Newsletter!`);
    setEmail("");
  };

  return (
    <footer className="w-full bg-[#070D18] text-slate-300 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto pt-16 pb-8 px-6 sm:px-12 lg:px-16">
        {/* Top 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Security */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm shadow-blue-500/50">
                <Zap className="h-4 w-4 fill-white stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold tracking-wider text-white uppercase">
                VOLTMART
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-normal">
              Architecting elite computational rigs, neural peripherals, and
              telemetry gear for high-velocity operators worldwide.
            </p>

            {/* Hardware Security Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 rounded-xl border border-cyan-900/60 bg-[#0E1E30] px-3.5 py-2 text-xs font-bold text-cyan-400">
                <Lock className="h-3.5 w-3.5 stroke-[2.5]" />
                <span>256-Bit Hardware Security</span>
              </div>
            </div>
          </div>

          {/* Column 2: Hardware Ecosystem */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-extrabold tracking-widest text-white uppercase">
              HARDWARE ECOSYSTEM
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <a
                  href="#quantum"
                  className="hover:text-white transition-colors"
                >
                  Quantum Workstations
                </a>
              </li>
              <li>
                <a
                  href="#thermal"
                  className="hover:text-white transition-colors"
                >
                  Thermal Chassis Matrix
                </a>
              </li>
              <li>
                <a
                  href="#tactile"
                  className="hover:text-white transition-colors"
                >
                  Tactile Flight & Key Arrays
                </a>
              </li>
              <li>
                <a
                  href="#spatial"
                  className="hover:text-white transition-colors"
                >
                  Spatial Audio Nodes
                </a>
              </li>
              <li>
                <a href="#cryo" className="hover:text-white transition-colors">
                  Cryo-Loop Thermal Units
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Node & Support */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-extrabold tracking-widest text-white uppercase">
              NODE & SUPPORT
            </h3>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <a
                  href="#telemetry"
                  className="hover:text-white transition-colors"
                >
                  Global Fulfillment Telemetry
                </a>
              </li>
              <li>
                <a href="#rma" className="hover:text-white transition-colors">
                  3-Year Hardware RMA Portal
                </a>
              </li>
              <li>
                <a
                  href="#drivers"
                  className="hover:text-white transition-colors"
                >
                  Firmware & Driver Vault
                </a>
              </li>
              <li>
                <a
                  href="#diagnostics"
                  className="hover:text-white transition-colors"
                >
                  Overclocking Diagnostics
                </a>
              </li>
              <li>
                <a
                  href="#enterprise"
                  className="hover:text-white transition-colors"
                >
                  Enterprise Deployment
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Terminal Newsletter */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-extrabold tracking-widest text-white uppercase">
              TERMINAL NEWSLETTER
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Receive low-latency drop alerts on limited tier components and
              firmware updates.
            </p>

            {/* Input Form */}
            <form onSubmit={handleSubscribe} className="pt-1">
              <div className="relative flex items-center rounded-xl border border-slate-800 bg-[#0F1728] p-1.5 focus-within:border-slate-700">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="terminal@operator.sys"
                  required
                  className="w-full bg-transparent px-3 py-1 text-xs text-slate-200 placeholder:text-slate-500 font-mono focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 px-4 py-2 text-xs font-bold text-white shadow-sm transition-all shrink-0 focus:outline-none cursor-pointer"
                >
                  Join
                </button>
              </div>
            </form>

            <p className="text-[10px] text-slate-500 font-mono leading-tight">
              Zero spam telemetry. Cryptographic unsubscription anytime.
            </p>
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-slate-800/80 my-8" />

        {/* Bottom Footer Details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p className="text-slate-500">
            © 2025 VoltMart Systems Inc. All computing rights reserved.
          </p>

          {/* Certifications Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-400 font-bold uppercase tracking-wider text-[11px]">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-cyan-400 stroke-[2.5]" />
              <span>SOC-2 TYPE II CERTIFIED</span>
            </div>

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-500 stroke-[2.5]" />
              <span>3YR HARDWARE GUARANTEE</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Globe className="h-3.5 w-3.5 text-cyan-400 stroke-[2.5]" />
              <span>NEUTRAL CARBON LOGISTICS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
