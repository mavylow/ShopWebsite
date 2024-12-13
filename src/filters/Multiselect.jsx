import React, { useState } from "react";
import Chance from "chance";
var chance = new Chance();

function Multiselect({ id, option, onChange }) {
  const [selected, setSelected] = useState([]);

  const handleChoseColor = (e) => {
    const { name } = e.target;
    const newSelected = selected.includes(name)
      ? selected.filter((select) => select !== name)
      : [...selected, name];

    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <ul className="Multiselect space-y-1 ">
      <span className="block text-sm font-semibold mb-1">
        {id}
      </span>
      {option.map((color) => (
        <li
          key={chance.hammertime()}
          className="flex items-center space-x-2 mx-1"
        >
          <input
            type="checkbox"
            name={color}
            onChange={handleChoseColor}
            checked={selected.includes(color)}
            className="h-4 w-4 rounded checked:bg-gray-400 border-gray-300 focus:ring-2 focus:ring-gray-400"
          ></input>
          <span className="text-xs text-gray-700">
            {color}
          </span>
        </li>
      ))}
    </ul>
  );
}
export default React.memo(Multiselect);
