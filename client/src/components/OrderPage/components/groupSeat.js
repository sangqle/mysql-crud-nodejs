import React from "react";
import Seat from "./seat";
import Note from "../components/note";

const groupSeat = ({ seats }) => {
  return (
    <div className="form-group">
      <h4>Select seat</h4>
      <div className="row">
        <div className="col-12 col-md-8">
          <div className="row gutters-xs">
            {seats.map(seat => (
              <Seat seat={seat} />
            ))}
          </div>
        </div>
        <Note />
      </div>
    </div>
  );
};

export default groupSeat;
