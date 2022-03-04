import React from "react";
import Color from "../HOC/Color";
import { connect, useSelector } from "react-redux";

class TestRedux extends React.Component {
  render() {
    let listUsers = this.props.dataRedux;
      return <div>
        {listUsers&&listUsers.lenght()}
    </div>;
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

export default connect(mapStateToProps)(Color(TestRedux));
