import React, { useEffect, useState } from "react";
import SearchIcon from "../../assets/images/search.png";
import { allDishes } from "../home/data";
import Card from "../../components/card";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [listDishes, setListDishes] = useState(allDishes);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFilter = (val) => {
    const filtered = val
      ? allDishes.filter((ds) => ds.type === val)
      : allDishes;
    setListDishes(filtered);
    setFilter(val);
  };

  const handleSearch = () => {
    const filtered = filter
      ? allDishes.filter((ds) => ds.type === filter)
      : allDishes;
    console.log("filtered: ", filtered);
    const result = filtered?.filter((ds) =>
      ds?.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
    setListDishes(result);
  };

  const handleChange = (val) => {
    if (!val) {
      setSearch(val);
      const filtered = filter
        ? allDishes.filter((ds) => ds.type === filter)
        : allDishes;
      setListDishes(filtered);
    } else {
      setSearch(val);
    }
  };

  return (
    <div className="p-6">
      <div className="flex">
        <select
          name="meal"
          id="meal"
          className="border border-sky-500 p-2 rounded w-[200px] outline-none mr-4"
          value={filter}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="">Tất cả</option>
          <option value="Cá">Món cá</option>
          <option value="Thịt">Món thịt</option>
          <option value="Rau">Món rau</option>
          <option value="Nước">Món nước</option>
          <option value="Khác">Khác</option>
        </select>
        <div className="flex justify-between border border-sky-500 p-2 rounded max-w-[400px] min-w-[100px]">
          <input
            type="text"
            placeholder="Tìm kiếm món ăn"
            className="outline-none w-[350px]"
            value={search}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
          <img
            src={SearchIcon}
            alt=""
            srcset=""
            className="w-6 h-6 cursor-pointer mt-[2px] ml-2"
            onClick={handleSearch}
          />
        </div>
      </div>
      <hr className="my-6" />
      {listDishes?.length ? (
        <div className="mt-6 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-16">
          {listDishes.map((item, idx) => (
            <Card item={item} key={idx} idx={idx} />
          ))}
        </div>
      ) : (
        <div className="text-center" style={{ height: "calc(100vh - 410px)"}}>
          <p className="text-lg my-3">
            Xin lỗi, hiện tại món ăn này chưa được cập nhật vào hệ thống hướng
            dẫn nấu ăn.
          </p>
          <p>Chúng tôi sẽ cập nhật thêm món này sớm thôi!</p>
        </div>
      )}
    </div>
  );
};

export default Menu;
