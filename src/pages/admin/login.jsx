import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const LoginRegister = ({ setIsLogIn }) => {
  const [isSelectLogin, setIsSelectLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (password !== confirmPassword) {
      toast.warning("Vui lòng nhập mật khẩu và xác nhận mật khẩu giống nhau.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const payload = {
        username: username,
        password: password,
        isAdmin: true,
      };
      axios
        .post("http://localhost:5050/api/register", payload)
        .then(function (response) {
          toast.success("Đăng ký thành công. Vui lòng đăng nhập để tiếp tục.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setIsSelectLogin(true);
        })
        .catch(function (error) {
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

  const handleLogin = () => {
    const payload = {
      username: username,
      password: password,
    };
    axios
      .post("http://localhost:5050/api/login", payload)
      .then(function (response) {
        toast.success("Đăng nhập thành công.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.setItem("isLoggedIn", "true");
        setIsLogIn(true);
      })
      .catch(function (error) {
        if (error?.response?.data?.message === "Password does not matched!") {
          toast.error("Sai tên đăng nhập hoặc mật khẩu.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
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
        }
      });
  };

  const clearValue = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  useEffect(() => {
    clearValue();
  }, [isSelectLogin]);

  return (
    <div className="w-[400px] m-auto mt-12">
      <div className="flex mb-4">
        <div
          className={`${
            isSelectLogin &&
            "border-b-4 border-indigo-500 px-4 py-2 text-xl text-teal-600 font-bold"
          } px-4 py-2 text-xl font-bold cursor-pointer hover:bg-emerald-100`}
          onClick={() => setIsSelectLogin(true)}
        >
          <p>Đăng nhập</p>
        </div>
        <div
          className={`${
            !isSelectLogin &&
            "border-b-4 border-indigo-500 px-4 py-2 text-xl text-teal-600 font-bold"
          } px-4 py-2 text-xl font-bold cursor-pointer hover:bg-emerald-100`}
          onClick={() => setIsSelectLogin(false)}
        >
          <p>Đăng ký</p>
        </div>
      </div>
      <div>
        <p>Tên đăng nhập</p>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ border: "1px solid gray" }}
          className="p-1 rounded w-full"
        />
        <p className="mt-2">Mật khẩu</p>
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ border: "1px solid gray" }}
          className="p-1 rounded w-full"
        />
        {!isSelectLogin && (
          <div>
            <p className="mt-2">Xác nhận mật khẩu</p>
            <input
              type="password"
              placeholder="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ border: "1px solid gray" }}
              className="p-1 rounded w-full"
            />
          </div>
        )}
        <div
          className="flex gap-2 bg-blue-200 px-4 py-2 rounded-xl w-fit cursor-pointer hover:bg-blue-300 mt-4 m-auto"
          onClick={() => {
            isSelectLogin ? handleLogin() : handleRegister();
          }}
        >
          <p className="text-md font-bold">
            {isSelectLogin ? "Đăng nhập" : "Đăng ký"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
