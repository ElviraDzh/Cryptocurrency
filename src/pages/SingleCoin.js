import React from "react";
import { useParams } from "react-router-dom";
import SinglePageChart from "../components/SinglePageChart";
import SinglePageInfo from "../components/SinglePageInfo";

function SingleCoin() {
  const params = useParams();
  return (
    <div className="flex items-center justify-around p-3 mt-[3em] space-x-2 cursor-pointer flex-col md:flex-row space-y-20">
      <SinglePageInfo id={params.id} />
      <SinglePageChart id={params.id} />
    </div>
  );
}

export default SingleCoin;
