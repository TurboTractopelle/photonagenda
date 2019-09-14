import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/actions";

class Item extends Component {
  render() {
    const data = this.props.itemData;
    const link = data.link && (
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        {data.link}
      </a>
    );
    return (
      <div className="Item">
        <span className="item-cat" onClick={this.props.setCat(data.cat)}>
          {data.cat}
        </span>
        <h3>{data.title}</h3>
        {data.displayDate} – {data.place} {data.country}
        <br />
        {link}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCat: cat => () => dispatch(actions.setCat(cat))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Item);
