import { useState } from "react";
import { Pencil, ChevronLeft, ChevronRight } from "lucide-react";

const hardwareItems = [
  {
    id: "1",
    title: "Titan Pro X17 AI Neural Deck",
    specs: "Dual Tensor Core 48GB • Cryo-Vapor Chamber • 240Hz OLED",
    sku: "VOLT-ND-998",
    architecture: "Neural Compute",
    price: "$3,499.00",
    stockText: "42 Units",
    stockStatus: "Norm",
    stockProgress: 75,
    stockColor: "text-cyan-400",
    progressGradient: "from-blue-600 to-cyan-400",
    healthStatus: "In Stock",
    healthStyle: "bg-cyan-950/80 border-cyan-800/60 text-cyan-400",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300",
  },
  {
    id: "2",
    title: "CyberDeck K-800 Optical Deck",
    specs: "Hall Effect 0.1mm • PBT Translucent Caps • 8000Hz Polling",
    sku: "VOLT-KB-332",
    architecture: "Peripherals",
    price: "$249.50",
    stockText: "4 Units left",
    stockStatus: "Low",
    stockProgress: 15,
    stockColor: "text-amber-400",
    progressGradient: "from-amber-600 to-orange-500",
    healthStatus: "Low Stock",
    healthStyle: "bg-amber-950/80 border-amber-800/60 text-amber-400",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300",
  },
  {
    id: "3",
    title: 'AW3225QF 32" Curved 4K QD-OLED',
    specs: "0.03ms GtG • 240Hz Refresh • Dolby Vision HDR • G-Sync Pulse",
    sku: "VOLT-DP-412",
    architecture: "Displays",
    price: "$1,199.00",
    stockText: "18 Units",
    stockStatus: "Norm",
    stockProgress: 35,
    stockColor: "text-cyan-400",
    progressGradient: "from-blue-600 to-cyan-400",
    healthStatus: "In Stock",
    healthStyle: "bg-cyan-950/80 border-cyan-800/60 text-cyan-400",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300",
  },
  {
    id: "4",
    title: "Aura ANC Spatial Acoustic Headset",
    specs: "50mm Planar Magnetic • 96kHz Lossless Wireless • 60hr Cell",
    sku: "VOLT-AU-104",
    architecture: "Acoustics",
    price: "$379.00",
    stockText: "86 Units",
    stockStatus: "High",
    stockProgress: 90,
    stockColor: "text-cyan-400",
    progressGradient: "from-blue-600 to-cyan-400",
    healthStatus: "In Stock",
    healthStyle: "bg-cyan-950/80 border-cyan-800/60 text-cyan-400",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
  },
  {
    id: "5",
    title: "Galaxy Ultra Z9 Max Titan Terminal",
    specs: "Satellite Comms Uplink • Titanium Frame • 1TB NVMe Flash",
    sku: "VOLT-MB-650",
    architecture: "Terminals",
    price: "$1,499.00",
    stockText: "0 Units",
    stockStatus: "Depleted",
    stockProgress: 0,
    stockColor: "text-rose-400",
    progressGradient: "from-rose-600 to-red-500",
    healthStatus: "Out of Stock",
    healthStyle: "bg-rose-950/80 border-rose-800/60 text-rose-400",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300",
  },
  {
    id: "6",
    title: "VoltStream 4K Pro Capture Card",
    specs: "PCIe 4.0 x4 • 4K144 Zero-Lag Passthrough • HDR10 Tone Mapping",
    sku: "VOLT-CP-119",
    architecture: "Capture Gear",
    price: "$289.99",
    stockText: "53 Units",
    stockStatus: "Norm",
    stockProgress: 60,
    stockColor: "text-cyan-400",
    progressGradient: "from-blue-600 to-cyan-400",
    healthStatus: "In Stock",
    healthStyle: "bg-cyan-950/80 border-cyan-800/60 text-cyan-400",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=300",
  },
];

export default function StandaloneHardwareTable({
  items = hardwareItems,
  onEdit = () => {},
}) {
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(items.map((i) => i.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <section>
      <div className="w-full bg-[#091122] rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/80 p-5 sm:p-7 space-y-6">
        {/* Table Viewport */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[950px]">
            {/* Table Header */}
            <thead>
              <tr className="bg-[#050A14] text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider rounded-xl">
                <th className="py-3.5 px-4 rounded-l-xl w-10">
                  <input
                    type="checkbox"
                    checked={
                      selectedIds.length === items.length && items.length > 0
                    }
                    onChange={handleSelectAll}
                    className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 accent-blue-600 cursor-pointer"
                  />
                </th>
                <th className="py-3.5 px-4">HARDWARE MODEL / SPEC</th>
                <th className="py-3.5 px-4">SKU TELEMETRY</th>
                <th className="py-3.5 px-4">ARCHITECTURE</th>
                <th className="py-3.5 px-4">MSRP (USD)</th>
                <th className="py-3.5 px-4">REALTIME STOCK</th>
                <th className="py-3.5 px-4">NODE HEALTH</th>
                <th className="py-3.5 px-4 rounded-r-xl w-10"></th>
              </tr>
            </thead>

            {/* Table Rows */}
            <tbody className="divide-y divide-slate-800/60 text-sm">
              {items.map((item) => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <tr
                    key={item.id}
                    className={`hover:bg-slate-800/30 transition-colors group ${
                      isSelected ? "bg-blue-950/25" : ""
                    }`}
                  >
                    {/* Checkbox */}
                    <td className="py-4 px-4">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => handleSelectOne(item.id)}
                        className="h-4 w-4 rounded border-slate-700 bg-slate-900 text-blue-600 accent-blue-600 cursor-pointer"
                      />
                    </td>

                    {/* Hardware Model & Spec */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3.5">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-12 w-12 rounded-xl object-cover border border-slate-800 shrink-0"
                        />
                        <div>
                          <p className="font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                            {item.title}
                          </p>
                          <p className="text-xs text-slate-400 font-medium mt-0.5">
                            {item.specs}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* SKU Telemetry Badge */}
                    <td className="py-4 px-4">
                      <span className="inline-block rounded-md bg-blue-950/80 border border-blue-800/60 px-2.5 py-1 text-xs font-mono font-bold text-blue-400">
                        {item.sku}
                      </span>
                    </td>

                    {/* Architecture Pill */}
                    <td className="py-4 px-4">
                      <span className="inline-block rounded-full bg-blue-950/60 border border-blue-800/40 px-3 py-1 text-xs font-semibold text-slate-300">
                        {item.architecture}
                      </span>
                    </td>

                    {/* MSRP Price */}
                    <td className="py-4 px-4 font-mono font-extrabold text-white text-base">
                      {item.price}
                    </td>

                    {/* Stock Progress Bar */}
                    <td className="py-4 px-4 w-44">
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-mono font-bold">
                          <span className={item.stockColor}>
                            {item.stockText}
                          </span>
                          <span className="text-slate-400">
                            {item.stockStatus}
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${item.progressGradient}`}
                            style={{ width: `${item.stockProgress}%` }}
                          />
                        </div>
                      </div>
                    </td>

                    {/* Node Health Status */}
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-bold ${item.healthStyle}`}
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-current inline-block" />
                        {item.healthStatus}
                      </span>
                    </td>

                    {/* Edit Pencil Action */}
                    <td className="py-4 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => onEdit(item)}
                        className="p-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                        aria-label="Edit item"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footer Info & Pagination Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 text-xs font-mono text-slate-400 border-t border-slate-800/80">
          <div>
            Showing <strong className="text-white">1 to 6</strong> of 1,428
            hardware SKUs •{" "}
            <span className="text-cyan-400">
              Latency: 14ms to US-East Relay
            </span>
          </div>

          {/* Pagination */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="px-2.5 py-1 rounded-lg bg-[#050A14] border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40 flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>Prev</span>
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage(1)}
              className={`px-3 py-1 rounded-lg font-bold ${
                currentPage === 1
                  ? "bg-blue-600 text-white"
                  : "bg-[#050A14] border border-slate-800 text-slate-300"
              }`}
            >
              1
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage(2)}
              className={`px-3 py-1 rounded-lg font-bold ${
                currentPage === 2
                  ? "bg-blue-600 text-white"
                  : "bg-[#050A14] border border-slate-800 text-slate-300"
              }`}
            >
              2
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage(3)}
              className={`px-3 py-1 rounded-lg font-bold ${
                currentPage === 3
                  ? "bg-blue-600 text-white"
                  : "bg-[#050A14] border border-slate-800 text-slate-300"
              }`}
            >
              3
            </button>

            <span className="px-1 text-slate-500">...</span>

            <button
              type="button"
              onClick={() => setCurrentPage(238)}
              className="px-2.5 py-1 rounded-lg bg-[#050A14] border border-slate-800 text-slate-300 font-bold"
            >
              238
            </button>

            <button
              type="button"
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-2.5 py-1 rounded-lg bg-[#050A14] border border-slate-800 text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
