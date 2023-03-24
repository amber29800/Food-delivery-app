import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { swiggy_menu_api_URL } from "./../config";
import Shimmer from "./Shimmer";

const ResaturantMenu = () => {
  const { resId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  //   restaurant?.data?.cards[0]?.card?.card?.info?.id
  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${resId}&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-page\" key={restaurant.id}>
      <div className="restaurant-info">
        <h1>Restaurnat id: {resId}</h1>
        <h1>Meghana foods</h1>
        <img
          alt="Logo"
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card.card?.info?.cloudinaryImageId
          }
        />
        <h3>{restaurant?.cards[0]?.card.card?.info?.areaName}</h3>
        <h3>{restaurant?.cards[0]?.card.card?.info?.city}</h3>
        <h3>{restaurant?.cards[0]?.card.card?.info?.cuisines.join(", ")}</h3>
        <h3>{restaurant?.cards[0]?.card.card?.info?.costForTwoMessage}</h3>
      </div>
      <div className="restaurant-menu">
        
      </div>
    </div>
  );
};

export default ResaturantMenu;
