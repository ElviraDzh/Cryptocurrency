import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import axios from "axios";

function Carousel() {
  const [trendCoins, setTrendCoins] = useState([]);
  const fetchTrendingCoins = () => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((data) => {
        setTrendCoins(data.data.coins);
        console.log(trendCoins);
      });
  };
  useEffect(() => {
    fetchTrendingCoins();
    console.log(trendCoins);
  }, []); //always load this fetchTrendingCoins function
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className="py-10">
      <AliceCarousel
        mouseTracking
        items={trendCoins.map((coins) => {
          return (
            <div className="flex flex-col items-center text-2xl">
              <img
                src={coins.item.small}
                onDragStart={handleDragStart}
                role="presentation"
              />
              <p className="mt-3">{coins.item.name}</p>
            </div>
          );
        })}
        autoPlay={true}
        infinite
        animationDuration={2500}
        disableButtonsControls={true}
        disableDotsControls={true}
        responsive={responsive}
      />
    </div>
  );
}

export default Carousel;
