import React from "react";
import PropTypes from "prop-types";
import Vraag from "./Vraag.jsx";
import VraagTeller from "./VraagTeller.jsx";
import AntwoordOptie from "./AntwoordOptie.jsx";

const Quiz = ({
  antwoord,
  antwoordOpties,
  vraag,
  vraagId,
  vraagTotaal,
  onAntwoordSelected
}) => {
  const renderAnswerOptions = antwoordObject => (
    <AntwoordOptie
      key={antwoordObject.content}
      antwoordContent={antwoordObject.content}
      antwoordPersonage={antwoordObject.personage}
      antwoord={antwoord}
      vraagId={vraagId}
      onAntwoordSelected={onAntwoordSelected}
    />
  );

  return (
    <div key={vraagId}>
      <VraagTeller teller={vraagId} totaal={vraagTotaal} />
      <Vraag vraag={vraag} />
      <ul>{antwoordOpties.map(renderAnswerOptions)}</ul>
    </div>
  );
};

Quiz.propTypes = {
  antwoord: PropTypes.string.isRequired,
  antwoordOpties: PropTypes.array.isRequired,
  teller: PropTypes.number.isRequired,
  vraag: PropTypes.string.isRequired,
  vraagId: PropTypes.number.isRequired,
  vraagTotaal: PropTypes.number.isRequired,
  onAntwoordSelected: PropTypes.func.isRequired
};

export default Quiz;
