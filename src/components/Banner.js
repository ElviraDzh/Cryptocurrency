import React from "react";
import Carousel from "./Carousel";

function Banner() {
  return (
    <div className="banner text-center text-white font-montserrat pt-8">
      <h2 className="text-3xl md:text-4xl pt-[50px] font-bold uppercase">
        CryptoHunt
      </h2>
      <p className="text-[0.6em] md:text-[0.7em]  pb-4">
        GET ALL THE INFO REGARDING YOUR FAVORITE CRYPTO CURRENCY
      </p>
      {/* <p className="text-3xl font-bold mt-12">Trending Coins On CryptoHunt</p> */}
      <Carousel />
    </div>
  );
}

export default Banner;
