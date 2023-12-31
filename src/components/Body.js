import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import TopRatedRestaurants from "./TopRatedRestaurants";
import Shimmer from "./shimmer";
import { useOnline } from "../utils/useOnline";
import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const { loggedInuser, setUserName } = useContext(userContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const response = await data.json();

    // optional chaining

    console.log(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setFilteredRestaurants(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setAllRestaurants(
      response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  const online = useOnline();

  if (!online) {
    return <h1>Please check your Internet Connection</h1>;
  }

  function filterRestaurants() {
    const filteredData = allRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRestaurants(filteredData);
  }

  function filterTopRatedRestaurants(restaurants) {
    setFilteredRestaurants(restaurants);
  }

  return (
    <>
 <div class=" m-5 flex items-center justify-center">
  <div class="search-bar relative mb-4 flex items-center w-full">
    <input
      type="search"
      class="relative m-0 -mr-0.5 block  min-w-0 flex-none rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search"
      aria-label="Search"
      aria-describedby="button-addon3"
      onChange={(e) => setSearchText(e.target.value)}
    />
<button
  className="relative z-[2] rounded-r border-2 border-primary bg-black px-6 py-2 text-xs font-medium uppercase text-white transition duration-150 ease-in-out hover:text-black hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
  type="button"
  id="button-addon3"
  onClick={filterRestaurants}
>
  Search
</button>

<TopRatedRestaurants
  topRatedRestaurants={filterTopRatedRestaurants}
  filteredRestaurants={filteredRestaurants}
  className="flex-none w-40 md:w-2/5"
/>

<input className="border border-black"onChange={(e)=>setUserName(e.target.value)}></input>

    {/* Additional elements can be added here */}
  </div>
</div>




      {filteredRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-cards">
          {filteredRestaurants.map((restaurant) => (
            <Link to={`/restaurant/${restaurant.info.id}`}>
              <RestaurantCard
                key={restaurant.info.id}
                details={restaurant.info}
              />
            </Link>
          ))}
        </div>
       )} 
    </>
  );
};

export default Body;
