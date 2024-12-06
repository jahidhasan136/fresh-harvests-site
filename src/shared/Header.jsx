import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaHeart, FaBars } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

const Header = () => {
  return (
    <>
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
          <div className="lg:flex items-center lg:gap-10 xl:gap-16 text-b3 xs:hidden">
            <Link to="/">Home</Link>
            <Link to="#">Shop</Link>
            <Link to="#">About us</Link>
            <Link to="#">Blog</Link>
          </div>
          {/* product mange and auth */}
          <div className="xs:hidden md:flex items-center gap-5 text-white">
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

          {/* mobile version cart or 3bars */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <IoMdCart className="text-white text-2xl" />
              <p className="absolute -top-2 -right-1 rounded-full text-white w-4 h-4 bg-[#EE4536] text-xs text-center">
                3
              </p>
            </div>
            <FaBars className="text-white text-2xl" />
          </div>
        </div>
      </header>

      {/* mobile version */}
    </>
  );
};

export default Header;
