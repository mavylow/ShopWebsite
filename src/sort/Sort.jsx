import React, { useCallback, useState } from "react";

function Sort({ options, onChange }) {
  const [sort, setSort] = useState("popular");

  const handleClickSort = useCallback((e) => {
    const { name } = e.target;
    setSort(name);
    onChange(name);
  }, []);

  return (
    <div className="font-light  space-x-1 m-1 flex">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={handleClickSort}
          name={option.name}
          className={`${
            option.name === sort
              ? "bg-gray-400 text-white"
              : "bg-gray-200 hover:bg-gray-400"
          } text-xs py-0.5 px-3 rounded-md text-black font-medium`}
        >
          {option.id}
        </button>
      ))}
    </div>
  );
}
export default React.memo(Sort);
