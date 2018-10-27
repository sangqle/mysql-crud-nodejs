import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import "./slide.css";

const items = [
  {
    src: "https://lh5.googleusercontent.com/En6uE9TDoOzjvroeRXnMRWe9LLHqSYEPFb8G0pjNRE9JBMkXAYN-Wfoi_BcPagxOTb45MFJNqmLAfwDKdmX_=w1280-h689-rw"
  },
  {
    src:
      "https://lh5.googleusercontent.com/AQEm4WVORoCvHEaq8v03pz3zLJ5q3TS4y4wc5JxdxlIngp12FTpItFtvQ59KPLV_k2l51yxQjag16v5pUXf3=w1280-h689-rw"
  },
  {
    src:
      "https://lh6.googleusercontent.com/TODNtrKGaIxkN1bIqHVk34CZA6-PouFr4JeUhq4ncTlo1xSbCjmjj-xLqs0-XUhK7uOIUzAtTf2qo-Q2xljQ=w1280-h689-rw"
  },
  {
    src:
      "https://lh6.googleusercontent.com/N7duMLV0CedhV3q4-8g6H2wGUsutwkEelpK4LbT4EYhXRtVxk5gUJptW4PHi0aa2iUeapT7p3J7estpIykcK=w1280-h689-rw"
  }
];

class Slide extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img
            src={item.src}
            alt={item.altText}
            width={"100%"}
            height={"526"}
          />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <div className="move">
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </div>
    );
  }
}

export default Slide;
