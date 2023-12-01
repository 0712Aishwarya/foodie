import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./shimmer";
import { CDN_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { CartContext } from "../utils/cartContext";

const RestaurantDetails = () => {
  const { id,name } = useParams();

  const { addToCart } = useContext(CartContext);
  

  const menu_data = useRestaurantMenu(id);
  const dispatch = useDispatch();

  console.log("menu_data", menu_data);

  if (menu_data === null) return <Shimmer />;

  const itemCards =
    menu_data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;

  console.log("itemsCards", itemCards);

  function handleAddItem(item) {
    addToCart(item);

    // dispatch(addItem(item));
  }

  return (
    // <>
    // <h1>Restaurant Details</h1>
    // <h2>Restaurant Id: {id}</h2>
    // {itemCards.map((item)=>{
    //   return <h1>{item.card.info.name}</h1>;
    // })}
    // </>
    <div className="w-full bg-gray-100 p-4">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Restaurant Menu</h1>
      {/* <h2 className="text-xl mb-2">Restaurant Id: {id}</h2> */}
      <div className="grid grid-cols-1 gap-4">
        {itemCards.map((item, index) => (
          <div
            key={index}
            className="w-full bg-white p-4 rounded-lg shadow-md flex items-center justify-between transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center gap-4">
              <img
                src={CDN_IMG_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.card.info.name}</h3>
                <p className="text-gray-600">{item.card.info.description}</p>
                <div className="flex items-center mt-2 gap-40">
                  <span className="text-xl font-bold">
                   ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.name / 100}
                </span>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300 ease-in-out" 
                   onClick={() => handleAddItem(item)}>
                    Add+</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default RestaurantDetails;
