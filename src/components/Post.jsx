import React from "react";

function Post({ image, title, author }) {
 
  return (
    <div className="bg-gray-500 h-[500px] text-white rounded-xl border-white flex-col  ">
      <div className="">
        <img
          className="h-[300px] w-full rounded-xl object-contain hover:object-scale-down cursor-pointer "
          src={`http://192.168.99.1:9000/`+image}
        />
      </div>
      <div className="ml-3 mt-2 sm:mt-2 sm:ml-4 mb-2">
        <p className=" text-xl font-bold font-serif ">Headline: {title}</p>
        <span className="text-normal font-medium font-serif ">
         
        </span>
        {author && 
        <p>Author: {author.firstName} {author.lastName}</p>}
      </div>
    </div>
  );
}

export default Post;
