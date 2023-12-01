import { restaurants } from "../utils/restaurants";

const TopRatedRestaurants = (props) => {
  function getTopRatedRestaurants() {
    const topRatedRestaurants = props.filteredRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );

    props.topRatedRestaurants(topRatedRestaurants);

    console.log("top rated Restaurants", topRatedRestaurants);
  }

  return (
    <button
    className="relative z-[2] rounded-r border-2 border-primary bg-black px-6 py-2 text-xs text-white font-medium uppercase text-primary transition duration-150 ease-in-out hover:text-black hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
    onClick={getTopRatedRestaurants}
  >
    Top Rated Restaurants
  </button>
  
  );
};

export default TopRatedRestaurants;