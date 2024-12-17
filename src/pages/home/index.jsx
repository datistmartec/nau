import React from "react";
import Banner from "../../components/banner";
import Card from "../../components/card";
import LoveIcon from "../../assets/images/love.png";
import FishIcon from "../../assets/images/fish-and-chips.png";
import MeatIcon from "../../assets/images/steak.png";
import MenuIcon from "../../assets/images/order-food.png";
import { useNavigate } from "react-router-dom";

import { allDishes } from "./data";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Banner />
      <div className="p-8">
        <div className="flex gap-4">
          <div className="flex gap-2 bg-blue-200 px-4 py-2 rounded-xl w-fit">
            <img src={LoveIcon} alt="" srcset="" className="w-12 h-12" />
            <p className="text-lg font-bold mt-2">Món ăn yêu thích</p>
          </div>
          <div
            className="flex gap-2 bg-blue-200 px-4 py-2 rounded-xl w-fit cursor-pointer hover:bg-blue-300"
            onClick={() => {
              navigate("/menu");
            }}
          >
            <img src={MenuIcon} alt="" srcset="" className="w-12 h-12" />
            <p className="text-lg font-bold mt-2">Xem danh sách món</p>
          </div>
        </div>
        <div className="mt-6 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16">
          {allDishes.slice(0,4)?.map((item, idx) => (
            <Card idx={idx} key={idx} item={item} />
          ))}
        </div>
        <hr className="mt-12" />
        <div className="flex gap-4 mt-10">
          <div className="flex gap-2 bg-blue-200 px-4 py-2 rounded-xl w-fit">
            <img src={FishIcon} alt="" srcset="" className="w-12 h-12" />
            <p className="text-lg font-bold mt-2">Món cá</p>
          </div>
          <div
            className="flex gap-2 bg-blue-200 px-4 py-2 rounded-xl w-fit cursor-pointer hover:bg-blue-300"
            onClick={() => {
              navigate("/menu");
            }}
          >
            <img src={MenuIcon} alt="" srcset="" className="w-12 h-12" />
            <p className="text-lg font-bold mt-2">Xem danh sách món</p>
          </div>
        </div>
        <div className="mt-6 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16">
          {allDishes.filter((ds) => ds.type === "Cá").slice(0,4)?.map((item, idx) => (
            <Card idx={idx} key={idx} item={item} bg={"bg-orange-200"} />
          ))}
        </div>
        <hr className="mt-12" />
        <div className="flex gap-4 mt-10">
          <div className="flex gap-2 bg-blue-200 px-4 py-2 rounded-xl w-fit">
            <img src={MeatIcon} alt="" srcset="" className="w-12 h-12" />
            <p className="text-lg font-bold mt-2">Món thịt</p>
          </div>
          <div
            className="flex gap-2 bg-blue-200 px-4 py-2 rounded-xl w-fit cursor-pointer hover:bg-blue-300"
            onClick={() => {
              navigate("/menu");
            }}
          >
            <img src={MenuIcon} alt="" srcset="" className="w-12 h-12" />
            <p className="text-lg font-bold mt-2">Xem danh sách món</p>
          </div>
        </div>
        <div className="mt-6 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16">
          {allDishes.filter((ds) => ds.type === "Thịt").slice(0,4)?.map((item, idx) => (
            <Card idx={idx} key={idx} item={item} bg={"bg-yellow-200"} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;