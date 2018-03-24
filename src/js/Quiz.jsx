import React from "react";
import Vraag from "./Vraag.jsx";
import VraagTeller from "./VraagTeller.jsx";
import AntwoordOptie from "./AntwoordOptie.jsx";
import PropTypes from "prop-types";

const Quiz = ({antwoord, vraagId, vraagTotaal, vraag, antwoordMogelijkheden, onAntwoordSelected}) => {

  const renderAntwoordMogelijkheden = key => (
    <AntwoordOptie
      key={key.content}
      antwoordContent={key.content}
      personage={key.type}
      antwoord={antwoord}
      vraagId={vraagId}
      onAntwoordSelected={onAntwoordSelected}
    />
  );

  return (
    <div>
      <VraagTeller teller={vraagId} totaal={vraagTotaal} />
      <Vraag content={vraag} />
      <ul>
        {antwoordMogelijkheden.map(renderAntwoordMogelijkheden)}
      </ul>
    </div>
  );
};

Quiz.propTypes = {
  antwoord: PropTypes.string.isRequired,
  vraagId: PropTypes.number.isRequired,
  vraagTotaal: PropTypes.number.isRequired,
  vraag: PropTypes.string.isRequired,
  antwoordMogelijkheden: PropTypes.array.isRequired,
  onAntwoordSelected: PropTypes.func.isRequired
};

export default Quiz;
