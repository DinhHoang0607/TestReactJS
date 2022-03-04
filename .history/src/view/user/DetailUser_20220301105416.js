import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const DetailUser = () => {
    useEffect({
        let id=useParams().id;
    },)
  return <div>DetailUser{useParams().id}</div>;
};

export default DetailUser;
