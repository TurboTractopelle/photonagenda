import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Loading from "./components/Loading/Loading";
import * as actions from "./store/actions/actions";
import Agenda from "./components/Agenda/Agenda";
import Error from "./components/Error/Error";

class App extends Component {
  componentDidMount() {
    this.props.fetchAgenda();
  }

  render() {
    let display;
    if (this.props.loading) {
      display = <Loading />;
    } else if (this.props.error) {
      display = <Error error={this.props.error} />;
    } else {
      display = <Agenda />;
    }

    return (
      <div className="App">
        <h1>Agenda</h1>
        {display}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAgenda: () => dispatch(actions.fetchAgenda())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
