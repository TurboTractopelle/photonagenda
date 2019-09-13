import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

class Nav extends Component {
  isActive = cat => {
    return this.props.cat === cat ? "active" : "";
  };

  render() {
    return (
      <div>
        <button
          onClick={this.props.setCat("formations")}
          className={this.isActive("formations")}
        >
          Formations
        </button>
        <button
          onClick={this.props.setCat("salons")}
          className={this.isActive("salons")}
        >
          Salons et conférences
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cat: state.cat
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCat: cat => () => {
      dispatch(actions.setCat(cat));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
