import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Zap } from "lucide-react";
import { useMutation } from "@apollo/client/react";

// custom imports
import { LOGIN, SIGN_UP, OTP_VERIFY } from "../../graphql/mutations/auth";
import { useMessage } from "../../context/MessageContext";
import { uploadProfileImage } from "../../api/postApis";

export default function AuthForm({ onClose }) {
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { showError, showSuccess } = useMessage();

  const navigate = useNavigate();

  const initialFormData = {
    name: "",
    email: "",
    password: "",
    imageUrl: "",
    otp: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const imageUrl = await uploadProfileImage(file);
      setFormData((prev) => ({ ...prev, imageUrl }));
      showSuccess("Image upload ho gayi");
    } catch {
      showError("Image upload fail ho gayi");
    }
  };

  // ── Apollo login mutation ──
  const [login, { loading }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      const token = data.login.token;
      // Token localStorage mein save karo
      localStorage.setItem("access_token", token);
      localStorage.setItem("user_data", JSON.stringify(data.login.user));
      showSuccess(data?.login?.message);
      onClose();

      const payload = JSON.parse(atob(token.split(".")[1]));

      if (payload.role === "admin") {
        navigate("/adminDashBoard");
      } else if (payload.role === "user") {
        navigate("/");
      }
    },
    onError: (err) => {
      showError(err.message);
    },
  });

  // useMutation hook add karo
  const [signUp, { loading: signUpLoading }] = useMutation(SIGN_UP, {
    onCompleted: () => {
      showSuccess("OTP bhej diya hai email pe");
      setActiveTab("otp"); // ya jo bhi next step hai
    },
    onError: (err) => {
      showError(err.message);
    },
  });

  const [otpVerify, { loading: otpLoading }] = useMutation(OTP_VERIFY, {
    onCompleted: () => {
      showSuccess("Account ban gaya! Ab login karo");
      setActiveTab("login");
      setFormData(initialFormData);
    },
    onError: (err) => {
      showError(err.message);
    },
  });

  const handleSubmit = (e) => {
    showError("");
    e.preventDefault();

    if (activeTab === "otp") {
      otpVerify({ variables: { email: formData.email, otp: formData.otp } });
      return;
    }

    // Basic validation
    if (!formData.email || !formData.password) {
      showError("Email aur password dono bharo");
      return;
    }

    if (!rememberMe) {
      showError("Policy Accept Karo");
      return;
    }

    // Mutation call karo
    if (activeTab === "login") {
      login({
        variables: {
          email: formData.email,
          password: formData.password,
        },
      });
    } else {
      signUp({
        variables: {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          imageUrl: formData.imageUrl,
        },
      });
    }
  };
  return (
    <>
      <div
        className=" w-full bg-black/30 flex items-center justify-center p-1 font-sans absolute z-20"
        onClick={onClose}
      >
        {/* Main Auth Container Card */}
        <div
          className="relative w-full max-w-md bg-white rounded-3xl border border-slate-200/80 p-6 sm:py-4 sm:px-8 space-y-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Logo */}
          <div className="flex items-center justify-center gap-3 pt-2">
            <div className="h-10 w-10 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center shadow-xs">
              <Zap className="h-5 w-5 text-slate-900 fill-slate-900" />
            </div>
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Voltmart
            </span>
          </div>
          {/* Tab Switcher (Sign In / Create Account) */}
          <div className="bg-slate-100/80 p-1.5 rounded-2xl flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("login")}
              className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 ${
                activeTab === "login"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500 hover:text-slate-800 font-semibold"
              }`}
            >
              Log In
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("signup")}
              className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 ${
                activeTab === "signup"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-500 hover:text-slate-800 font-semibold"
              }`}
            >
              Create Account
            </button>
          </div>
          {/* OTP Screen */}
          {activeTab === "otp" && (
            <div className="space-y-4 text-center py-2">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-slate-900">
                  OTP Verify Karo
                </h2>
                <p className="text-xs text-slate-500">
                  OTP bheja hai{" "}
                  <span className="font-semibold text-slate-700">
                    {formData.email}
                  </span>{" "}
                  pe
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  placeholder="OTP daalo"
                  maxLength={6}
                  className="w-full text-center tracking-[0.5em] text-lg font-bold py-3 px-4 bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-300 placeholder:tracking-normal focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />

                <button
                  type="submit"
                  disabled={otpLoading}
                  className="w-full bg-[#0070E0] hover:bg-[#0060C4] text-white font-bold text-sm py-3.5 rounded-xl shadow-md shadow-blue-500/25 transition-all active:scale-[0.99] cursor-pointer"
                >
                  {otpLoading ? "Verify ho raha hai..." : "Verify Karo"}
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("signup")}
                  className="text-xs text-slate-500 hover:text-slate-700 font-semibold"
                >
                  ← Wapas jao
                </button>
              </form>
            </div>
          )}
          {/* Welcome Section */}
          <div className="space-y-1 text-left">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {activeTab === "login" ? "Welcome back" : "Create your account"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              {activeTab === "signin"
                ? "Sign in to your Voltmart account"
                : "Get started with your Voltmart hardware account"}
            </p>
          </div>

          {/* Google Social Button */}
          {activeTab !== "otp" && (
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 text-slate-700 font-semibold text-sm py-3 px-4 rounded-xl shadow-xs transition-all active:scale-[0.99] cursor-pointer"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>
          )}

          {/* Divider */}
          {activeTab !== "otp" && (
            <div className="flex items-center my-4">
              <div className="flex-1 border-t border-slate-200/80" />
              <span className="px-3 text-[10px] sm:text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                OR WITH EMAIL
              </span>
              <div className="flex-1 border-t border-slate-200/80" />
            </div>
          )}

          {/* Input Form */}
          {activeTab !== "otp" && (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {activeTab === "login" ? null : (
                <>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      NAME
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        type="text"
                        required
                        placeholder="Name"
                        className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      PROFILE IMAGE
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="w-full text-sm text-slate-500 file:mr-3 file:py-2 file:px-4 
                   file:rounded-lg file:border-0 file:font-semibold 
                   file:bg-slate-100 file:text-slate-700 hover:file:bg-slate-200 
                   cursor-pointer"
                    />
                    {formData.imageUrl && (
                      <img
                        src={formData.imageUrl}
                        alt="preview"
                        className="mt-2 h-12 w-12 rounded-full object-cover border border-slate-200"
                      />
                    )}
                  </div>
                </>
              )}

              {/* Email Field */}
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  EMAIL ADDRESS
                </label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    required
                    placeholder="alex.miller@example.com"
                    className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                  PASSWORD
                </label>
                <div className="relative flex items-center">
                  <Lock className="absolute left-3.5 h-4 w-4 text-slate-400 pointer-events-none" />
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter password"
                    className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 text-slate-400 hover:text-slate-600 transition-colors p-1"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Options Row (Remember me / Forgot password) */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 accent-blue-600 cursor-pointer"
                  />
                  <span className="text-xs font-semibold text-slate-600">
                    Remember me
                  </span>
                </label>

                {activeTab === "signin" && (
                  <a
                    href="#forgot-password"
                    className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Forgot password?
                  </a>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || signUpLoading}
                className="w-full bg-[#0070E0] hover:bg-[#0060C4] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.99] cursor-pointer mt-2"
              >
                <span>
                  {loading || signUpLoading
                    ? "Please wait..."
                    : activeTab === "login"
                      ? "Log In"
                      : "Create Account"}
                </span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </button>
            </form>
          )}

          {/* Footer Account Switch Prompt */}
          {activeTab !== "otp" && (
            <div className="text-center pt-2">
              <p className="text-xs font-medium text-slate-500">
                {activeTab === "login" ? (
                  <>
                    Don't have an account?
                    <button
                      type="button"
                      onClick={() => setActiveTab("signup")}
                      className="font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      Create an account
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?
                    <button
                      type="button"
                      onClick={() => setActiveTab("login")}
                      className="font-bold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
                    >
                      Log In
                    </button>
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
