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
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
        // border: "1px solid black",
      }}
    >
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-img"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
