import React from "react";

const Heading = props => {
  return (
    <div className="card card-aside">
      <a
        href="/"
        className="card-aside-column"
        style={{
          backgroundImage:
            "url('https://www.movienewsletters.net/photos/VNM_247729R1.jpg')"
        }}
      >
        {""}
      </a>
      <div className="card-body d-flex flex-column">
        <h4>
          <a href="/">Venom (2018)</a>
        </h4>
        <div className="text-muted ">
          When Eddie Brock acquires the powers of a symbiote, he will have to
          release his alter-ego "Venom" to save his life.
        </div>
        <div className="mt">
          <button type="button" className="btn  btn-pill btn-info">
            <i className="fe fe-message-circle mr-2" />
            View Trailer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
