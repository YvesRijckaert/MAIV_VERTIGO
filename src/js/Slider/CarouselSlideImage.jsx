import React from "react";
import PropTypes from "prop-types";

const CarouselSlideImage = ({ img, alt }) => {
  return (
    <picture class="carousel-slide-image">
      <source media="(min-width: 450px)" srcSet={ `assets/img/${img}.webp` } type="image/webp" />
      <source media="(min-width: 450px)" srcset={ `assets/img/${img}.jpg` } type="image/jpg" />
      <img class="carousel-slide-image" height="250" width="250" alt={alt} />
    </picture>
  );
};

CarouselSlideImage.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default CarouselSlideImage;
