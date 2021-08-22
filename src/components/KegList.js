import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

// const dummyData = [
//   {
//     name: 'Pallet Jack IPA',
//     brewer: 'Barley Browns',
//     type: 'IPA',
//     abv: 7.7,
//     price: 7,
//   },
//   {
//     name: 'Lunch',
//     brewer: 'Maine Beer Company',
//     type: 'IPA',
//     abv: 7.2,
//     price: 8,
//   },
//   {
//     name: 'Dinner',
//     brewer: 'Maine Beer Company',
//     type: 'DIPA',
//     abv: 8.7,
//     price: 8,
//   },
// ]

function KegList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.kegList.map((keg, index) =>
      <Keg name={keg.name}
        brewer={keg.brewer}
        type={keg.type}
        abv={keg.abv}
        price={keg.price}
        key={index}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array
}

export default KegList;


