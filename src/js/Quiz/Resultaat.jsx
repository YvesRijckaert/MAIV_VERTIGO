import React from "react";
import PropTypes from "prop-types";

const Resultaat = ({resultaat}) => {
  return (
    <div>
      Jij komt het meest overeen met <strong>{resultaat}</strong>!
    </div>
  );
};

Resultaat.propTypes = {
  resultaat: PropTypes.string.isRequired
};

export default Resultaat;
