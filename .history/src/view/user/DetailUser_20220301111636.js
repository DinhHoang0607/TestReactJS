import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const DetailUser = () => {
  //   let id = useParams().id;
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    console.log(id);
    axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
    //   console.log(res);
      setUser(res && res.data && res.data.data ? res.data.data : {});
    });
  });
  return <div>DetailUser{useParams().id}</div>;
};

export default DetailUser;
