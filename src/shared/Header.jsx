import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

const Header = () => {
  return (
    <header className="container py-[30px]">
      <div className="flex items-center justify-between">
        {/* logo image */}
        <div>
          <Link to="/">
            <img
              className="cursor-pointer"
              src={logo}
              alt="Fresh Harvests Logo"
            />
          </Link>
        </div>
        {/* headers link */}
        <div className="flex items-center gap-16 text-b3">
          <Link to="/">Home</Link>
          <Link to="#">Shop</Link>
          <Link to="#">About us</Link>
          <Link to="#">Blog</Link>
        </div>
        {/* product mange and auth */}
        <div className="flex items-center gap-5 text-white">
          <div className="flex items-center gap-2">
            <FaHeart className="text-2xl" />
            <p className="text-b3">Favorites</p>
          </div>
          <div className="flex items-center gap-2">
            <IoMdCart className="text-2xl" />
            <p className="text-b3">Cart</p>
          </div>
          {/* button*/}
          <div className="border border-solid rounded">
            <button className="py-3 px-6 button3">Sign in</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
