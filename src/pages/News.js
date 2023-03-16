import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import noPhoto from "../assets/no-photo.svg";

function News() {
  const [news, setNews] = useState([]);
  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: "crypto news",
      count: "20",
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "c85c54d697msh2d6bc0082e34a71p1fdea7jsn4c08dd282158",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then((data) => {
        setNews(data.data.value);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!news > 0) return <Loader />;

  return (
    <div className="text-white cursor-pointer font-montserrat">
      <h1 className="text-center text-4xl uppercase font-bold mb-4">
        Crypto News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {news.map((item) => {
          return (
            <a
              href={item.url}
              target="_blank"
              className="border border-gray-400 m-2 p-2 rounded hover:text-[rgb(234,179,8)]"
            >
              <div className="flex">
                <h2 className="font-bold text-[1.1em] w-[80%]">{item.name}</h2>
                <img
                  src={
                    item.image === undefined
                      ? noPhoto
                      : item.image.thumbnail.contentUrl
                  }
                  className="w-20 h-20"
                  alt=""
                />
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src={
                    item.provider[0].image === undefined
                      ? noPhoto
                      : item.provider[0].image.thumbnail.contentUrl
                  }
                  alt=""
                  className="w-5 h-5"
                />
                <span className="text-sm  block my-5 italic">
                  {item.provider[0].name}
                </span>
              </div>
              <p className="text-justify">{item.description}</p>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default News;
