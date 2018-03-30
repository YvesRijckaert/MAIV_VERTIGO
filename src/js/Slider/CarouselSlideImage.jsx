import React, { Component } from "react";

class CarouselSlideImage extends Component {
  checkClassName = () => {
    const { index, activeIndex } = this.props;
    let className;
    let order;
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
      className = `carousel-slide carousel-slide-semi-active`;
      /*zet ook de flex order van het element met index 8 op 3*/
      order = 3;
    }

    if (activeIndex === 0 && index === 0) {
      /*zet ook de flex order van het element met index 0 op 2*/
      order = 2;
    }

    if (activeIndex === 8 && index === 0) {
      className = `carousel-slide carousel-slide-semi-active`;
      /*zet ook de flex order van het element met index 0 op 3*/
      order = 3;
    }
    if (activeIndex === 8 && index === 8) {
      /*zet ook de flex order van het element met index 8 op 2*/
      order = 2;
    }
    return [className, order];
  };

  render() {
    const { img, alt } = this.props;
    return (
      <li
        className={this.checkClassName()[0]}
        style={{ order: this.checkClassName()[1] }}
      >
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
