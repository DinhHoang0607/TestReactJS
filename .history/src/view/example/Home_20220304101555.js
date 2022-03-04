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
  // const dataRedux = useSelector((state) => state.users);
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
                {index + 1}-{item.name}
              </div>
              <span onClick={() => handleDeleteRedux()}> X </span>
            </>
          );
        })}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};
// export default Home;
export default connect(mapStateToProps)(Color(Home));
