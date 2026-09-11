import {
  ArrowRight,
  Zap,
  LockKeyhole,
  ShieldCheck,
  Globe,
  CreditCard,
  Smartphone,
  X,
} from "lucide-react";

const OrderSummary = () => {
  return (
    <aside className="w-full max-w-[290px] overflow-hidden rounded-md border-t-2 border-orange-500 bg-[#18233d] p-4 text-white">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-200">Order Summary</h2>

        <span className="text-[10px] font-bold tracking-wider text-gray-500">
          SECURE VAULT
        </span>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-2 text-[12px]">
        <div className="flex items-center justify-between">
          <span className="text-gray-300">Hardware Subtotal</span>

          <span className="font-semibold text-gray-300">₹3,06,496</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-emerald-400">
            Hardware Promo
            <span className="ml-1 rounded bg-emerald-500/10 px-1 text-[8px] font-bold">
              APPLIED
            </span>
          </span>

          <span className="font-bold text-emerald-400">-₹500</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-gray-300">
            Express Delivery
            <Zap size={9} className="text-orange-400" fill="currentColor" />
          </span>

          <span className="font-bold text-emerald-400">✓ Free</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-gray-300">
            Estimated GST & Duties (18%)
            <span className="text-gray-500">ⓘ</span>
          </span>

          <span className="font-semibold text-gray-300">₹55,169</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-3 border-t border-[#303b54]" />

      {/* Total */}
      <div className="flex items-end justify-between">
        <span className="text-[10px] font-bold text-gray-400">
          TOTAL AMOUNT (INC. GST)
        </span>

        <span className="text-[22px] font-bold leading-none text-gray-200">
          ₹3,05,996
        </span>
      </div>

      {/* Savings */}
      <div className="mt-2 text-[10px] font-bold text-emerald-400">
        ♻ You're saving ₹72,500 on this order!
      </div>

      {/* Checkout Button */}
      <button
        className="
          mt-3 flex h-[39px] w-full
          items-center justify-center gap-2
          rounded-md bg-orange-500
          text-[12px] font-bold text-black
          shadow-lg shadow-orange-500/20
          transition
          hover:bg-orange-400
          active:scale-[0.98]
        "
      >
        Proceed to Checkout
        <ArrowRight size={14} />
      </button>

      {/* Voucher */}
      <div className="mt-5">
        <p className="mb-2 text-[10px] font-bold tracking-wide text-gray-500">
          VOUCHER / HARDWARE TOKEN
        </p>

        <div className="flex gap-1">
          <input
            type="text"
            placeholder="Enter promo code"
            className="
              h-[30px] min-w-0 flex-1
              rounded-sm bg-[#091226]
              px-2
              text-[10px] text-white
              outline-none
              placeholder:text-gray-600
              focus:ring-1 focus:ring-blue-500
            "
          />

          <button
            className="
              h-[30px] rounded-sm
              bg-blue-600 px-3
              text-[8px] font-bold
              hover:bg-blue-500
            "
          >
            Apply
          </button>
        </div>

        {/* Applied Coupon */}
        <div className="mt-2 flex items-center justify-between rounded-sm bg-[#091226] px-2 py-2">
          <span className="flex items-center gap-1 text-[8px] font-bold text-cyan-400">
            <Zap size={9} />
            VOLTLAUNCH500 (-₹500)
          </span>

          <button className="text-gray-500 hover:text-white">
            <X size={11} />
          </button>
        </div>
      </div>

      {/* Security Features */}
      <div className="mt-5 grid grid-cols-3 gap-2">
        <div className="flex items-start gap-1">
          <LockKeyhole size={12} className="shrink-0 text-gray-400" />

          <span className="text-[7px] leading-tight text-gray-400">
            256-Bit
            <br />
            Encrypted
          </span>
        </div>

        <div className="flex items-start gap-1">
          <ShieldCheck size={12} className="shrink-0 text-gray-400" />

          <span className="text-[7px] leading-tight text-gray-400">
            30-Day
            <br />
            Shield
          </span>
        </div>

        <div className="flex items-start gap-1">
          <Globe size={12} className="shrink-0 text-gray-400" />

          <span className="text-[7px] leading-tight text-gray-400">
            SOC-2
            <br />
            Verified
          </span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mt-4 grid grid-cols-4 gap-1">
        <PaymentMethod
          icon={<Smartphone size={10} />}
          label="UPI"
          sub="INSTANT"
        />

        <PaymentMethod
          icon={<CreditCard size={10} />}
          label="VISA"
          sub="PROTOCOL"
        />

        <PaymentMethod
          icon={<CreditCard size={10} />}
          label="MASTERCARD"
          sub=""
        />

        <PaymentMethod
          icon={<Zap size={10} />}
          label="LIGHTNING"
          sub="EMI"
          active
        />
      </div>
    </aside>
  );
};

const PaymentMethod = ({ icon, label, sub, active }) => {
  return (
    <div
      className={`
        flex h-[29px] flex-col
        items-center justify-center
        rounded-sm
        ${active ? "bg-[#0d2740] text-cyan-400" : "bg-[#111a30] text-gray-400"}
      `}
    >
      <div className="flex items-center gap-1">
        {icon}
        <span className="text-[6px] font-bold">{label}</span>
      </div>

      {sub && <span className="text-[5px] font-semibold">{sub}</span>}
    </div>
  );
};

export default OrderSummary;
