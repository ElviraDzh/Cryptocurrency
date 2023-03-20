import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import axios from "axios";

function Carousel() {
  const [trendCoins, setTrendCoins] = useState([]);
  const fetchTrendingCoins = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=15&page=1&sparkline=false"
      )
      .then((data) => {
        setTrendCoins(data.data);
      });
  };
  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const items = trendCoins.map((item) => {
    const growth_percentage = item.price_change_percentage_24h.toFixed(2);
    return (
      <div className="flex flex-col items-center mt-5">
        <img src={item.image} className="w-20 h-20" />
        <div>
          <p>
            <span className="uppercase mr-2">{item.symbol}</span>
            <span
              className={
                growth_percentage > 0
                  ? "text-green-400 font-bold"
                  : "text-red-700 font-bold"
              }
            >
              {growth_percentage > 0
                ? "+" + growth_percentage
                : growth_percentage}
              %
            </span>
          </p>
          <p className="text-sm">${item.low_24h.toLocaleString()}</p>
        </div>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="mt-5 pb-12">
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlayInterval={1000}
        infinite
        animationDuration={1500}
        disableButtonsControls
        disableDotsControls
        responsive={responsive}
        autoPlay
      />
    </div>
  );
}

export default Carousel;
