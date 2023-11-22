import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  // const {resName,cuisine} = props;
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    slaString,
    promoted,
  } = resData;
  return (
    <div data-testid="resCard" className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
      <h5>{promoted}</h5>
    </div>
  );
};

//Higher Order Component
//Input as the restaurant -card
//output - Restuarant-card promoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
