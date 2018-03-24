import React from "react";
import PropTypes from "prop-types";

const Question = ({content}) => {
  return <p>{content}</p>;
};

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
