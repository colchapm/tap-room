import React from 'react';
import PropTypes from "prop-types";


function Keg(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.brewer}</h3>
      <h3>{props.type}</h3>
      <h3>{props.abv}</h3>
      <h3>{props.price}</h3>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  type: PropTypes.string,
  abv: PropTypes.number,
  price: PropTypes.number,
  pintsRemaining: PropTypes.number,
  id: PropTypes.string,
}

export default Keg;