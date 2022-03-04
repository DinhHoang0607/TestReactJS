import React from "react";
import Color from "../HOC/Color";
import { useNavigate } from "react-router-dom";
import logo from "../asssets/images/ann_shop.png";
import { connect, useSelector } from "react-redux";
const Home = (props) => {
  let history = useNavigate();
  const handleClick = () => {
    // console.log(mapStateToProps());
    console.log(dataRedux);
    setTimeout(() => {
      history("./todos");
      console.log(history);
    }, 3000);
  };
  const dataRedux = props.dataRedux;
  const handleDeleteRedux = (user) => {
    console.log(user);
    props.deleteUserRedux(user);
  };

  const handleAddRedux = () => {
    props.addUserRedux();
  };
  return (
    <div>
      <img src={logo} alt="" />
      <button onClick={() => handleClick()}>aaa</button>
      {dataRedux &&
        dataRedux.length > 0 &&
        dataRedux.map((item, index) => {
          return (
            <>
              <div key={item.id}>
                {index + 1}-{item.name}{" "}
                <span onClick={() => handleDeleteRedux(item)}> X </span>
                <span onClick={() => handleAddRedux(item)}> + </span>
              </div>
            </>
          );
        })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "ADD_USER" }),
  };
};

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
