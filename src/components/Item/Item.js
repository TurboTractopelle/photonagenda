import React from "react";

const Item = props => {
  const link = props.link && (
    <a href={props.link} target="_blank">
      {props.link}
    </a>
  );

  return (
    <div className="item">
      <h3>{props.title}</h3>
      {props.dateStart} – {props.place} {props.country}
      <br />
      {link}
    </div>
  );
};

export default Item;
