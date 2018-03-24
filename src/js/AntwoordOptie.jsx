import React from "react";
import PropTypes from "prop-types";

const AntwoordOptie = ({
  antwoordPersonage,
  antwoord,
  antwoordContent,
  onAntwoordSelected
}) => {
  return (
    <li>
      <input
        type='radio'
        name='radioGroup'
        checked={antwoordPersonage === antwoord}
        id={antwoordPersonage}
        value={antwoordPersonage}
        disabled={antwoord}
        onChange={onAntwoordSelected}
      />
      <label htmlFor={antwoordPersonage}>
        {antwoordContent}
      </label>
    </li>
  );
};

AntwoordOptie.propTypes = {
  antwoordPersonage: PropTypes.string.isRequired,
  antwoordContent: PropTypes.string.isRequired,
  antwoord: PropTypes.string.isRequired,
  onAntwoordSelected: PropTypes.func.isRequired
};

export default AntwoordOptie;
