import React from "react";
import { NavLink } from "react-router";
import Logo from "../../assets/images/serving-platter.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between w-full bg-lime-500 p-3">
        <div>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            <div className="flex">
              <img src={Logo} alt="" srcset="" className="w-12 h-12" />
              <p className="text-lg font-bold text-gray-700 hover:text-pink-950 mt-2 ml-2">
                Nấu
              </p>
            </div>
          </NavLink>
        </div>
        <div className="flex">
          <div className="mx-2">
            <NavLink
              to="/menu"
              className={({ isActive }) => (isActive ? "text-red-400" : "")}
            >
              <p className="text-lg font-bold text-gray-700 hover:text-pink-950 mt-2">
                Danh sách
              </p>
            </NavLink>
          </div>
          {/* <div className="mx-2">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-red-400" : "")}
            >
              <p className="text-lg font-bold text-gray-700 hover:text-pink-950 mt-2">
                Liên hệ
              </p>
            </NavLink>
          </div> */}
          <div className="mx-2">
            <NavLink
              to="/info"
              className={({ isActive }) => (isActive ? "text-red-400" : "")}
            >
              <p className="text-lg font-bold text-gray-700 hover:text-pink-950 mt-2">
                Thông tin
              </p>
            </NavLink>
          </div>
        </div>

        {/* <Link to="/concerts/salt-lake-city">Concerts</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
