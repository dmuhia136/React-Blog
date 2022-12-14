import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";
import axios from "axios";
import { ReactSession } from "react-client-session";

function Login() {
  const emailFocus = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  ReactSession.setStoreType("localStorage");
  const auth = useAuth();
  const url = "http://192.168.99.1:9000/user/login";
  const navigate = useNavigate();
  async function handleLogin(event) {
    event.preventDefault();
    var data = await axios({
      method: "post",
      url: url,
      data: {
        email: email,
        password: password,
      },
    });
    auth.login(data.data.body.firstName);
    ReactSession.set("firstName", data.data.body.firstName);
    ReactSession.set("lastName", data.data.body.lastName);
    ReactSession.set("userid", data.data.body._id);

    navigate("/");
  }

  useEffect(() => {
    emailFocus.current.focus();
  }, []);

  return (
    <div className="bg-gray-600 text-white place-items-center justify-center items-center flex">
      <div className="w-[500px] flex items-center justify-center h-screen ">
        <div className="space-y-5 border-blue-600 rounded-lg bg-gray-200 place-items-center p-2">
          <div className="pl-[150px]">
            <img
              src=".././src/assets/login.png"
              className="rounded-full w-[100px] ml-7"
            />
          </div>
          <form onSubmit={handleLogin} className="ml-7">
            <div className="space-y-4">
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
                  type="submit"
                  className="w-[200px] p-3 place-items-center justify-self-center rounded-xl bg-blue-500 cursor-pointer"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
