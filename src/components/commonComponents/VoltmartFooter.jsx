import { Zap } from "lucide-react";

export default function VoltmartFooter() {
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
          </div>
        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-slate-800/80 my-8" />

        {/* Bottom Footer Details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium">
          <p className="text-slate-500">
            © 2025 VoltMart Systems Inc. All computing rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
