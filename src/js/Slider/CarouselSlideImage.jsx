import React, { Component } from "react";

class CarouselSlideImage extends Component {
  checkClassName = () => {
    const { index, activeIndex } = this.props;
    let className;
    switch (index) {
      case activeIndex:
        className = `carousel-slide carousel-slide-active`;
        break;
      case activeIndex + 1:
        className = `carousel-slide carousel-slide-semi-active`;
        break;
      case activeIndex - 1:
        className = `carousel-slide carousel-slide-semi-active`;
        break;
      default:
        className = `carousel-slide`;
    }
    if (activeIndex === 0 && index === 8) {
      className = `carousel-slide carousel-slide-semi-active`
    }

    if (activeIndex === 8 && index === 0) {
      className = `carousel-slide carousel-slide-semi-active`
    }
    return className;
  };

  render() {
    const { img, alt } = this.props;
    return (
      <li className={this.checkClassName()}>
        <picture className="carousel-slide-image">
          <source
            media="(min-width: 450px)"
            srcSet={`assets/img/${img}.webp`}
            type="image/webp"
          />
          <source
            media="(min-width: 450px)"
            srcSet={`assets/img/${img}.jpg`}
            type="image/jpg"
          />
          <img
            className="carousel-slide-image"
            height="250"
            width="250"
            alt={alt}
          />
        </picture>
      </li>
    );
  }
}

export default CarouselSlideImage;
