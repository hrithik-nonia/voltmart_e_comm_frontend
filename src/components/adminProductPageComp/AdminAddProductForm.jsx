// built in imports
import { Box, UploadCloud, ChevronDown, Check, X } from "lucide-react";
import { useState } from "react";
import { useMutation } from "@apollo/client/react";

import { uploadImage } from "../../api/postApis";
import { CREATE_PRODUCT } from "../../graphql/mutations/product";
import { useMessage } from "../../context/MessageContext";

function AdminAddProductForm({ onClose }) {
  const [isActive, setIsActive] = useState(true);
  const [isFeatured, setIsFeatured] = useState(false);
  const { showError, showSuccess } = useMessage();

  const [createProduct] = useMutation(CREATE_PRODUCT);

  // category options
  const categoryOptions = [
    {
      id: "cat-7f3a21",
      categoryLevel: "Displays & Monitors",
    },
    {
      id: "cat-9b42c8",
      categoryLevel: "Neural Compute",
    },
    {
      id: "cat-3d81f6",
      categoryLevel: "Peripherals",
    },
    {
      id: "cat-5a27e9",
      categoryLevel: "Acoustics",
    },
    {
      id: "cat-8c14b3",
      categoryLevel: "Terminals",
    },
    {
      id: "cat-2e69d5",
      categoryLevel: "Power & Thermal",
    },
    {
      id: "cat-6b53a7",
      categoryLevel: "Robotics & Automation",
    },
  ];

  const initialForm = {
    productName: "",
    description: "",
    price: "",
    salePrice: "",
    stock: "",
    category: "",
    specs: {
      brand: "",
      color: "",
      warranty: "",
    },
  };

  const [formData, setFormData] = useState(initialForm);
  const [image, setImage] = useState(null);
  const [showImgPrevComp, setShowImgPrevComp] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setShowImgPrevComp(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["color", "warranty", "brand"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        specs: {
          ...prev.specs,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    if (
      !formData.productName ||
      !formData.price ||
      !formData.stock ||
      !formData.category
    ) {
      alert("Some Required Field Is Empty");
      return;
    }

    try {
      // 1st call — image upload
      const uploadRes = await uploadImage(image);
      const imageURL = uploadRes.data.image_url; // ✅ image state (file object)

      // 2nd call — product create (sirf 1st success hone pe)
      const productCreated = await createProduct({
        variables: {
          input: {
            productName: formData.productName,
            description: formData.description,
            price: parseFloat(formData.price),
            salePrice: formData.salePrice
              ? parseFloat(formData.salePrice)
              : null,
            stock: parseInt(formData.stock),
            category: formData.category,
            specs: {
              brand: formData.specs.brand,
              color: formData.specs.color,
              warranty: formData.specs.warranty,
            },
            image: imageURL,
            isActive: isActive,
            isFeatured: isFeatured,
          },
        },
      });

      showSuccess(
        productCreated?.data?.createProduct?.productName +
          " created successfully!",
      );
      setFormData(initialForm);
      setImage(null);
      setIsFeatured(false);
      setIsActive(true);
      onClose();
    } catch (err) {
      showError(err?.message || "Something went wrong");
    }
  };
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
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
                minLength={1}
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
                name="description"
                value={formData.description}
                onChange={handleChange}
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
                    type="number"
                    min="1"
                    name="price"
                    placeholder="Price"
                    onChange={handleChange}
                    value={formData.price}
                    required
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
                    type="number"
                    min="1"
                    name="salePrice"
                    placeholder="Sale Price"
                    onChange={handleChange}
                    value={formData.salePrice}
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
                    min="1"
                    name="stock"
                    placeholder="Stock"
                    onChange={handleChange}
                    value={formData.stock}
                    required
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
                  onChange={handleImageChange}
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
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
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
                  <option value="">Select Category</option>
                  {categoryOptions.map(({ id, categoryLevel }) => (
                    <option key={id} value={id}>
                      {categoryLevel}
                    </option>
                  ))}
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
                  name="brand"
                  placeholder="Brand"
                  value={formData.specs.brand}
                  onChange={handleChange}
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
                  placeholder="Color"
                  value={formData.specs.color}
                  name="color"
                  onChange={handleChange}
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
                  placeholder="Warranty"
                  name="warranty"
                  value={formData.specs.warranty}
                  onChange={handleChange}
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
                      className={`
                  rounded-sm
                  bg-emerald-500/20
                  px-1.5 py-[2px]
                  text-[8px]
                  font-bold
                  ${isActive ? "text-emerald-400" : "text-red-600"}
                 
                `}
                    >
                      {isActive ? "Live" : "Not Live"}
                    </span>
                  </div>

                  <p className="mt-1 text-[9px] text-slate-500">
                    Visible across store catalog and search
                  </p>
                </div>

                {/* Toggle */}
                <button
                  type="button"
                  onClick={() => setIsActive((prev) => !prev)}
                  className={`
              relative px-4 py-1
              rounded-full
               ${isActive ? "bg-emerald-400" : "bg-red-600"}
              text-[12px]
            `}
                >
                  {isActive ? "Active" : "Inactive"}
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
                      className={`rounded-sm
                  bg-blue-500/20
                  px-1.5 py-[2px]
                  text-[8px]
                  font-bold ${isFeatured ? "text-blue-400" : "text-gray-200"}
                  `}
                    >
                      {isFeatured ? "Spotlight" : "Regular"}
                    </span>
                  </div>

                  <p className="mt-1 text-[9px] text-slate-500">
                    Pinned to storefront spotlight carousel
                  </p>
                </div>

                {/* Toggle */}
                <button
                  type="button"
                  onClick={() => setIsFeatured((prev) => !prev)}
                  className={`relative 
              rounded-full text-[12px] px-4 py-1 ${isFeatured ? "bg-emerald-400" : "bg-blue-600"}
              `}
                >
                  {isFeatured ? "Featured" : "Regular"}
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
                type="button"
                onClick={handleSubmit}
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

      {showImgPrevComp && (
        <>
          <div className="absolute inset-0 bg-black/30 flex justify-center items-center ">
            <div className="bg-gray-700 w-full md:w-md  p-5 rounded-xl border border-gray-700/60">
              <img
                src={URL.createObjectURL(image)}
                alt="Product preview"
                className="rounded-xl object-cover aspect-square"
              />

              {/* buttons */}
              <div className="flex items-center gap-2 mt-2 justify-end">
                {/* Accept */}
                <button
                  type="button"
                  className="
                  flex items-center gap-1.5
                  rounded-lg
                  bg-emerald-500
                  px-3 py-1.5
                  text-xs font-semibold
                  text-white
                  transition
                  hover:bg-emerald-600
                "
                  onClick={() => setShowImgPrevComp(false)}
                >
                  <Check size={14} strokeWidth={2.5} />
                  Accept
                </button>

                {/* Reject */}
                <button
                  type="button"
                  className="
                  flex items-center gap-1.5
                  rounded-lg
                  border border-red-500/30
                  bg-red-500/10
                  px-3 py-1.5
                  text-xs font-semibold
                  text-red-400
                  transition
                  hover:bg-red-500/20
                "
                  onClick={() => setImage(null)}
                >
                  <X size={14} strokeWidth={2.5} />
                  Reject
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default AdminAddProductForm;
