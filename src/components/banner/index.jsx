import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
        <div className="w-full h-[300px]">
          <img alt="" src="https://img.freepik.com/free-photo/top-view-delicious-food-frame_23-2149182208.jpg" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className="w-full h-[300px]">
          <img alt="" src="https://img.freepik.com/free-photo/flat-lay-plastic-casseroles-with-meals-copy-space_23-2148487769.jpg" />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div className="w-full h-[300px]">
          <img alt="" src="https://luxfordnutrition.com/wp-content/uploads/2023/08/Cutting-board-and-various-bowls-with-chopped-vegetables-next-to-glass-food-storage-containers-with-pre-prepared-meals-Types-of-meal-planning-1024x536.jpg" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div className="w-full h-[300px]">
          <img alt="" src="https://i.pinimg.com/736x/1b/06/03/1b0603b4d8725f58ac6ca7e13edc1a12.jpg" />
        </div>
        <div className="w-full h-[300px]">
          <img alt="" src="https://img.freepik.com/free-photo/top-view-arrangement-healthy-food_23-2148484617.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
