import React from "react";

const Item = props => {
  console.log(props);

  const data = props.itemData;
  const link = data.link && (
    <a href={data.link} target="_blank" rel="noopener noreferrer">
      {data.link}
    </a>
  );

  return (
    <div className="Item">
      <span className="item-cat">{data.cat}</span>
      <h3>{data.title}</h3>
      {data.displayDate} – {data.place} {data.country}
      <br />
      {link}
    </div>
  );
};

export default Item;
