import React from "react";
import PropTypes from "prop-types";

const Vraag = ({vraag}) => {
  return <h2>{vraag}</h2>;
};

Vraag.propTypes = {
  vraag: PropTypes.string.isRequired
};

export default Vraag;
