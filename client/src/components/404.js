import React from "react";
import "./404.scss";

const Background = "http://i.giphy.com/l117HrgEinjIA.gif";
const NotFound = () => {
  return (
    <div className="FourOhFour">
      <div
        className="bg"
        style={{
          backgroundImage: `url( ${Background} )`
        }}
      />

      <div className="code">404</div>
    </div>
  );
};

export default NotFound;
