import React from "react";
import PropTypes from "prop-types";

const VraagTeller = ({teller, vraagTotaal}) => {
  return (
    <div>
      Vraag <span>{teller}</span> van <span>{vraagTotaal}</span>
    </div>
  );
};

VraagTeller.propTypes = {
  teller: PropTypes.number.isRequired,
  vraagTotaal: PropTypes.number.isRequired
};

export default VraagTeller;
