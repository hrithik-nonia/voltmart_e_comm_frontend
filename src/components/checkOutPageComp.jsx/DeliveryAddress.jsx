const DeliveryAddress = () => {
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

      {/* Full Name */}
      <div className="mb-3">
        <label className="mb-1 block text-[12px] font-medium text-blue-200">
          Full Name
        </label>

        <input
          type="text"
          defaultValue="Alex Chen"
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
            defaultValue="+91 98450 19283"
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

      {/* Street Address */}
      <div className="mb-3">
        <label className="mb-1 block text-[12px] font-medium text-blue-200">
          Street Address
        </label>

        <input
          type="text"
          defaultValue="Flat 402, Cyber Residency, 4th Cross, Tech Corridor Phase II"
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
            defaultValue="Bengaluru"
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
            defaultValue="560103"
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
    </section>
  );
};

export default DeliveryAddress;
