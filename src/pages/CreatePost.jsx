import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function CreatePost() {
  return (
    <div>
      <Navbar />
      <div className="pt-20" />
      <div className="flex items-center text-white place-items-center justify-center">
        <p className="text-2xl font-bold">Create your blog post here</p>
      </div>
      <div className="pt-4" />
      <div className="flex items-center text-white place-items-center justify-center">
        <input
          className="w-[700px] rounded-lg h-[40px] bg-gray-200 text-black p-3 "
          maxLength="100"
          placeholder="Enter blog title"
        />
      </div>
      <div className="pt-4" />
      <div className="flex items-center text-white place-items-center justify-center">
        <textarea
          placeholder="Enter blog body"
          cols="90"
          rows="2000"
          className="h-[500px] text-black rounded p-1"
        ></textarea>
      </div>
      <div className="pt-4" />
      <div className="flex items-center text-white place-items-center justify-center">
        <button type="submit" className="bg-green-500 p-2 rounded-lg w-[100px]">
          Post Blog
        </button>
      </div>
      <div className="pt-[135px]" />
      <Footer />
    </div>
  );
}

export default CreatePost;
