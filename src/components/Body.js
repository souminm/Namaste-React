import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

// let data = [
//   {
//     info: {
//       id: "5938",
//       name: "Burger King",
//       cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
//       locality: "Tasker Town",
//       areaName: "Shivaji Nagar",
//       costForTwo: "₹350 for two",
//       cuisines: ["Burgers", "American"],
//       avgRating: 4.1,
//       parentId: "166",
//       avgRatingString: "4.1",
//       totalRatingsString: "10K+",
//     },
//   },
//   {
//     info: {
//       id: "43836",
//       name: "McDonald's",
//       cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
//       locality: "MG Road",
//       areaName: "Ashok Nagar",
//       costForTwo: "₹400 for two",
//       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
//       avgRating: 3.8,
//       parentId: "630",
//       avgRatingString: "3.8",
//       totalRatingsString: "10K+",
//     },
//   },
// ];

// console.log(data, "data");
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
//   console.log(listOfRestaurants, "list");
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("button clicked");
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRatingString > 4.4
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants, "filteredList");  // 20 why not 7?
            // console.log(data, "filtered List");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} /> */}
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
