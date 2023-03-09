import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { Link } from "react-router-dom";

function CoinList() {
  const [coins, setCoins] = useState([]);
  const navigate = useNavigate();
  const fetchTrendingCoins = () => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      )
      .then((data) => {
        setCoins(data.data);
      });
  };
  useEffect(() => {
    fetchTrendingCoins();
  }, []); //always load this fetchTrendingCoins function

  if (!coins.length > 0) return <Loader />;

  return (
    <div className="w-[90%] mx-auto">
      <div>
        <input type="text" />
      </div>
      <table className="text-white w-full">
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24hrs Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((item) => {
            return (
              <tr
                key={Math.random() * 100}
                className="border-b border-gray-500 text-right text-sm block-inline py-3 hover:bg-neutral-800"
                onClick={() => {
                  navigate("/coin/" + item.id);
                }}
              >
                <td className="flex items-center text-left ">
                  <div>
                    <img src={item.image} className="w-10 h-10 mr-2" />
                  </div>
                  <div>
                    <p className="uppercase">{item.symbol}</p>
                    <p className="text-[10px]">{item.name}</p>
                  </div>
                </td>
                <td>${item.current_price.toLocaleString()}</td>
                <td>{item.price_change_percentage_24h}</td>
                <td>
                  {Math.floor(
                    parseInt(item.market_cap) / 1000000
                  ).toLocaleString()}{" "}
                  M
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CoinList;

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false
