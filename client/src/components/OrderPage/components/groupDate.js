import React from "react";
import Date from "./date";

const GroupDate = ({ days }) => {
  return (
    <div className="form-group">
      <h4>Select date play</h4>
      <div className="selectgroup w-100">
        {days.map(day => (
          <Date day={day} />
        ))}
      </div>
    </div>
  );
};

export default GroupDate;
