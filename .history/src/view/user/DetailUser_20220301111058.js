import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const DetailUser = () => {
  //   let id = useParams().id;
    const { id } = useParams();
  useEffect(() => {
    axios.get(`https://reqres.in/api/users/${useParams().id}`).then((res) => {
      console.log(res);
    });
  });
  return <div>DetailUser{useParams().id}</div>;
};

export default DetailUser;
