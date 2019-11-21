import React from 'react';
import PropTypes from 'prop-types';

const HotelItem = ({ name, price, rate, image }) => {
  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

HotelItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default HotelItem;
