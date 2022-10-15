import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { ReactSession } from "react-client-session";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const fname = ReactSession.get("firstName");
  const lname = ReactSession.get("lastName");
  const auth = useAuth();
  return (
    <nav className="sticky top-0 z-50 bg-gray-800 h-[50px] flex justify-between  text-white">
      <div className="pl-[10px] pt-[10px] flex gap-x-2 items-center">
        <FaYoutube className="text-red-600 " size={30} /> Home
      </div>
      <div className="items-center mt-3">
        <Link
          to="create"
          className="p-1  rounded-lg bg-blue-600 w-[100px] font-sans font-semibold"
        >
          Create Post
        </Link>
      </div>
      <div className="pr-[10px] pt-[15px] relative z-[100]">
        <div
          className="flex items-center gap-x-[10px] cursor-pointer"
          onClick={() => {
            setToggle((prev) => setToggle(!prev));
          }}
        >
          <p> {fname} {lname}</p>
          <FaAngleDown />
        </div>
        <div
          className={
            toggle == false
              ? `hidden`
              : "absolute right-[5px] top-[52px] rounded-xl bg-gray-300 w-[200px] text-blue-600 h-auto shadow-lg p-[10px] "
          }
        >
          <p className="flex items-center gap-x-2">
            <FaRegSun /> Settings
          </p>

          <Link
            to="/create"
            relative="path"
            className="flex items-center gap-x-2 cursor-pointer"
          >
            <FaRegUser /> Create Post
          </Link>
          <p className="flex items-center gap-x-2">
            <FaRegUser /> Profile
          </p>

          <Link
            to="/login"
            relative="path"
            className="flex items-center gap-x-2 cursor-pointer"
          >
            <FaSignOutAlt /> Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
