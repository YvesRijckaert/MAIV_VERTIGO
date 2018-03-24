import React from "react";
import PropTypes from "prop-types";

const AntwoordOptie = ({
  personage,
  antwoord,
  antwoordContent,
  onAntwoordSelected
}) => {
  return (
    <li className='answerOption'>
      <input
        type='radio'
        checked={personage === antwoord} //checked is true als het personage = antwoord, false als het niet zo is
        id={personage}
        value={personage}
        disabled={antwoord}
        onChange={onAntwoordSelected}
      />
      <label  htmlFor={personage}>
        {antwoordContent}
      </label>
    </li>
  );
};

AntwoordOptie.propTypes = {
  personage: PropTypes.string.isRequired,
  antwoordContent: PropTypes.string.isRequired,
  antwoord: PropTypes.string.isRequired,
  onAntwoordSelected: PropTypes.func.isRequired
};

export default AntwoordOptie;
