import axios from "axios";
import React, { useEffect, useState } from "react";
import Parser from "html-react-parser";

function SinglePageInfo(props) {
  const [coin, setCoin] = useState([]);
  const fetchCoin = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/" + props.id)
      .then((data) => {
        // console.log(data.data.description.en);
        setCoin(data.data);
      });
  };
  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div className="text-white font-montserrat flex flex-col items-center mt-[100px] py-10">
      <img
        src={
          coin.image === undefined
            ? "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"
            : coin.image.small
        }
        alt=""
        className="w-20 h-20"
      />
      <h1 className="text-2xl font-bold">{coin.name}</h1>
      <p className="my-4 text-sm w-[50%] text-center">
        {Parser(
          coin.description === undefined
            ? "No info"
            : coin.description.uk.split(/\. [A-Z0-9]/)[0]
        )}
      </p>
      <p className="text-bold font-[600]">
        Rank: <span className="font-[400]">{coin.market_cap_rank}</span>
      </p>
      <p className="text-bold font-[600]">
        Current Price:
        <span className="ml-1 font-[400]">
          {coin.market_data === undefined
            ? "No info"
            : "$ " + coin.market_data.current_price.usd.toLocaleString()}
        </span>
      </p>
      <p className="font-[600]">
        Market Cap:
        <span className="ml-1 font-[400]">
          {coin.market_data === undefined
            ? "No info"
            : "$ " +
              Math.floor(
                coin.market_data.market_cap.usd / 1000000
              ).toLocaleString()}
          M
        </span>
      </p>
    </div>
  );
}

export default SinglePageInfo;
