import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const DetailUser = () => {
  let id = useParams().id;
    useEffect(() => {
      axios.get('https://reqres.in/api/users?page=2').then(res=>{})
  });
  return <div>DetailUser{useParams().id}</div>;
};

export default DetailUser;
