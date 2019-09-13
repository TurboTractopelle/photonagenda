import React, { Component } from "react";
import { connect } from "react-redux";
import Item from "../Item/Item";

class List extends Component {
  render() {
    let list;
    if (this.props.data.length === 0) {
      list = "No item found";
    } else {
      list = this.props.data.map((item, i) => {
        return <Item itemData={item} key={"item" + i} />;
      });
    }

    return <div>{list}</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(List);
