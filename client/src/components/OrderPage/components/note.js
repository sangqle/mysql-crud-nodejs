import React from "react";

const Note = props => {
  return (
    <div className="col-12 col-md-4">
      <div className="row gutters-xs">
        <div className="col-auto">
          <label className="colorinput ">
            <span className="colorinput-color bg-orange" />
            <span className="mr-seat-info">Reserved</span>
          </label>
        </div>
      </div>
      <div className="row gutters-xs">
        <div className="col-auto">
          <label className="colorinput ">
            <span className="colorinput-color bg-azure" />
            <span className="mr-seat-info">Free</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Note;
