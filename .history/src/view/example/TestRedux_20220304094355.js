import React from "react";
import Color from "../HOC/Color";
import { connect, useSelector } from "react-redux";

class TestRedux extends React.Component {
  render() {
    return <div>aaa</div>;
  }
}

export default Color(TestRedux);
