import React from "react";

const Error = props => {
  console.log(props);
  return <div>Error : {props.error.message}</div>;
};

export default Error;
