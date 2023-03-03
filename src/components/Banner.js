import React from "react";
import Carousel from "./Carousel";

function Banner() {
  return (
    <div className="text-center text-white">
      <h2 className="text-3xl">Crypto Hunt</h2>
      <p className="text-sm">
        GET ALL THE INFO REGARDING YOUR FAVORITE CRYPTO CURRENCY
      </p>
      <Carousel />
    </div>
  );
}

export default Banner;
