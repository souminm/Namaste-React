import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  //   console.log(listOfRestaurants, "list");
  console.log("body");
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json, "json");
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer/>;
  // }
  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus == false)
    return (
      <h1>
        Looks like you are offline currenly pls check your internet connection
      </h1>
    );
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex p-4">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              //  const filteredData =listOfRestaurants.filter((res)=> res.info?.name.toLowerCase().includes(searchText.toLowerCase()))
              //  setFilteredRestaurant(filteredData);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              //filter by restaurant card and render the ui
              //searchText
              console.log(searchText);
              const filteredData = listOfRestaurants.filter((res) =>
                res.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredData);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              // console.log("button clicked");
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRatingString > 4.4
              );
              setFilteredRestaurant(filteredList);
              console.log(filteredRestaurant, "filteredList"); // 20 why not 7?
              // console.log(data, "filtered List");
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap break-words p-2 m-2">
        {/* <RestaurantCard resData={resList[0]} /> */}
        {filteredRestaurant.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            <RestaurantCard resData={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
