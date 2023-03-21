import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Loader from "./Loader";
import SinglePageBtn from "./SinglePageBtn";

function SinglePageChart(props) {
  const [historicalData, setHistoricalData] = useState([]);
  const [days, setDays] = useState(1);

  const btnData = [
    {
      label: "24 Hours",
      days: 1,
    },
    {
      label: "30 Days",
      days: 30,
    },
    {
      label: "3 Months",
      days: 90,
    },
    {
      label: "1 Year",
      days: 365,
    },
  ];
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${props.id}/market_chart?vs_currency=usd&days=${days}`
      )
      .then((data) => {
        setHistoricalData(data.data.prices);
      });
  }, [days]);

  return (
    <div className="w-full md:w-[60%] ">
      {!historicalData ? (
        <Loader />
      ) : (
        <Line
          data={{
            labels: historicalData.map((item) => {
              //x
              let date = new Date(item[0]);
              let time =
                date.getHours() > 12
                  ? date.getHours() - 12 + ":" + date.getMinutes() + "PM"
                  : date.getHours() + ":" + date.getMinutes() + "AM";

              return days === 1 ? time : date.toLocaleDateString();
            }),
            datasets: [
              //y
              {
                borderColor: "rgb(250,204,20)",
                data: historicalData.map((item) => item[1]),
                label: `Price ( Past ${days} Days ) in USD`,
              },
            ],
          }}
          options={{
            elements: {
              point: {
                radius: 1,
              },
            },
          }}
        />
      )}
      <div className="flex text-white justify-between mt-5">
        {btnData.map((item) => {
          return (
            <SinglePageBtn
              label={item.label}
              selected={item.days === days}
              onClick={() => setDays(item.days)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SinglePageChart;
