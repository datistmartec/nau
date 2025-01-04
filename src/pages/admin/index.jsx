import React, { useEffect } from "react";
import "./style.css";
import Modal from "react-modal";
import ReactStars from "react-stars";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import TrashIcon from "../../assets/images/trash-bin.png";
import EditIcon from "../../assets/images/pencil.png";
import LoginRegister from "./login";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 8,
    width: 750,
    padding: 30,
  },
};

const Admin = () => {
  const [isOpenAddUpdate, setIsOpenAddUpdate] = React.useState(false);
  const [isOpenDelete, setIsOpenDelete] = React.useState(false);
  const [name, setName] = React.useState("");
  const [thumbnail, setThumbnail] = React.useState("");
  const [video, setVideo] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [tutorial1, setTutorial1] = React.useState("");
  const [tutorial2, setTutorial2] = React.useState("");
  const [tutorial3, setTutorial3] = React.useState("");
  const [tutorial4, setTutorial4] = React.useState("");
  const [tutorial5, setTutorial5] = React.useState("");
  const [type, setType] = React.useState("");
  const [rate, setRate] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [itemSelected, setItemSelected] = React.useState(null);
  const [isLogIn, setIsLogIn] = React.useState(
    localStorage.getItem("isLoggedIn") !== "true" ? false : true
  );

  const openAddModal = () => {
    setIsOpenAddUpdate(true);
  };

  const openDeleteModal = () => {
    setIsOpenDelete(true);
  };

  const closeModal = () => {
    setItemSelected(null);
    setIsOpenAddUpdate(false);
    setIsOpenDelete(false);
    setName("");
    setThumbnail("");
    setVideo("");
    setDesc("");
    setTutorial1("");
    setTutorial2("");
    setTutorial3("");
    setTutorial4("");
    setTutorial5("");
    setType("");
    setRate(0);
  };

  const ratingChanged = (newRating) => {
    setRate(newRating);
  };

  const onAddUpdateMeal = () => {
    const payload = {
      name: name,
      tutorial: [tutorial1, tutorial2, tutorial3, tutorial4, tutorial5],
      description: desc,
      tutorialVd: video,
      thumbnail: thumbnail,
      type: type,
      rating: rate,
    };
    if (itemSelected) {
      axios
        .patch(
          `http://localhost:5050/api/editMeal/${itemSelected?._id}`,
          payload
        )
        .then(function (response) {
          setIsOpenAddUpdate(false);
          toast.success("Cập nhật món thành công.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          getListMeal();
        })
        .catch(function (error) {
          setIsOpenAddUpdate(false);
          toast.error("Lỗi hệ thống. Vui lòng thử lại sau.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    } else {
      axios
        .post("http://localhost:5050/api/addMeal", payload)
        .then(function (response) {
          setIsOpenAddUpdate(false);
          toast.success("Thêm món mới thành công.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          getListMeal();
        })
        .catch(function (error) {
          setIsOpenAddUpdate(false);
          toast.error("Lỗi hệ thống. Vui lòng thử lại sau.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    }
  };

  const handleDeleteMeal = () => {
    axios
      .delete(`http://localhost:5050/api/removeMeal/${itemSelected?._id}`)
      .then((response) => {
        getListMeal();
        setIsOpenDelete(false);
        toast.success("Xóa món thành công.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        setIsOpenDelete(false);
        console.error(error);
      });
  };

  const getListMeal = () => {
    axios
      .get("http://localhost:5050/api/getMeal")
      .then(function (res) {
        // handle success
        setData(res.data.meal);
      })
      .catch(function (error) {
        // handle error
      })
      .finally(function () {
        // always executed
      });
  };

  const handleLogOut = () => {
    localStorage.clear();
    setIsLogIn(false);
  };

  useEffect(() => {
    getListMeal();
  }, []);

  useEffect(() => {
    if (itemSelected) {
      setName(itemSelected?.name);
      setThumbnail(itemSelected?.thumbnail);
      setVideo(itemSelected?.tutorialVd);
      setDesc(itemSelected?.description);
      setTutorial1(itemSelected?.tutorial[0]);
      setTutorial2(itemSelected?.tutorial[1]);
      setTutorial3(itemSelected?.tutorial[2]);
      setTutorial4(itemSelected?.tutorial[3]);
      setTutorial5(itemSelected?.tutorial[4]);
      setType(itemSelected?.type);
      setRate(itemSelected?.rating);
    }
  }, [itemSelected]);

  useEffect(() => {
    console.log(
      'localStorage.getItem("isLoggedIn"): ',
      localStorage.getItem("isLoggedIn")
    );
  }, [localStorage.getItem("isLoggedIn"), isLogIn]);

  return (
    <div>
      {!isLogIn ? (
        <LoginRegister setIsLogIn={setIsLogIn} />
      ) : (
        <div>
          {isLogIn && (
            <div className="flex justify-end w-auto">
              <p
                className="text-md underline font-bold text-right mr-8 hover:text-emerald-600 cursor-pointer my-2"
                onClick={handleLogOut}
              >
                Đăng xuất
              </p>
            </div>
          )}
          {isLogIn && <hr />}
          <div className="flex gap-4 mt-2 justify-end">
            <div
              className="flex gap-2 bg-blue-200 px-4 py-2 rounded-xl w-fit cursor-pointer hover:bg-blue-300 mr-8"
              onClick={() => {
                openAddModal(true);
              }}
            >
              <p className="text-lg font-bold">Thêm món</p>
            </div>
          </div>
          <div className="p-8">
            <table>
              <tr>
                <th>Tên</th>
                <th>Loại món</th>
                <th>Mô tả</th>
                <th>Hành động</th>
              </tr>
              {data?.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.description}</td>
                  <td>
                    <div className="flex">
                      <div
                        className="w-8 h-8 bg-indigo-200 rounded-full hover:scale-[1.1] duration-300 hover:bg-indigo-400"
                        onClick={() => {
                          setIsOpenAddUpdate(true);
                          setItemSelected(item);
                        }}
                      >
                        <img
                          src={EditIcon}
                          alt=""
                          srcset=""
                          className="w-4 h-4 mt-2 ml-2 cursor-pointer"
                        />
                      </div>
                      <div
                        className="w-8 h-8 bg-indigo-200 rounded-full hover:scale-[1.1] duration-300 ml-2 hover:bg-indigo-400"
                        onClick={() => {
                          setIsOpenDelete(true);
                          setItemSelected(item);
                        }}
                      >
                        <img
                          src={TrashIcon}
                          alt=""
                          srcset=""
                          className="w-4 h-4 mt-2 ml-2 cursor-pointer"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      )}
      {/* ADD/EDIT */}
      <Modal
        isOpen={isOpenAddUpdate}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Thêm món ăn"
        shouldCloseOnOverlayClick={false}
      >
        <h2 className="font-bold text-2xl text-emerald-700 text-center underline">
          {itemSelected ? "Chỉnh sửa món ăn" : "Thêm món ăn mới"}
        </h2>
        <div className="flex">
          {itemSelected && (
            <img
              src={thumbnail}
              alt=""
              srcset=""
              className="h-[120px] w-[200px] mt-3 mr-4"
            />
          )}
          <div>
            <p className="mt-1 text-lime-600 font-bold">Tên món</p>
            <input
              type="text"
              className="p-1 rounded w-full"
              style={{ border: "1px solid gray" }}
              placeholder="Tên món"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p className="mt-1 text-lime-600 font-bold">Hình ảnh</p>
            <input
              type="text"
              className="p-1 rounded w-full"
              style={{ border: "1px solid gray" }}
              placeholder="Hình ảnh"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
            <p className="mt-1 text-lime-600 font-bold">Video hướng dẫn</p>
            <input
              type="text"
              className="p-1 rounded w-full"
              style={{ border: "1px solid gray" }}
              placeholder="Video hướng dẫn"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
            />
            <p className="mt-1 text-lime-600 font-bold">Mô tả</p>
            <textarea
              id="w3review"
              name="w3review"
              rows="2"
              cols="50"
              className="p-1 rounded w-full"
              style={{ border: "1px solid gray" }}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Mô tả"
            />
            <p className="text-lime-600 font-bold">Hướng dẫn</p>
            <input
              type="text"
              className="p-1 rounded w-full"
              style={{ border: "1px solid gray" }}
              placeholder="Bước 1"
              value={tutorial1}
              onChange={(e) => setTutorial1(e.target.value)}
            />
            <input
              type="text"
              className="p-1 rounded w-full mt-1"
              style={{ border: "1px solid gray" }}
              placeholder="Bước 2"
              value={tutorial2}
              onChange={(e) => setTutorial2(e.target.value)}
            />
            <input
              type="text"
              className="p-1 rounded w-full mt-1"
              style={{ border: "1px solid gray" }}
              placeholder="Bước 3"
              value={tutorial3}
              onChange={(e) => setTutorial3(e.target.value)}
            />
            <input
              type="text"
              className="p-1 rounded w-full mt-1"
              style={{ border: "1px solid gray" }}
              placeholder="Bước 4"
              value={tutorial4}
              onChange={(e) => setTutorial4(e.target.value)}
            />
            <input
              type="text"
              className="p-1 rounded w-full mt-1"
              style={{ border: "1px solid gray" }}
              placeholder="Bước 5"
              value={tutorial5}
              onChange={(e) => setTutorial5(e.target.value)}
            />
            <div className="flex w-full">
              <div className="w-[200px]">
                <p className="mt-1 text-lime-600 font-bold">Loại món</p>
                <select
                  name="meal"
                  id="meal"
                  className="border p-2 rounded outline-none mr-4 w-full border-gray-500"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <option value="">Tất cả</option>
                  <option value="Cá">Món cá</option>
                  <option value="Thịt">Món thịt</option>
                  <option value="Rau">Món rau</option>
                  <option value="Nước">Món nước</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>
              <div className="ml-4">
                <p className="mt-1 text-lime-600 font-bold">Đánh giá</p>
                <ReactStars
                  count={5}
                  value={rate}
                  onChange={ratingChanged}
                  edit={true}
                  size={20}
                  color2={"#ffd700"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-2 justify-end">
          <div
            className="flex gap-2 bg-rose-200 px-4 py-2 rounded-xl w-fit cursor-pointer hover:bg-rose-300"
            onClick={closeModal}
          >
            <p className="text-md font-bold">Hủy</p>
          </div>
          <div
            className="flex gap-2 bg-blue-200 px-4 py-2 rounded-xl w-fit cursor-pointer hover:bg-blue-300"
            onClick={onAddUpdateMeal}
          >
            <p className="text-md font-bold">
              {itemSelected ? "Chỉnh sửa" : "Thêm món"}
            </p>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={isOpenDelete}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Thêm món ăn"
        shouldCloseOnOverlayClick={false}
      >
        <h2 className="font-bold text-2xl text-emerald-700 text-center underline">
          Xóa món ăn
        </h2>
        <p className="my-4 text-xl text-lime-600 font-bold">
          Bạn có chắc chắn muốn xóa món ăn này không?
        </p>
        <div className="flex gap-4 mt-2 justify-end">
          <div
            className="flex gap-2 bg-rose-200 px-4 py-2 rounded-xl w-fit cursor-pointer hover:bg-rose-300"
            onClick={closeModal}
          >
            <p className="text-md font-bold">Hủy</p>
          </div>
          <div
            className="flex gap-2 bg-blue-200 px-4 py-2 rounded-xl w-fit cursor-pointer hover:bg-blue-300"
            onClick={handleDeleteMeal}
          >
            <p className="text-md font-bold">Xóa</p>
          </div>
        </div>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        // transition={Bounce}
      />
    </div>
  );
};

export default Admin;
