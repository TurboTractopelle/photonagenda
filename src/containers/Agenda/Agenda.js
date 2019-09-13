import List from "../../components/List/List";
import Nav from "../../components/Nav/Nav";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

import React, { Component } from "react";

class Agenda extends Component {
  setCat = () => {
    console.log("cat");
  };

  render() {
    return (
      <div>
        <Nav />
        <List />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    cat: state.cat
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCat: cat => {
      dispatch(actions.setCat(cat));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Agenda);
