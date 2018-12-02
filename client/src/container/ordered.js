import React from "react";

const Ordered = ({ State }) => {
  State.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  }).map(val => {
    return (
      <div className="order grid-container">
        <div className="order col-sm">{val.id_order}</div>
        <div className="order col-sm">{val.name}</div>
        <div className="order col-sm">{val.title}</div>
        <div className="order col-sm">{val.date}</div>
        <div className="order col-sm">{val.time}</div>
        <div className="order col-sm">{val.id_seat}</div>
        <div className="order col-sm">{val.price}.000 VND</div>
        <div className="order col-sm">{val.status}</div>
        <div className="order col-sm">{val.time_order}</div>
      </div>
    );
  });
};

export default Ordered;
