import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const DetailUser = () => {
    let id = useParams().id;
    useEffect(()=>{
    },)
  return <div>DetailUser{useParams().id}</div>;
};

export default DetailUser;
