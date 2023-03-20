import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import ReactPaginate from "react-paginate";

function CoinList() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

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

  const filteredCoins = coins.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
    );
  });

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  if (!coins.length > 0) return <Loader />;

  return (
    <div className="w-[90%] mx-auto font-montserrat text-white">
      <h2 className="text-center py-3 text-xl">
        Cryptocurrency Prices by Market Cap
      </h2>
      <div>
        <input
          type="text"
          className="w-full p-2 bg-transparent text-[12px] outline-none border border-[rgb(107,114,128)]"
          placeholder="Search for a Crypto Currency"
          onInput={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="w-full block-inline px-3 mt-3">
        <thead className="bg-[rgb(250,204,20)] text-black">
          <tr className="border-b border-gray-500 text-right block-inline text-sm py-3 ">
            <th className="text-left p-2 first:rounded-tl-lg">Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th className="rounded-tr-lg pr-2">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {filteredCoins
            .slice((page - 1) * 10, (page - 1) * 10 + 10)
            .map((item) => {
              return (
                <tr
                  className="border-b border-gray-500 text-right text-sm block-inline  hover:bg-neutral-800 hover: cursor-pointer"
                  onClick={() => {
                    navigate("/coin/" + item.id);
                  }}
                >
                  <td className="flex items-center text-left pl-3 py-2">
                    <div>
                      <img src={item.image} className="w-10 h-10 mr-2" />
                    </div>
                    <div>
                      <p className="uppercase">{item.symbol}</p>
                      <p className="text-[10px]">{item.name}</p>
                    </div>
                  </td>
                  <td>${item.current_price.toLocaleString()}</td>
                  <td>{item.price_change_percentage_24h.toFixed(2)}%</td>
                  <td className="pr-2">
                    {Math.floor(
                      parseInt(item.market_cap) / 1000000
                    ).toLocaleString()}
                    M
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ReactPaginate
        pageCount={coins.length / 10}
        onPageChange={(x) => setPage(x.selected + 1)}
        className="flex space-x-5 mt-5 mx-auto w-min text-[rgb(250,204,20)] text-sm items-center"
        previousLabel="<"
        nextLabel=">"
        pageClassName="hover:bg-neutral-600 w-8 h-8 rounded-[50%] flex justify-center items-center"
        previousClassName="hover:bg-neutral-600 w-8 h-8 rounded-[50%] flex justify-center items-center"
        nextClassName="hover:bg-neutral-600 w-8 h-8 rounded-[50%] flex justify-center items-center"
      />
    </div>
  );
}

export default CoinList;
