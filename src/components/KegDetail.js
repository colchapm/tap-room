import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg } = props;
  return (
    <React.Fragment>
      <h2>Keg Detail</h2>
      <p><strong>Name: </strong> {keg.name}</p>
      <p><strong>Brewery: </strong> {keg.brewer}</p>
      <p><strong>Type: </strong> {keg.type}</p>
      <p><strong>ABV%: </strong> {keg.abv}</p>
      <p><strong>Price (pint): </strong> ${keg.price}</p>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;

