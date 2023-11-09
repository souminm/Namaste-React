import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  //accordian design
  const { data, showItems, setShowIndex, setToggleOnOff } = props;

  const handleClick = () => {
    setShowIndex();
    setToggleOnOff();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {/**Header */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {/**body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
