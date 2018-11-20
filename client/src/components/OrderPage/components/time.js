import React from "react";

const Time = ({ time }) => {
  return (
    <label className="selectgroup-item">
      <input
        type="radio"
        name="icon-input"
        value="2"
        className="selectgroup-input"
      />
      <span className="selectgroup-button selectgroup-button-icon p-10">
        <i className="fe fe-moon icon-r" />
        {time}{" "}
      </span>
    </label>
  );
};

export default Time;
