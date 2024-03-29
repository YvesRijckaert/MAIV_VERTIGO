import React from "react";
import PropTypes from "prop-types";

const CarouselLeftArrow = ({ onClick }) => {
  return (
    <button
      className="carousel-arrow carousel-arrow-right"
      onClick={onClick}
    />
  );
};

CarouselLeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default CarouselLeftArrow;
