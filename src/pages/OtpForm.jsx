import { useState } from "react";
import { Zap } from "lucide-react";
import { useMutation } from "@apollo/client/react";
import { OTP_VERIFY } from "../graphql/mutations/auth";
import { useMessage } from "../context/MessageContext";

export default function OtpForm({ email, onClose }) {
  const [otp, setOtp] = useState("");
  const { showError, showSuccess } = useMessage();

  const [otpVerify, { loading }] = useMutation(OTP_VERIFY, {
    onCompleted: () => {
      showSuccess("Account ban gaya! Ab login karo");
      onClose();
    },
    onError: (err) => {
      showError(err.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!otp || otp.length < 4) {
      showError("OTP daalo");
      return;
    }
    otpVerify({ variables: { email, otp } });
  };

  return (
    <div
      className="w-full bg-black/30 flex items-center justify-center p-1 font-sans fixed z-20"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-white rounded-3xl border border-slate-200/80 p-6 sm:py-6 sm:px-8 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center">
            <Zap className="h-5 w-5 text-slate-900 fill-slate-900" />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-900">
            Voltmart
          </span>
        </div>

        {/* Heading */}
        <div className="text-center space-y-1">
          <h2 className="text-xl font-bold text-slate-900">OTP Verify Karo</h2>
          <p className="text-xs text-slate-500">
            <span className="font-semibold text-slate-700">{email}</span> pe OTP
            bheja hai
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="OTP daalo"
            maxLength={6}
            className="w-full text-center tracking-[0.5em] text-lg font-bold py-3 px-4 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-300 placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0070E0] hover:bg-[#0060C4] text-white font-bold text-sm py-3.5 rounded-xl shadow-md shadow-blue-500/25 transition-all active:scale-[0.99] cursor-pointer"
          >
            {loading ? "Verify ho raha hai..." : "Verify Karo"}
          </button>
        </form>
      </div>
    </div>
  );
}
