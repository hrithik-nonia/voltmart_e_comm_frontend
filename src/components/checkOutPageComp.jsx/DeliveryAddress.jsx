import { useState } from "react";

const DeliveryAddress = () => {
  const initialFormData = {
    fullName: "",
    phoneNum: "",
    streetAddress: "",
    city: "",
    state: "",
    pinCode: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // check phone number format
  const checkPhoneNumFormat = (num) => {
    const phoneRegex = /^[6-9]\d{9}$/;

    if (phoneRegex.test(num)) {
      return true;
    } else {
      console.log("Invalid phone number");
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.phoneNum) {
      const isValidPhone = checkPhoneNumFormat(formData.phoneNum);

      if (!isValidPhone) {
        return;
      }
    }

    console.log(formData);
  };
  return (
    <section className="rounded-lg bg-[#1b263b] p-5">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="text-[12px] text-blue-500">●</span>

          <h2 className="text-[15px] font-bold tracking-wide text-blue-400">
            DELIVERY ADDRESS
          </h2>
        </div>
      </div>

      <form action="" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div className="mb-3">
          <label className="mb-1 block text-[12px] font-medium text-blue-200">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Full Name"
            required
            minLength={1}
            maxLength={100}
            className="
            py-2.5 w-full rounded-md
            border border-[#2d3a52]
            bg-[#0b1427]
            px-3
            text-[10px] font-medium text-white
            outline-none
            transition
            focus:border-blue-500
          "
          />
        </div>

        {/* Phone Number */}
        <div className="mb-3">
          <label className="mb-1 block text-[12px] font-medium text-blue-200">
            Phone Number
          </label>

          <div className="relative">
            <input
              type="tel"
              name="phoneNum"
              value={formData.phoneNum}
              onChange={handleChange}
              required
              placeholder="Enter Phone Number"
              className="
              py-2.5 w-full rounded-md
              border border-[#2d3a52]
              bg-[#0b1427]
              px-3 pr-16
              text-[10px] font-medium text-white
              outline-none
              focus:border-blue-500
            "
            />
          </div>
        </div>

        {/* state */}
        <div className="mb-3">
          <label className="mb-1 block text-[12px] font-medium text-blue-200">
            State
          </label>

          <input
            type="text"
            name="state"
            value={formData.state}
            placeholder="Enter State"
            required
            minLength={2}
            maxLength={100}
            onChange={handleChange}
            className="
            py-2.5 w-full rounded-md
            border border-[#2d3a52]
            bg-[#0b1427]
            px-3
            text-[10px] font-medium text-white
            outline-none
            focus:border-blue-500
          "
          />
        </div>

        {/* Street Address */}
        <div className="mb-3">
          <label className="mb-1 block text-[12px] font-medium text-blue-200">
            Street Address
          </label>

          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            placeholder="Enter Street Address"
            required
            minLength={1}
            maxLength={100}
            onChange={handleChange}
            className="
            py-2.5 w-full rounded-md
            border border-[#2d3a52]
            bg-[#0b1427]
            px-3
            text-[10px] font-medium text-white
            outline-none
            focus:border-blue-500
          "
          />
        </div>

        {/* City + Pincode */}
        <div className="grid grid-cols-2 gap-3">
          {/* City */}
          <div>
            <label className="mb-1 block text-[12px] font-medium text-blue-200">
              City
            </label>

            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter City"
              required
              minLength={2}
              maxLength={100}
              className="
              py-2.5 w-full rounded-md
              border border-[#2d3a52]
              bg-[#0b1427]
              px-3
              text-[10px] font-medium text-white
              outline-none
              focus:border-blue-500
            "
            />
          </div>

          {/* Pincode */}
          <div>
            <label className="mb-1 block text-[12px] font-medium text-blue-200">
              Pincode
            </label>

            <input
              type="text"
              name="pinCode"
              onChange={handleChange}
              value={formData.pinCode}
              required
              minLength={6}
              maxLength={6}
              placeholder="Enter PIN Code"
              className="
              py-2.5 w-full rounded-md
              border border-[#2d3a52]
              bg-[#0b1427]
              px-3
              text-[10px] font-medium text-white
              outline-none
              focus:border-blue-500
            "
            />
          </div>
        </div>

        <button type="submit">handleSubmit</button>
      </form>
    </section>
  );
};

export default DeliveryAddress;
