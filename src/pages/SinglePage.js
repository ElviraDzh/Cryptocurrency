import React from "react";
import { useParams } from "react-router-dom";
import SinglePageInfo from "../components/SinglePageInfo";

function SinglePage() {
  const params = useParams();
  return (
    <div>
      <SinglePageInfo params={params} />
    </div>
  );
}

export default SinglePage;
