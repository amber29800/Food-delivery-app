import { useEffect, useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

function filterData(searchText, restaurants) {
  const data = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return data;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  /*
  useEffect
  --> empty dependency array => one time render
  --> dep array [searchText] => one after intial render + after everytime searchText changees
*/

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

  return (allRestaurants.length === 0) ? <Shimmer/> : (
    <>
      <input
        type="text"
        className="search-innput"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        className="search-btn"
        onClick={() => {
          const data = filterData(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>
      <div className="restaurant-card">
        {(filteredRestaurants?.length === 0) ? <h1>No restaurants found!!!</h1> : filteredRestaurants?.map((restaurant) => {
          return (
            <RestaurantCard restaurant={restaurant} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
