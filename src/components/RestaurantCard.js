import { IMG_CDN_URL } from "../config";

const RestaurantCard = (props) => {
    return (
      <div className="card">
        <img className = "restaurant-img" src={IMG_CDN_URL + props.restaurant.data?.cloudinaryImageId} />
        <div className="restaurant-name-card">{props.restaurant.data?.name}</div>
        <div className="restaurant-cuisines-card">{props.restaurant.data?.cuisines.join(", ")}</div>
        <div className="restaurant-distance-card">{props.restaurant.data?.lastMileTravelString}</div>
      </div>
    );
  };

  export default RestaurantCard;