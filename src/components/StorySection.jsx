import React, { useEffect, useState } from "react";
// import Card from "./Card";
import axios from "axios";
import Post from "./Post";
 import fetchPosts from "../utils/fetching";
function StorySection() {
  const [news, setNews] = useState([]);
  const url = process.env;
  async function fetchNews() {
    
    axios
      .get( 
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=326d8bbce98e4379bd530806b8c9b601"
      )
      .then((result) => {
        setNews(result.data.articles);
      })
      .catch((err) => {
        console.log("The err is", err);
      });
  }
 useEffect(() => {
    fetchNews();
  }, []);
  if(news.length==0){
    return (
      <div className="place-items-center items-center justify-center ">
        <img src=".././src/assets/loading.png" className="w-1/2  pl-[500px]"/>
        <p>Wait while we fetch your posts...</p>
      </div>
    )
  }
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-5 pl-2 pr-10 pt-10">
      {news.map((data, index) => {
      
        return (
          <div className="">
            <Post
              key={index}
              image={data.urlToImage}
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
