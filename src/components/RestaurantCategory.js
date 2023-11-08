import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  //accordian design
  const { data } = props;
  const [showItems,setShowItems] = useState(false);
  console.log(data);

  const handleClick = ()=>{
    console.log('click');
    setShowItems(!showItems);
  }
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4" onClick={handleClick}>
        {/**Header */}
        <div className="flex justify-between cursor-pointer">
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
