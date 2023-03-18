import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import Loader from "./Loader";

function SinglePageChart(props) {
  const [historicalData, setHistoricalData] = useState([]);
  const [days, setDays] = useState(1);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${props.id}/market_chart?vs_currency=usd&days=${days}`
      )
      .then((data) => {
        setHistoricalData(data.data.prices);
      });
  }, []);

  return (
    <div className="w-[50%]">
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
    </div>
  );
}

export default SinglePageChart;
