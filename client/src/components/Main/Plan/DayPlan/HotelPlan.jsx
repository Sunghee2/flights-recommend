import React, { useContext, useCallback } from 'react';
import styles from 'styled-components';
import PropTypes from 'prop-types';
import { TotalContext } from '../../../../stores';

const HotelPlan = ({ _id, name, price, rate, image }) => {
  const Thumbnail = styles.div`
        background-image: url(${image});
        color: white;
        background-repeat: no-repeat;
        background-size: contain;
    `;

  const deleteHotel = useCallback(() => {
    console.log('현재 호텔 삭제');
    // setHotel({ _id, name, price, rate, image });
  });

  return (
    <Thumbnail onClick={deleteHotel}>
      <div>{name}</div>
      <div>{price}</div>
      <div>{rate}</div>
    </Thumbnail>
  );
};

HotelPlan.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default HotelPlan;
