import React from "react";
import ReactStars from "react-stars";
import { useNavigate } from "react-router-dom";

const Card = ({ item, bg, idx }) => {
  const navidate = useNavigate();

  return (
    <div onClick={() => { navidate(`/detail/${idx}`) }} className={`min-w-[250px] h-[120px] ${bg ? bg : "bg-green-200"} rounded-md relative shadow-lg shadow-slate-300 hover:scale-105 duration-300 cursor-pointer`}>
      <div className="w-[86px] h-[86px] rounded-[43px] bg-slate-300 absolute top-[-15px] left-[-15px] shadow-lg shadow-slate-300">
        <img
          src={item.thumbnail}
          alt="hi"
          srcset=""
          className="w-[86px] h-[86px] rounded-[43px] shadow-lg shadow-slate-300"
        />
      </div>
      <div className="ml-[83px] pt-2">
        <p className="font-bold pr-1">{item.name}</p>
        <p class="line-clamp-2 text-sm pr-1">{item.description}</p>
      </div>
      <div className="absolute bottom-1 left-2 flex">
        <p className="text-sm">Đánh giá:</p>
        <div className="mt-[-6px] ml-2">
          <ReactStars
            count={5}
            value={item.rating}
            onChange={() => null}
            edit={false}
            size={20}
            color2={"#ffd700"}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
