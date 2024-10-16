import React from "react";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
    const [fullName, setfullName] = useState("");
    const [email, setemail] = useState("");
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const [Cpassword, setCpassword] = useState("");


    async function submitHandler(fullName, userName, email, password){
        const res = await axios.post("https://localhost:7216/registration",{
          "name": fullName,
          "userName": userName,
          "email":email,
          "password": password
        }).then(res=>{
          console.log(res.data.message)
        })
    }

    

  return (
    <div className="w-2/5 p-4 rounded-lg shadow-lg backdrop-blur-3xl">
      <div className="flex flex-col gap-y-6">
        <div className="text-3xl flex justify-center items-center ">
          SIGN UP
        </div>
        <div className="flex flex-col gap-y-6 p-4">
          <div className="flex py-2 gap-2 items-center justify-between">
            <label className="text-xl" htmlFor="">
                FullName:
            </label>
            <input
              type="text"
              className="bg-transparent border  border-[#161616] w-4/5 rounded-lg p-2 caret-white"
              onChange={(e) => {
                setfullName(e.target.value);
              }}
            />
          </div>
          <div className="flex py-2 gap-2 items-center justify-between">
            <label className="text-xl" htmlFor="">
              UserName:
            </label>
            <input
              type="text"
              className="bg-transparent border  border-[#161616] w-4/5 rounded-lg p-2 caret-white"
              onChange={(e) => {
                setuserName(e.target.value);
              }}
            />
          </div>
          <div className="flex py-2 gap-2 items-center justify-between">
            <label className="text-xl" htmlFor="">
              Email:
            </label>
            <input
              type="text"
              className="bg-transparent border  border-[#161616] w-4/5 rounded-lg p-2 caret-white"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          
          <div className="flex py-2 gap-2 items-center justify-between">
            <label className="text-xl" htmlFor="">
              Password:
            </label>
            <input
              type="password"
              className="bg-transparent border border-[#161616] w-full rounded-lg p-2 caret-white"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <div className="flex py-2 gap-2 items-center justify-between">
            <label className="text-xl" htmlFor="">
              Confirm Password:
            </label>
            <input
              type="password"
              className="bg-transparent border border-[#161616] w-full rounded-lg p-2 caret-white"
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            />
          </div>
          <div className="flex w-full items-center justify-center">
            <div
              className="flex w-full items-center justify-center rounded-lg shadow-2xl bg-[#161616]  text-white p-2  text-xl"
              onClick={() => {
                submitHandler(fullName, userName, email, password );
              }}
            >
              <div>SignUp</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
