import React, { useState, useEffect } from "react";

function Search({ value, onChange }) {
  const handleSearchChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="w-full p-0">
      <input
        type="search"
        value={value}
        placeholder="Search"
        onChange={handleSearchChange}
        className="w-full border-2 border-gray-300 p-1 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-slate-500"
      ></input>
    </div>
  );
}
export default React.memo(Search);
