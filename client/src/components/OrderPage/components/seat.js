import React from "react";

const Seat = ({ seat }) => {
  return seat === 1 ? (
    <div className="col-auto">
      <label className="colorinput">
        <input
          name="color"
          type="checkbox"
          value="azure"
          className="colorinput-input"
        />
        <span className="colorinput-color bg-azure" />
      </label>
    </div>
  ) : (
    <div className="col-auto">
      <label className="colorinput">
        <input
          name="color"
          type="checkbox"
          value="orange"
          className="colorinput-input"
          disabled
        />
        <span className="colorinput-color bg-orange" />
      </label>
    </div>
  );
};

export default Seat;
