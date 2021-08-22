import React from 'react';
import PropTypes from "prop-types";


function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <div class="tooltip"><p><strong>Beer Name: </strong> {props.name}</p>
          <span class="tooltiptext">click to see details</span>
        </div>
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
  whenKegClicked: PropTypes.func,
  onClickingPour: PropTypes.func
}

export default Keg;