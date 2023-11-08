import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useShowRestaurants from "../utils/useShowRestaurants";

const Body = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantPromotedCard = withPromotedLabel(RestaurantCard);
  const listOfRestaurants = useShowRestaurants();
 

  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus == false)
    return (
      <h1>
        Looks like you are offline currently pls check your internet
        connection!!
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
                res.name.toLowerCase().includes(searchText.toLowerCase())
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
                (res) => res.avgRatingString > 4.4
              );
              setFilteredRestaurant(filteredList);
              console.log(filteredRestaurant, "filteredList"); // 20 why not 7?
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap break-words p-2 m-2">
        {(filteredRestaurant.length === 0
          ? listOfRestaurants
          : filteredRestaurant
        ).map((res) => (
          <Link key={res.id} to={"/restaurant/" + res.id}>
            {
              /**if the restaurant is promoted then add a promoted label to it */
              res.promoted === true ? (
                <RestaurantPromotedCard resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
