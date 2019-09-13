import React, { Component } from "react";
import { connect } from "react-redux";

class List extends Component {
  render() {
    return <div>length: {this.props.data.length}</div>;
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(List);
