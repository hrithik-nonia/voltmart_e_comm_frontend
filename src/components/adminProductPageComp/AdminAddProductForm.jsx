// built in imports
import { Box, UploadCloud, ChevronDown, Check } from "lucide-react";

function AdminAddProductForm({ onClose }) {
  return (
    <>
      <section className="absolute inset-5 text-white">
        <div className="w-full md:w-4xl mx-auto bg-[#1a2639] rounded-2xl p-5 md:p-6 border border-slate-700/60 space-y-3">
          {/* heading */}
          <div className="flex items-center gap-4 border-b border-gray-700/60">
            {/* Title */}
            <h1 className="text-[30px] font-bold tracking-tight text-white">
              Add Product
            </h1>

            {/* Admin Badge */}
            <span
              className="
            rounded-md
            border border-slate-600/70
            bg-[#1d2b40]
            px-2.5 py-1
            text-sm
            font-medium
            text-slate-400
          "
            >
              Admin
            </span>
          </div>

          {/* form fields */}
          <div className="w-full space-y-6">
            {/* Product Name */}
            <div>
              <label className="mb-2 block text-sm font-bold tracking-wide text-slate-200">
                PRODUCT NAME <span className="text-orange-500">*</span>
              </label>

              <input
                type="text"
                defaultValue="VoltVision 49' Curved QD-OLED Studio Rig"
                placeholder="Enter product name"
                className="
            h-[51px]
            w-full
            rounded-xl
            border border-slate-700
            bg-[#0d1629]
            px-4
            text-[16px]
            font-medium
            text-white
            outline-none
            transition-all
            placeholder:text-slate-600
            focus:border-blue-500
            focus:ring-1
            focus:ring-blue-500/40
          "
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-bold tracking-wide text-slate-200">
                DESCRIPTION
              </label>

              <textarea
                rows={3}
                defaultValue="Next-generation quantum-dot OLED curved panoramic gaming and workstation display with 240Hz refresh rate and dual Thunderbolt 4 ports."
                placeholder="Enter product description"
                className="
            min-h-[100px]
            w-full
            resize-none
            rounded-xl
            border border-slate-700
            bg-[#0d1629]
            px-4
            py-4
            text-[16px]
            font-medium
            leading-6
            text-white
            outline-none
            transition-all
            placeholder:text-slate-600
            focus:border-blue-500
            focus:ring-1
            focus:ring-blue-500/40
          "
              />
            </div>

            {/* Price / Sale Price / Stock */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Price */}
              <div>
                <label className="mb-2 block text-sm font-bold tracking-wide text-slate-200">
                  PRICE ($) <span className="text-orange-500">*</span>
                </label>

                <div
                  className="
              flex h-[47px]
              overflow-hidden
              rounded-xl
              border border-slate-700
              bg-[#0d1629]
              focus-within:border-blue-500
              focus-within:ring-1
              focus-within:ring-blue-500/40
            "
                >
                  <div className="flex w-[48px] items-center justify-center bg-[#142441] text-lg text-slate-400">
                    $
                  </div>

                  <input
                    type="text"
                    defaultValue="1,499.00"
                    className="
                min-w-0
                flex-1
                bg-transparent
                px-3
                text-[16px]
                font-medium
                text-white
                outline-none
              "
                  />
                </div>
              </div>

              {/* Sale Price */}
              <div>
                <label className="mb-2 block text-sm font-bold tracking-wide text-slate-200">
                  SALE PRICE ($)
                </label>

                <div
                  className="
              flex h-[47px]
              overflow-hidden
              rounded-xl
              border border-slate-700
              bg-[#0d1629]
              focus-within:border-blue-500
              focus-within:ring-1
              focus-within:ring-blue-500/40
            "
                >
                  <div className="flex w-[48px] items-center justify-center bg-[#142441] text-lg text-slate-400">
                    $
                  </div>

                  <input
                    type="text"
                    defaultValue="1,299.00"
                    className="
                min-w-0
                flex-1
                bg-transparent
                px-3
                text-[16px]
                font-medium
                text-white
                outline-none
              "
                  />
                </div>
              </div>

              {/* Stock */}
              <div>
                <label className="mb-2 block text-sm font-bold tracking-wide text-slate-200">
                  STOCK (QTY) <span className="text-orange-500">*</span>
                </label>

                <div
                  className="
              flex h-[47px]
              overflow-hidden
              rounded-xl
              border border-slate-700
              bg-[#0d1629]
              focus-within:border-blue-500
              focus-within:ring-1
              focus-within:ring-blue-500/40
            "
                >
                  <div className="flex w-[48px] items-center justify-center bg-[#142441] text-slate-400">
                    <Box size={20} strokeWidth={1.7} />
                  </div>

                  <input
                    type="number"
                    defaultValue="42"
                    className="
                min-w-0
                flex-1
                bg-transparent
                px-3
                text-[16px]
                font-medium
                text-white
                outline-none
              "
                  />
                </div>
              </div>
            </div>

            {/* ================= PRODUCT IMAGE ================= */}
            <div>
              <label className="mb-2 block text-[11px] font-bold tracking-wide text-slate-200">
                PRODUCT IMAGE
              </label>

              <label
                htmlFor="product-image"
                className="
            flex h-[104px] cursor-pointer flex-col
            items-center justify-center
            rounded-lg
            border border-dashed border-slate-600
            bg-[#172236]
            transition-all duration-200
            hover:border-blue-500/60
            hover:bg-[#1a2940]
          "
              >
                <input
                  id="product-image"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                />

                {/* Upload Icon */}
                <div
                  className="
              mb-2 flex h-8 w-8 items-center justify-center
              rounded-full
              bg-[#202e43]
              text-slate-400
            "
                >
                  <UploadCloud size={16} strokeWidth={1.8} />
                </div>

                <span className="text-[12px] font-semibold text-blue-400">
                  Upload Image
                </span>

                <span className="mt-1 text-[9px] text-slate-500">
                  Drag & drop or browse high-resolution files (PNG, JPG, WebP)
                </span>
              </label>
            </div>

            {/* ================= CATEGORY ================= */}
            <div>
              <label className="mb-2 block text-[11px] font-bold tracking-wide text-slate-200">
                CATEGORY <span className="text-orange-500">*</span>
              </label>

              <div className="relative">
                <select
                  defaultValue="Displays & Monitors"
                  className="
              h-[36px]
              w-full
              appearance-none
              rounded-lg
              border border-slate-700
              bg-[#0d1629]
              px-3
              pr-10
              text-[12px]
              font-medium
              text-white
              outline-none
              transition-all
              focus:border-blue-500
              focus:ring-1
              focus:ring-blue-500/30
            "
                >
                  <option>Displays & Monitors</option>
                  <option>Neural Compute</option>
                  <option>Peripherals</option>
                  <option>Acoustics</option>
                  <option>Terminals</option>
                  <option>Power & Thermal</option>
                  <option>Robotics & Automation</option>
                </select>

                <ChevronDown
                  size={15}
                  className="
              pointer-events-none
              absolute right-3 top-1/2
              -translate-y-1/2
              text-slate-400
            "
                />
              </div>
            </div>

            {/* ================= BRAND / COLOR / WARRANTY ================= */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Brand */}
              <div>
                <label className="mb-2 block text-[11px] font-bold tracking-wide text-slate-200">
                  BRAND
                </label>

                <input
                  type="text"
                  defaultValue="VoltVision"
                  className="
              h-[33px]
              w-full
              rounded-lg
              border border-slate-700
              bg-[#0d1629]
              px-3
              text-[12px]
              font-medium
              text-white
              outline-none
              transition-all
              focus:border-blue-500
              focus:ring-1
              focus:ring-blue-500/30
            "
                />
              </div>

              {/* Color */}
              <div>
                <label className="mb-2 block text-[11px] font-bold tracking-wide text-slate-200">
                  COLOR
                </label>

                <input
                  type="text"
                  defaultValue="Matte Space Slate"
                  className="
              h-[33px]
              w-full
              rounded-lg
              border border-slate-700
              bg-[#0d1629]
              px-3
              text-[12px]
              font-medium
              text-white
              outline-none
              transition-all
              focus:border-blue-500
              focus:ring-1
              focus:ring-blue-500/30
            "
                />
              </div>

              {/* Warranty */}
              <div>
                <label className="mb-2 block text-[11px] font-bold tracking-wide text-slate-200">
                  WARRANTY
                </label>

                <input
                  type="text"
                  defaultValue="3 Years Enterprise Shield"
                  className="
              h-[33px]
              w-full
              rounded-lg
              border border-slate-700
              bg-[#0d1629]
              px-3
              text-[12px]
              font-medium
              text-white
              outline-none
              transition-all
              focus:border-blue-500
              focus:ring-1
              focus:ring-blue-500/30
            "
                />
              </div>
            </div>

            {/* ================= STATUS ================= */}
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 ">
              {/* Active */}
              <div
                className="
            flex h-[55px]
            items-center justify-between
            rounded-lg
            border border-slate-700
            bg-[#0d1629]
            px-3
          "
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-bold text-white">
                      Active
                    </span>

                    <span
                      className="
                  rounded-sm
                  bg-emerald-500/20
                  px-1.5 py-[2px]
                  text-[8px]
                  font-bold
                  text-emerald-400
                "
                    >
                      LIVE
                    </span>
                  </div>

                  <p className="mt-1 text-[9px] text-slate-500">
                    Visible across store catalog and search
                  </p>
                </div>

                {/* Toggle */}
                <button
                  type="button"
                  className="
              relative h-[21px] w-[38px]
              rounded-full
              bg-emerald-500
            "
                >
                  <span
                    className="
                absolute right-[3px] top-[3px]
                h-[15px] w-[15px]
                rounded-full
                bg-white
                shadow-sm
              "
                  />
                </button>
              </div>

              {/* Featured */}
              <div
                className="
            flex h-[55px]
            items-center justify-between
            rounded-lg
            border border-slate-700
            bg-[#0d1629]
            px-3
          "
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-bold text-white">
                      Featured
                    </span>

                    <span
                      className="
                  rounded-sm
                  bg-blue-500/20
                  px-1.5 py-[2px]
                  text-[8px]
                  font-bold
                  text-blue-400
                "
                    >
                      SPOTLIGHT
                    </span>
                  </div>

                  <p className="mt-1 text-[9px] text-slate-500">
                    Pinned to storefront spotlight carousel
                  </p>
                </div>

                {/* Toggle */}
                <button
                  type="button"
                  className="
              relative h-[21px] w-[38px]
              rounded-full
              bg-blue-600
            "
                >
                  <span
                    className="
                absolute right-[3px] top-[3px]
                h-[15px] w-[15px]
                rounded-full
                bg-white
                shadow-sm
              "
                  />
                </button>
              </div>
            </div>

            {/* ================= ACTION BUTTONS ================= */}
            <div className="grid grid-cols-1 gap-2.5 pt-2 md:grid-cols-[1fr_1fr] border-t border-gray-700/60">
              {/* Discard */}
              <button
                type="button"
                onClick={onClose}
                className="
            h-[37px]
            rounded-lg
            border border-slate-600
            bg-transparent
            text-[12px]
            font-semibold
            text-slate-300
            transition-all
            hover:border-slate-500
            hover:bg-slate-800/40
            hover:text-white
          "
              >
                Discard
              </button>

              {/* Save Product */}
              <button
                type="submit"
                className="
            flex h-[37px]
            items-center justify-center
            gap-2
            rounded-lg
            bg-orange-500
            text-[12px]
            font-bold
            text-white
            shadow-[0_4px_12px_rgba(249,115,22,0.25)]
            transition-all
            hover:bg-orange-600
            hover:shadow-[0_5px_16px_rgba(249,115,22,0.35)]
            active:scale-[0.98]
          "
              >
                <Check size={14} strokeWidth={2.5} />
                Save Product
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default AdminAddProductForm;
