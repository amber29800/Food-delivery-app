import { IMG_CDN_URL } from "../config";

const RestaurantCard = (props) => {
    return (
      <div className="card">
        <img src={IMG_CDN_URL + props.restaurant.data?.cloudinaryImageId} />
        <h2>{props.restaurant.data?.name}</h2>
        <h4>{props.restaurant.data?.cuisines.join(", ")}</h4>
        <h4>{props.restaurant.data?.lastMileTravelString}</h4>
      </div>
    );
  };

  export default RestaurantCard;