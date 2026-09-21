import { useState } from "react";
import { X, PlusCircle } from "lucide-react";
import { CREATE_CATEGORY } from "../../graphql/mutations/category";
import { useMutation } from "@apollo/client/react";
import { useMessage } from "../../context/MessageContext";

export default function AddCategoryModal({ onClose }) {
  // get error/success setter from context
  const { showError, showSuccess } = useMessage();

  // initial form data
  const initialFormData = {
    name: "",
    description: "",
  };

  // form state
  const [formData, setFormData] = useState(initialFormData);
  const [isActive, setIsActive] = useState(true);

  // send create category request
  const [createCategory, { loading }] = useMutation(CREATE_CATEGORY);

  // Auto-generate slug from Category Name
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createCategory({
        variables: {
          name: formData.name,
          description: formData.description,
          isActive: isActive,
        },
      });
      showSuccess(data?.createCategory?.message);
    } catch (err) {
      showError(err.message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-950/20 backdrop-blur-sm flex items-center justify-center p-4 font-sans text-left fixed inset-0">
      {/* Modal Container */}
      <div className="relative w-full max-w-md sm:max-w-lg bg-[#091122] text-white rounded-3xl border border-slate-800/90 shadow-2xl shadow-black/90 p-6 sm:p-7 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Add Category
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-slate-800/60"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 stroke-[2]" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category Name */}
          <div>
            <label className="block text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-1.5">
              CATEGORY NAME <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              name="name"
              maxLength={30}
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Laptops"
              className="w-full bg-[#050A14] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-1.5">
              DESCRIPTION
            </label>
            <textarea
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Short description..."
              className="w-full bg-[#050A14] border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500 transition-all resize-none"
            />
          </div>

          {/* Active Switch Toggle Box */}
          <div className="bg-[#050A14] border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-white tracking-tight">
                Active
              </h4>
              <p className="text-xs text-slate-400 font-medium mt-0.5">
                Make category discoverable in catalog
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              className={`relative w-12 h-6.5 rounded-full transition-colors duration-200 cursor-pointer ${
                isActive ? "bg-emerald-500" : "bg-slate-700"
              }`}
              aria-label="Toggle Active"
            >
              <span
                className={`absolute top-1 left-1 h-4.5 w-4.5 rounded-full bg-white shadow-md transition-transform duration-200 ${
                  isActive ? "translate-x-5.5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3.5 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-[#050A14] hover:bg-slate-800/60 text-slate-300 hover:text-white border border-slate-800 font-bold text-sm py-3.5 px-4 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-orange-500/25 flex items-center justify-center gap-1.5 transition-all active:scale-[0.99] cursor-pointer"
            >
              <PlusCircle className="h-4.5 w-4.5 stroke-[2.2]" />
              <span>{loading ? "Loading..." : "Add Category"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
