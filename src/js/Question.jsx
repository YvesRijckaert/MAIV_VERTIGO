import React from "react";
import PropTypes from "prop-types";

const Question = ({vraag}) => {
  return <p>{vraag}</p>;
};

Question.propTypes = {
  vraag: PropTypes.string.isRequired
};

export default Question;
