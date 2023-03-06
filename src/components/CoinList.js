import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

function CoinList() {
  const [coins, setCoins] = useState([]);
  const fetchTrendingCoins = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false"
      )
      .then((data) => {
        setCoins(data);
        // console.log(data);
      });
  };
  useEffect(() => {
    fetchTrendingCoins();
    // console.log(coins);
  }, []); //always load this fetchTrendingCoins function

  if (!coins.length > 0) return <Loader />;

  return (
    <div>
      <div>
        <input type="text" />
      </div>
      <table>
        <thead>
          <th>Coin</th>
          <th>Price</th>
          <th>24hrs Change</th>
          <th>Market Cap</th>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CoinList;

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false
