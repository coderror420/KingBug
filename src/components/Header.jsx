import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import UserContext from "../utils/userContext";
import useonlinestatus from "../utils/useonlinestatus";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export const Header = () => {
  

  const onlinestatus = useonlinestatus();
  // const {loggedInUser}=useContext(UserContext);
  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between shadow-lg bg-white ">
      <div className="flex justify-between rounded-full items-center">
        <img src={LOGO_URL} className="w-[100px]" />
        <h1 className="text-2xl font-bold text-black">KINGBUG</h1>
      </div>
      <div className="flex items-center">
        <ul className="flex justify-end gap-4 flex-wrap p-4 m-4 ">
          <li className="text-black font-semibold">
            Online Status : {onlinestatus ? "🟢" : "🔴"}
          </li>
          <li className=" text-black font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="flex text-black font-semibold">
            <div className="m-1 text-xl text-yellow-700">
              <BiSolidOffer />
            </div>
            <Link to="/about">Debug</Link>
          </li>
          <li className="text-black font-semibold">
            <Link to="/contact">Contact Us</Link>
          </li>
          <div className="relative text-black font-semibold">
            {cartItems.length != 0 && (
              <label className=" absolute z-10 bg-red-600 w-4 h-4 mx-4 text-center font-bold text-xs text-white rounded-full">
                {cartItems.length}
              </label>
            )}
            <li className="text-2xl">
              <Link to="/cart">
                <RiShoppingBag2Fill />
              </Link>
            </li>
          </div>

          <button
            className=" flex font-semibold text-black "
          ><Link> <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn></Link>
           
           
          </button>
          {/* <li className=""><Link to="/">{loggedInUser}</Link></li> */}
        </ul>
      </div>
    </div>
  );
};

// {islogin?"Login":"Logout"}
