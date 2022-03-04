import React from "react";
import Color from "../HOC/Color";
import { connect, useSelector } from "react-redux";

class TestRedux extends React.Component {
  render() {
    let listUsers = this.props.dataRedux;
      return <div>
          {listUsers && listUsers.length() > 0 &&
              listUsers.map((item, index) => {
                  return (
                      <div>{index + 1}-{item.name}</div>
                )
            })
        }
    </div>;
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

export default connect(mapStateToProps)(Color(TestRedux));
