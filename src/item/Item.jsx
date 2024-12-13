import React from "react";

function Item({
  id,
  name,
  description,
  color,
  price,
  rating,
  imageUrl,
}) {
  return (
    <div className="flex flex-col p-4 w-[150px] h-auto bg-white shadow-lg rounded-lg overflow-hidden ">
      <img
        src={imageUrl}
        className="w-full h-[120px] object-cover"
      ></img>
      <span className="font-semibold text-sm">{name}</span>
      <span className="font-thin grey text-gray-600 text-xs">
        {description}
      </span>
      <div className="mt-1 flex justify-between text-xs">
        <span>Color:</span>
        <span className="font-thin grey text-gray-600">
          {color}
        </span>
      </div>
      <div className="mt-1 flex justify-between text-xs">
        <span>Price:</span>
        <span className="font-thin grey text-gray-600 ">
          {price}
        </span>
      </div>
      <div className="mt-1 flex justify-between text-xs">
        <span>Rating:</span>
        <span className="font-thin grey text-gray-600 ">
          {rating}
        </span>
      </div>
    </div>
  );
}
export default React.memo(Item);
