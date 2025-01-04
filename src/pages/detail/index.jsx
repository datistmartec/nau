import React, { useEffect } from "react";
import CookingIcon from "../../assets/images/cooking.png";
import ReactPlayer from "react-player";
import { useParams } from "react-router";
// import { allDishes } from "../home/data";
import axios from "axios";

const Datail = () => {
  let { id } = useParams();
  // const dish = allDishes[id];

  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5050/api/getMealById/${id}`)
      .then(function (res) {
        // handle success
        setData(res.data.response);
      })
      .catch(function (error) {
        // handle error
      })
      .finally(function () {
        // always executed
      });
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="p-6">
      <div className="flex gap-2 bg-blue-200 px-4 py-2 rounded-xl w-fit">
        <img src={CookingIcon} alt="" srcset="" className="w-12 h-12" />
        <p className="text-lg font-bold mt-2">Hướng dẫn nấu ăn</p>
      </div>
      <hr className="my-6" />
      <p className="text-4xl mb-6 font-bold text-center">{data?.name}</p>
      <div className="flex justify-center">
        <img
          src={data?.thumbnail}
          alt=""
          srcset=""
          className="w-[600px] h-[340px]"
        />
      </div>
      <p className="text-lg mb-6 font-bold">Hướng dẫn</p>
      {data?.tutorial?.map((item, idx) => (
        <p key={idx} className="mt-2">
          <b>{idx + 1}. </b>
          {item}
        </p>
      ))}
      <p className="text-lg my-6 font-bold">Hoặc xem video hướng dẫn</p>
      <div className="flex justify-center">
        <ReactPlayer url={data?.tutorialVd} />
      </div>
      <p className="text-lg mt-12 font-bold text-center">
        Chúc bạn và gia đình có một bữa ăn ngon miệng!
      </p>
    </div>
  );
};

export default Datail;
