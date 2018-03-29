import React, { Component } from "react";

class CarouselSlideImage extends Component {
  checkClassName = () => {
    const { index, activeIndex } = this.props;
    let className;
<<<<<<< HEAD
    /* switch */
    /* als de index gelijk is aan active index dan moet opacity 1 zijn */
    /* als de index 1tje kleiner of 1tje groter is dan active index dan moet opacity .5 zijn */
    /* default: display: none */
=======
>>>>>>> d7612fe4a54bb1e98c605e477c2dbfad1b32cf98
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
<<<<<<< HEAD
    // index === activeIndex
    //   ? (className = "carousel-slide carousel-slide-active")
    //   : (className = "carousel-slide");
=======
>>>>>>> d7612fe4a54bb1e98c605e477c2dbfad1b32cf98
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
