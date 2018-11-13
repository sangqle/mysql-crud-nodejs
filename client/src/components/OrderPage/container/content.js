import React from "react";
import GroupDate from "../components/groupDate";
import Schedule from "../components/schedule";
import GroupSeat from "../components/groupSeat";

const days = ["19/11", "20/11", "21/11"];
const times = ["9h", "10h", "11h"];
const seats = [1, 1, 0, 1, 0, 1, 0, 0];

const Content = props => {
  return (
    <div className="card-play">
      <GroupDate days={days} />
      <Schedule times={times} />
      <GroupSeat seats={seats} />
    </div>
  );
};

export default Content;
