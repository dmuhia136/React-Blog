import React, { useEffect, useState } from "react";
// import Card from "./Card";
import axios from "axios";
import Post from "./Post";
import fetchPosts from "../utils/fetching";
function StorySection() {
  const [news, setNews] = useState([]);
  async function fetchNews() {
    axios
      .get("http://192.168.99.1:9000/post")
      .then((result) => {
        console.log("====================================");
        console.log(result);
        console.log("====================================");
        setNews(result.data.body);
      })
      .catch((err) => {
        console.log("The err is", err);
      });
  }
  useEffect(() => {
    fetchNews();
  }, []);
  if (news.length == 0) {
    return (
      <div className="place-items-center items-center justify-center ">
        <img src=".././src/assets/loading.png" className="w-1/2  pl-[500px]" />
        <p>Wait while we fetch your posts...</p>
      </div>
    );
  }
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-5 pl-2 pr-10 pt-10">
      {news.map((data, index) => {
        console.log(data,index);
        return (
          <div className="">
            <Post
              key={data._id}
              image={data.image}
              title={data.title}
              author={data.author}
            />
          </div>
        );
      })}
    </div>
  );
}

export default StorySection;
