import React, { useEffect, useState } from "react";
// import Card from "./Card";
import axios from "axios";
import Post from "./Post";

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
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-5 pl-2 pr-10 pt-10">
      {news.map((data, index) => {
        console.log(data);
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
