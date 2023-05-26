import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import noPoster from "./images/no-image2.jpeg";
import Sidebar from "./Sidebar";
import { useAppContext } from "./contextAPI";
import moment from "moment";
import { FetchNews } from "./api";

const App = () => {
  const { query, setNews, news } = useAppContext();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    FetchNews(query)
      .then((resp) => {
        setNews(resp);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  if (isLoading) {
    return (
      <div
        className="section-center"
        style={{
          textAlign: "center",
          display: "block",
          height: "100vh",
          background: "black",
        }}
      >
        <div className="loading"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#000700] relative">
      <Navbar />
      <Sidebar />
      <SearchBar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 lg:grid-cols-3 section-center text-center mt-10">
        {news?.map((a, key) => (
          <a
            className="w-full rounded-lg shadow-md lg:max-w-sm bg-[#93ac7a] text-white overflow-hidden relative hover:scale-[1.1] news-container cursor-pointer"
            key={key}
            href={a?.source_url}
            target="_blank"
          >
            <div className="image-container">
              <img
                className="object-cover w-full h-48 "
                src={a?.photo_url || noPoster}
                alt="image"
              />
            </div>
            <div className="p-4 ">
              <h4 className="text-xl font-semibold text-black mb-2">
                {a?.title?.slice(0, 50)}
              </h4>
              <h4 className="text-xl font-semibold text-[#2f50d5] mb-2">
                {moment(a?.published_datetime_utc).format("MMMM Do, YYYY")}
              </h4>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default App;
