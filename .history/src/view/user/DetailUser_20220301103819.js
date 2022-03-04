import React from "react";
import { useParams } from "react-router-dom";

const DetailUser = () => {
  return <div>DetailUser{useParams()}</div>;
};

export default DetailUser;
