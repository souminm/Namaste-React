import { useState,useEffect } from "react";
import { RES_API } from "./constants";
const useShowRestaurants = () =>{
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  useEffect(()=>{
   fetchData();
  },[])
  const fetchData = async() =>{
   const data = await fetch(RES_API);
   const json = await data.json();


   let itemInfo =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
        (item) => item.info
      );

    itemInfo = itemInfo.map((item) => {
      if (item.avgRatingString > "4.3") {
        return { ...item, promoted: true };
      } else {
        return { ...item, promoted: false };
      }
    });
    setListOfRestaurants(itemInfo);
  }
  return listOfRestaurants;
}

export default useShowRestaurants;