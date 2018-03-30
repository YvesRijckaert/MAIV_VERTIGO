import React from "react";
import PropTypes from "prop-types";

const Vraag = ({vraag}) => {
  return <p className="question-vraag">{vraag}</p>;
};

Vraag.propTypes = {
  vraag: PropTypes.string.isRequired
};

export default Vraag;
