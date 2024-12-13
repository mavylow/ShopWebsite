import React from "react";
import Item from "../item/Item";

function ShopList({ items }) {
  return (
    <div className="flex flex-wrap gap-4 overflow-y-scroll h-[75vh] justify-center ">
      {items.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ShopList;
