import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import "./slide.css";

const items = [
  {
    src:
    "https://nomoreworkhorse.files.wordpress.com/2015/11/index1.jpg?w=829&h=363",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header"
  },
  {
    src:
    "https://i.pinimg.com/originals/14/d9/0d/14d90d9e0ca1e0a5bb7639242c2a4212.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header"
  },
  {
    src:
    "http://comicbuzz.com/wp-content/uploads/2018/07/skyscraper.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header"
  }
];

const Slide = () => (
  <div className="move">
    <UncontrolledCarousel items={items} />
  </div>
);

export default Slide;
