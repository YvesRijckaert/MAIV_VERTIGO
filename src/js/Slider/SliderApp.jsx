import React, { Component } from "react";
import Slide from "./Slide.jsx";
import CarouselLeftArrow from "./CarouselLeftArrow.jsx";
import CarouselRightArrow from "./CarouselRightArrow.jsx";
import CarouselSlideImage from "./CarouselSlideImage.jsx";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      slides: [],
    };
  }

  componentDidMount = () => {
    fetch(`./data/carousel.json`)
      .then(responseObject => responseObject.json())
      .then(this.parseJSON);
  };

  parseJSON = data => {
    this.setState({ slides: data });
  };

  goToSlide = index => {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide = e => {
    e.preventDefault();
    const { activeIndex, slides } = this.state;
    let index = activeIndex;
    let slidesLength = slides.length;
    if (index < 1) {
      index = slidesLength;
    }
    --index;
    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide = e => {
    e.preventDefault();
    const { activeIndex, slides } = this.state;
    let index = activeIndex;
    let slidesLength = slides.length - 1;
    if (index === slidesLength) {
      index = -1;
    }
    ++index;
    this.setState({
      activeIndex: index
    });
  }

  render() {
    return (
      <div className="carousel">
        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />
        <ul className="carousel-images">
          {this.state.slides.map((slide, index) =>
            <CarouselSlideImage
            key={index}
            index={index}
            activeIndex={this.state.activeIndex}
            img={slide.img}
            alt={slide.person} />
          )}
        </ul>
        <ul className="carousel-slides">
          {this.state.slides.map((slide, index) =>
            <Slide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>
        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />
      </div>
    );
  }
}

export default Carousel;
