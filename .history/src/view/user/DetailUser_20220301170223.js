import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const DetailUser = () => {
  //   let id = useParams().id;
  const { id } = useParams();
  const [user, setUser] = useState({});
  const isEmptyObj = (temp) => {
    return Object.keys(temp).length === 0;
  };
  useEffect(() => {
    // console.log(id);
    axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
      //   console.log(res);
      setUser(res && res.data && res.data.data ? res.data.data : {});
    });
  });

  return (
    <>
      <div>DetailUser{useParams().id}</div>
      {isEmptyObj(user) === false && (
        <>
          <div>
            User's name: {user.first_name} {user.last_name}
          </div>
          <div>User's email: {user.email}</div>
                  <img src={user.avatar} alt="" />
                  <button type="button">Back</button>
        </>
      )}
    </>
  );
};

export default DetailUser;
