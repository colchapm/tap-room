import React from 'react';
import PropTypes from "prop-types";


function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <div class="tooltip"><p><strong>Beer Name: </strong> {props.name}</p>
          <span class="tooltiptext">click to see details</span>
        </div>
        {/* <h3>{props.name}</h3>
        <h3>{props.brewer}</h3>
        <h3>{props.type}</h3>
        <h3>{props.abv}</h3>
        <h3>{props.price}</h3> */}
      </div>

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
  whenKegClicked: PropTypes.func
}

export default Keg;