import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Login() {
  const emailFocus = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogin = () => {
    auth.login(email, password);
    navigate("/");
  };
  useEffect(() => {
    emailFocus.current.focus();
  }, []);
  return (
    <div className="bg-gray-600 text-white place-items-center justify-center items-center flex">
      <div className="w-[500px] flex items-center justify-center h-screen ">
        <div className="space-y-5">
          <div className="pl-[150px]">
            <img
              src=".././src/assets/login.png"
              className="rounded-full w-[100px]"
            />
          </div>
          <input
            ref={emailFocus}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="text-gray-800 cursor-text w-[400px] h-10 rounded-lg placeholder-inset-1/3 pl-2"
            placeholder="Enter Email"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="text-gray-800 w-[400px] h-10 rounded-lg placeholder-inset-1/3 pl-2"
            placeholder="Enter Password"
          />
          <br />
          <div className="pl-[100px]">
            <button
              onClick={handleLogin}
              className="w-[200px] p-3 place-items-center justify-self-center rounded-xl bg-blue-500 cursor-pointer"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
