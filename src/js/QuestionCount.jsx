import React from "react";
import PropTypes from "prop-types";

const QuestionCount = ({teller, totaal}) => {
  return (
    <div>
      Vraag <span>{teller}</span> van <span>{totaal}</span>
    </div>
  );
};

QuestionCount.propTypes = {
  teller: PropTypes.number.isRequired,
  totaal: PropTypes.number.isRequired
};

export default QuestionCount;
