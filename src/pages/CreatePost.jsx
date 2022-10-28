import axios from "axios";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ReactSession } from "react-client-session";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

function CreatePost() {
  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");
  // const [image, setImage] = useState([]);
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);
  const userid = ReactSession.get("userid");
  const navigate = useNavigate();
  const auth = useAuth();
  const createFormData = (uri) => {
    const fileName = uri.split("/").pop();
    const fileType = fileName.split(".").pop();
    const formData = new FormData();
    return {
      uri,
      name: fileName,
      type: `image/${fileType}`,
    };
  };
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log(file);
    const fd = new FormData();
    file && fd.append("file", createFormData(file));
    heading && fd.append("title", file);
    body && fd.append("body", body);
    userid && fd.append("author", author);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
  
    console.log("dasd",fd);
    try {
      var response = await axios.post(
        "http://192.168.99.1:9000/post",
        fd,
        config
      );
      console.log("==============dasdas======================");
      console.log(response);
      console.log("===================dasdas=================");
      if (response) {
        navigate("/");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Navbar />
      <div className="pt-20" />
      <div className="flex items-center text-white place-items-center justify-center">
        <p className="text-2xl font-bold">Create your blog post here</p>
      </div>
      <div className="pt-4" />
      {auth.user == null ? (
        <div className="flex flex-col items-center text-white place-items-center justify-center">
          <img src=".././src/assets/loading.png" className="w-[600px]" />
          <p>Login first</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} method="multipart/form-data">
          <div className="flex items-center text-white place-items-center justify-center">
            <input
              className="w-[700px] rounded-lg h-[40px] bg-gray-200 text-black p-3 "
              maxLength="100"
              onChange={(e) => setHeading(e.target.value)}
              placeholder="Enter blog title"
            />
          </div>
          <div className="pt-4" />
          <div className="flex items-center text-white place-items-center justify-center">
            <textarea
              placeholder="Enter blog body"
              onChange={(e) => setBody(e.target.value)}
              cols="90"
              rows="2000"
              className="h-[500px] text-black rounded p-1"
            ></textarea>
          </div>

          <div className="pt-4" />
          <div className="flex items-center text-white place-items-center justify-center">
            <input
              type="file"
              className="text-white"
              name="file"
              placeholder="Upload blog image"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="pt-4" />
          <div className="flex items-center text-white place-items-center justify-center">
            <button
              type="submit"
              className="bg-green-500 p-2 rounded-lg w-[100px]"
            >
              {loading == true ? <p>Posting</p> : <p>Post Blog</p>}
            </button>
          </div>
        </form>
      )}

      <div className="pt-[135px]" />
      <Footer />
    </div>
  );
}

export default CreatePost;
