import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  MdOutlineCall,
  MdOutlineEmail,
  MdOutlineLocationOn,
} from "react-icons/md";

import logo from "../assets/footer/logo.svg";
import appStore from "../assets/footer/appstore.svg";
import googlePlay from "../assets/footer/googleplay.svg";
import applePay from "../assets/footer/applepay.svg";
import visa from "../assets/footer/visa.svg";
import paypal from "../assets/footer/paypal.svg";

const Footer = () => {
  return (
    <footer className="mt-[150px] bg-grey20">
      <div className="md:pt-16 md:pb-6 container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Logo and Download Section */}
          <div className="grid place-content-between">
            <Link to="/">
              <img
                className="xs:mb-8 md:mb-0 xs:w-[195px] md:w-[296px]"
                src={logo}
                alt="Fresh Harvests Logo"
              />
            </Link>

            {/* Download App */}
            <div className="xs:hidden lg:grid space-y-3">
              <p className="text-h7">Download App:</p>
              <div className="flex items-center gap-[19px]">
                <Link to="#">
                  <img
                    src={appStore}
                    alt="Download on App Store"
                    className="rounded"
                  />
                </Link>
                <Link to="#">
                  <img
                    src={googlePlay}
                    alt="Get it on Google Play"
                    className="rounded"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="xs:flex xs:gap-[14px] md:grid md:grid-cols-3 md:gap-0">
            {/* Quick Links 1 */}
            <div>
              <h6 className="mb-3 xs:text-h7 md:text-h6 text-nowrap">
                Quick links 1
              </h6>
              <ul className="grid gap-3">
                <li>
                  <Link
                    to="/"
                    className="text-grey100 hover:text-gray-900 xs:text-b4 md:text-b3"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="text-grey100 hover:text-gray-900 xs:text-b4 md:text-b3"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-grey100 hover:text-gray-900 xs:text-b4 md:text-b3"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-grey100 hover:text-gray-900 xs:text-b4 md:text-b3"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/detail-blog"
                    className="text-grey100 hover:text-gray-900 xs:text-b4 md:text-b3"
                  >
                    Detail Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links 2 */}
            <div>
              <h6 className="mb-3 xs:text-h7 md:text-h6 text-nowrap">
                Quick links 2
              </h6>
              <ul className="grid gap-3">
                <li>
                  <Link
                    to="/favorites"
                    className="text-grey100 hover:text-gray-900 xs:text-b4 md:text-b3"
                  >
                    Favorites
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cart"
                    className="text-grey100 hover:text-gray-900 xs:text-b4 md:text-b3"
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sign-in"
                    className="text-grey100 hover:text-gray-900 xs:text-b4 md:text-b3"
                  >
                    Sign in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="text-grey100 hover:text-gray-900 xs:text-b4 md:text-b3"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h6 className="mb-3 xs:text-h7 md:text-h6 text-nowrap">
                Contact us
              </h6>
              <div className="grid gap-3">
                <div className="flex items-center gap-1">
                  <MdOutlineCall className="text-xl" />
                  <p className="text-grey100 text-sm">1234 56 78 90</p>
                </div>
                <div className="flex items-center gap-1">
                  <MdOutlineEmail className="text-xl" />
                  <p className="text-grey100 text-sm">
                    Freshharvests@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <MdOutlineLocationOn className="text-xl" />
                  <p className="text-grey100 text-sm">
                    Tanjung Sari Street, Pontianak, Indonesia
                  </p>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="xs:hidden md:grid mt-[30px]">
                <p className="text-h7 mb-3">Accepted Payment Methods:</p>
                <div className="flex items-center gap-[10px]">
                  <img src={visa} alt="Visa" />
                  <img src={paypal} alt="PayPal" />
                  {/* <img src={applePay} alt="Apple Pay" /> */}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile version payment or apps sections */}
          <div className="grid gap-4">
            <div className="xs:grid md:hidden mt-[30px]">
              <p className="text-h7 mb-3">Accepted Payment Methods:</p>
              <div className="flex items-center gap-[10px]">
                <img src={visa} alt="Visa" />
                <img src={paypal} alt="PayPal" />
                <img src={applePay} alt="Apple Pay" />
              </div>
            </div>
            <div className="xs:grid md:hidden space-y-3">
              <p className="text-h7">Download App:</p>
              <div className="flex items-center gap-[19px]">
                <Link to="#">
                  <img
                    src={appStore}
                    alt="Download on App Store"
                    className="rounded"
                  />
                </Link>
                <Link to="#">
                  <img
                    src={googlePlay}
                    alt="Get it on Google Play"
                    className="rounded"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="xs:mt-6 md:mt-8 xs:pt-6 md:pt-8 border-t xs:mb-8 md:mb-0 border-gray-200">
          <div className="flex xs:flex-col-reverse xs:gap-6 md:gap-0 md:flex-row justify-between items-center">
            <p className="text-h7 text-black ">
              © Copyright 2024. All Rights Reserved by Banana Studio
            </p>
            <div className="flex space-x-4">
              <Link
                to="#"
                className="bg-black hover:bg-white p-2 text-white hover:text-black rounded-full transition-all duration-300 ease-in-out"
              >
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="bg-black hover:bg-white p-2 text-white hover:text-black rounded-full transition-all duration-300 ease-in-out"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="bg-black hover:bg-white p-2 text-white hover:text-black rounded-full transition-all duration-300 ease-in-out"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
