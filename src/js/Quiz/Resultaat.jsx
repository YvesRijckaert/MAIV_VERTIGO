import React from "react";
import PropTypes from "prop-types";

const Resultaat = ({resultaat}) => {
  return (
    <p className="result">
      Jij komt het meest overeen met <strong>{resultaat}</strong>!
    </p>
  );
};

Resultaat.propTypes = {
  resultaat: PropTypes.string.isRequired
};

export default Resultaat;
