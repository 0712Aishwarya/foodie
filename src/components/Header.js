import { useOnline } from "../utils/useOnline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { CartContext } from "../utils/cartContext";




const Header = () => {
  const onlineStatus = useOnline();
  const cartItems = useSelector((store) => store.cart.items);
  const {loggedInUser} = useContext(userContext);
  const { cart } = useContext(CartContext);
  console.log("cart", cart);

  console.log("logged", loggedInUser);
    return (
        <div className="navbar">
      <div className="w-24 h-28">
            <img src="https://th.bing.com/th/id/OIP.Ksq4e8KE5SCNUHREvciLlwHaG0?pid=ImgDet&rs=1" />
            </div>
            <ul className="flex items-center">
        <li>OnlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
        <li className="list-none m-2">
          <Link to="/">Home</Link>
        </li>
        <li className="list-none m-2">
          <Link to="/about">AboutUs</Link>
        </li>
        <li className="list-none m-2">
          <Link to="/contact">ContactUs</Link>
        </li>
        <li className="list-none m-2">
          <Link to="/cart">Cart - {cart.length} items</Link>
        </li>
        <li className="px-4">
        <span role="img" aria-label="profile icon" style={{ color: 'white' }}>👤</span>{loggedInUser}
</li>
      </ul>
        </div>
    );
};
export default Header;