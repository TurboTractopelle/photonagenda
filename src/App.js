import React, { Component } from "react";
import "./App.css";
import List from "./components/List/List";
import Nav from "./components/Nav/Nav";
import { connect } from "react-redux";
import Loading from "./components/Loading/Loading";

class App extends Component {
  render() {
    const loading = this.props.loading && <Loading />;

    return (
      <div className="App">
        <h1>Agenda</h1>
        {loading}
        <List />
        <Nav />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
