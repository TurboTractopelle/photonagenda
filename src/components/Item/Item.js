import React from "react";
// @ts-ignore
import { preparse, parse as dateParser, format } from "date-and-time";

const Item = props => {
  const data = props.itemData;
  const link = data.link && (
    <a href={data.link} target="_blank" rel="noopener noreferrer">
      {data.link}
    </a>
  );

  let displayDate;
  const d1 = data.dateStart
    ? preparse(data.dateStart, "YYYY-MM-DD HH:mm:ss")
    : {};
  const d2 = data.dateEnd ? preparse(data.dateEnd, "YYYY-MM-DD HH:mm:ss") : {};

  console.log(data.dateStart, d1);
  console.log(data.dateEnd, d2);

  // gérer affichage des dates
  // si pas de date de fin
  if (!data.dateStart) {
    displayDate = "";
  } else if (!data.dateEnd) {
    const objDateStart = dateParser(data.dateStart, "YYYY-MM-DD HH:mm:ss");
    // @ts-ignore
    displayDate = format(objDateStart, "DD MMM. YYYY");
  } else {
    const objDateStart = dateParser(data.dateStart, "YYYY-MM-DD HH:mm:ss");
    const objDateEnd = dateParser(data.dateEnd, "YYYY-MM-DD HH:mm:ss");
    // compare month
    if (d1.M !== d2.M) {
      displayDate =
        // @ts-ignore
        format(objDateStart, "DD MMM.") +
        "-" +
        // @ts-ignore
        format(objDateEnd, "DD MMM. YYYY");
    } else {
      displayDate =
        // @ts-ignore
        format(objDateStart, "DD") +
        "-" +
        // @ts-ignore
        format(objDateEnd, "DD MMM. YYYY");
    }
  }

  return (
    <div className="Item">
      <span className="item-cat">{data.cat}</span>
      <h3>{data.title}</h3>
      {displayDate} – {data.place} {data.country}
      <br />
      {link}
    </div>
  );
};

export default Item;
