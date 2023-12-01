import { CDN_IMG_URL } from "../utils/constants";
// import { useContext } from "react";
// import userContext from "../utils/userContext";

const RestaurantCard = (props) => {
  // Object destructuring
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    props.details;

  // console.log("user context", userContext);

  // const loggedInUser = useContext(userContext);

  // console.log("context", loggedInUser);

  // template literals

  return (
    <div className="restaurant-card bg-gray-100 rounded-lg overflow-hidden ">
      <img
        className="rounded-lg"
        src={`${CDN_IMG_URL}${cloudinaryImageId}`}
        alt={name}
      />
      
      <div className="restaurant-details flex">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold overflow-hidden overflow-ellipsis">{name}</h2>
          <h3 className="text-sm text-gray-500 overflow-hidden overflow-ellipsis">{cuisines}</h3>
        </div>
        
        <div className="flex flex-col items-end w-30">
          <div className="rating flex items-center">
            <svg
              className="w-4 h-4 text-white-500 fill-current mr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 0L12.2454 6.87784H19.4909L13.1227 11.2251L15.3681 18.1029L10 13.7557L4.63186 18.1029L6.87728 11.2251L0.509084 6.87784H7.75459L10 0Z" />
            </svg>
            <h3 className=" text-sm font-semibold">{avgRating}</h3>
          </div>
          
          <h3 className="text-sm text-gray-500">{costForTwo}</h3>
        </div>
      </div>
    </div>
  );
  
};

export default RestaurantCard;
