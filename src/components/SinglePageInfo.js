import axios from "axios";
import React, { useEffect, useState } from "react";
import Parser from "html-react-parser";

function SinglePageInfo(props) {
  const [coin, setCoin] = useState([]);
  const fetchCoin = () => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/" + props.params.id)
      .then((data) => {
        // console.log(data.data.description.en);
        setCoin(data.data);
      });
  };
  useEffect(() => {
    fetchCoin();
  }, []);

  return (
    <div className="text-white font-montserrat flex flex-col items-center h-[100vh]">
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
            : coin.description.uk.split(/\. [A-Z0-9]/)[0] + "."
        )}
      </p>
      <p className="text-bold">
        Rank: <span>{coin.market_cap_rank}</span>
      </p>
      <p className="text-bold">
        Current Price: $
        <span className="ml-1">
          {coin.market_data === undefined
            ? "No info"
            : coin.market_data.current_price.usd.toLocaleString()}
        </span>
      </p>
      <p className="text-bold">
        Market Cap: $
        <span className="ml-1">
          {coin.market_data === undefined
            ? "No info"
            : Math.floor(
                coin.market_data.market_cap.usd / 1000000
              ).toLocaleString()}
          M
        </span>
      </p>
    </div>
  );
}

export default SinglePageInfo;
