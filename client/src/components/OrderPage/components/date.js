import React from "react";

const renderDate = ({ day }) => {
  return (
    <label className="selectgroup-item">
      <input
        type="radio"
        name="value"
        value="50"
        className="selectgroup-input"
      />
      <span className="selectgroup-button">{day}</span>
    </label>
  );
};

export default renderDate;
