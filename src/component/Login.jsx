import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
const [Authenticated, setAuthenticated] = useState(false)

  async function submitHandler(userName, password) {
    try {
      const res = await axios.post("https://localhost:7216/login", {
        userName,
        password,
      });

      if (res.status === 200) {
        toast.success(res.data.message);
        localStorage.setItem('key', res.data.user);
        setAuthenticated(true);
      }
    } catch (e) {
      if (e.response && e.response.status === 401) {
        toast.error("Unauthorized: Invalid username or password.");
      } else {
        console.log(e.message); 
      }
    }
  }
  if(Authenticated){
    return <Navigate to="/home"></Navigate>
  }

  return (
    <div className="w-2/5 h-2/3 p-4 rounded-lg shadow-lg backdrop-blur-3xl">
      <div className="flex flex-col gap-y-6">
        <div className="text-3xl flex justify-center items-center ">LOGIN</div>
        <div className="flex flex-col gap-y-6 p-4">
          <div className="flex py-2 gap-2 items-center">
            <label className="text-xl" htmlFor="">
              UserName:
            </label>
            <input
              type="text"
              className="bg-transparent border  border-[#161616] w-4/5 rounded-lg p-2 caret-[#161616]"
              onChange={(e) => {
                setuserName(e.target.value);
              }}
            />
          </div>
          <div className="flex py-2 gap-2 justify-between items-center">
            <label className="text-xl" htmlFor="">
              Password:
            </label>
            <input
              type="password"
              className="bg-transparent border border-[#161616] w-4/5  rounded-lg p-2 caret-[#161616]"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <button className="flex w-full items-center justify-center">
            <div
              className="flex w-full items-center justify-center rounded-lg shadow-2xl bg-[#161616] p-2  text-white  text-xl"
              onClick={() => {
                submitHandler(userName, password);
              }}
            >
              <div>LogIn</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
