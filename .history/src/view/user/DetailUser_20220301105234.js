import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const DetailUser = () => {
    
  return <div>DetailUser{useParams().id}</div>;
};

export default DetailUser;
