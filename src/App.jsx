import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import noPoster from "./images/no-image2.jpeg";
import DOMPurify from "dompurify";
import Sidebar from "./Sidebar";
import { useAppContext } from "./contextAPI";
import { FetchNews } from "./api";

const App = () => {
  const{query,setNews,news}=useAppContext();
  

  useEffect(() => {
    FetchNews(query).then((resp)=>{
       setNews(resp.articles);
    }).catch(error=>console.log(error))
  }, [query]);

  return (
    <div className="bg-[#000700] relative">
      <Navbar />
      <Sidebar/>
      <SearchBar/>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 section-center text-center mt-10">
        {news.map((a, key) => (
          <div
            className="w-full rounded-lg shadow-md lg:max-w-sm bg-[#93ac7a] text-white overflow-hidden relative"
            key={key}
          >
            <div className="image-container">
              <img
                className="object-cover w-full h-48 "
                src={a.urlToImage || noPoster}
                alt="image"
              />
            </div>
            <div className="p-4 ">
              <h4 className="text-xl font-semibold text-black mb-2">
                {a.title}
              </h4>
              <div
                className="mb-2 text-xl leading-normal text-[#701414] md:text-xl min-h-[16rem]"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(a?.content.slice(0, 300)),
                }}
              ></div>
              <a
                href={a.url}
                className="px-4 py-2  text-blue-100 bg-blue-500 rounded shadow  mt-4 inline-block ]
                absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%]
                "
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
