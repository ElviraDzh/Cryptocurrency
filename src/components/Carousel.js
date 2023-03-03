import React, { useEffect, useState } from "react";
import { AliceCarousel } from "react-alice-carousel";
import axios from "axios";

function Carousel() {
  const [trendCoins, setTrendCoins] = useState();
  const fetchTrendingCoins = () => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((data) => {
        setTrendCoins(data.data.coins);
      });
  };
  useEffect(() => {
    fetchTrendingCoins();
  }, []); //always load this fetchTrendingCoins function
  return (
    <div className="flex justify-around mt-5">
      {trendCoins ? (
        trendCoins.map((items) => {
          return (
            <div className="flex items-center flex-col">
              <img src={items.item.small} />
              <p>{items.item.name}</p>
            </div>
          );
        })
      ) : (
        <p>No trend Coins</p>
      )}
    </div>
  );
}

export default Carousel;
