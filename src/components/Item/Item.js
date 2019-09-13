import React from "react";

const Item = props => {
  const data = props.itemData;
  const link = data.link && (
    <a href={data.link} target="_blank" rel="noopener noreferrer">
      {data.link}
    </a>
  );

  return (
    <div className="item">
      <h3>{data.title}</h3>
      {data.dateStart} – {data.place} {data.country}
      <br />
      {link}
    </div>
  );
};

export default Item;
