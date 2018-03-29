import React from "react";
import PropTypes from "prop-types";

const Slide = ({ index, activeIndex, slide }) => {
  return (
    <li
      className={
        index === activeIndex
          ? "carousel-slide carousel-slide-active"
          : "carousel-slide"
      }
    >
      <h3 className="carousel-slide-person">{slide.person}</h3>
      <p className="carousel-slide-bodycoyp">{slide.bodycopy}</p>
    </li>
  );
};

Slide.propTypes = {
  index: PropTypes.number.isRequired,
  activeIndex: PropTypes.number.isRequired,
  slide: PropTypes.object.isRequired
};

export default Slide;
