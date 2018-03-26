import React from "react";
import PropTypes from "prop-types";

const VraagTeller = ({teller, totaal}) => {
  return (
    <div>
      Vraag <span>{teller}</span> van <span>{totaal}</span>
    </div>
  );
};

VraagTeller.propTypes = {
  teller: PropTypes.number.isRequired,
  totaal: PropTypes.number.isRequired
};

export default VraagTeller;
