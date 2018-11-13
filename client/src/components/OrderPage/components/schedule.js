import React from "react";
import Time from "./time";

const Schedule = ({ times }) => {
  return (
    <div className="form-group">
      <h4>Selected schedule</h4>
      <div className="selectgroup selectgroup-pills">
        {times.map(time => (
          <Time time={time} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
