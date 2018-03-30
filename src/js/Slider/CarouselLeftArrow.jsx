import React from "react";
import PropTypes from "prop-types";

const CarouselLeftArrow = ({ onClick }) => {
  return (
    <button
      className="carousel-arrow carousel-arrow-left"
      onClick={onClick}
    />
  );
};

CarouselLeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CarouselLeftArrow;
