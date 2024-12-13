import React, { useState } from "react";
import { MIN, MAX } from "../utils";

function Range({ id, value, onChange }) {
  const [tempValue, setTempValue] = useState({
    min: value.min,
    max: value.max,
  });

  const handleInputChange = (e) => {
    const { name } = e.target;
    setTempValue({ ...tempValue, [name]: +e.target.value });

    if (name === "min") {
      const newMin = Math.min(
        value.max,
        Math.max(MIN, +e.target.value)
      );

      onChange({ ...value, [name]: newMin });
    }
    if (name === "max") {
      const newMax = Math.max(
        value.min,
        Math.min(MAX, +e.target.value)
      );
      onChange({ ...value, [name]: newMax });
    }
  };

  const handleBlur = () => {
    const { min, max } = value;
    setTempValue({ min, max });
  };
  return (
    <div className="space-y-2">
      <span className="text-sm font-semibold">{id}</span>
      <div className="flex flex-wrap items-center ">
        <input
          type="number"
          placeholder={MIN}
          value={tempValue.min}
          name="min"
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-16 border border-gray-300 rounded px-2 py-1 text-xs leading-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <span>-</span>
        <input
          type="number"
          placeholder={MAX}
          value={tempValue.max}
          name="max"
          onChange={handleInputChange}
          onBlur={handleBlur}
          className="w-16 border border-gray-300 rounded px-2 py-1 text-xs leading-none focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    </div>
  );
}

export default React.memo(Range);
