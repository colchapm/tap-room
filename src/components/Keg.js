import React from 'react';

function Keg(){
  const kegOne = "Barley Browns";
  const kegTwo = "Tubular";
  return (
    <React.Fragment>
      <h3>{kegOne} and {kegTwo}</h3>
    </React.Fragment>
  );
}

export default Keg;