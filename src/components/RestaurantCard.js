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
  } = resData?.info;
  return (
    <div
      className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
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
    </div>
  );
};

export default RestaurantCard;
