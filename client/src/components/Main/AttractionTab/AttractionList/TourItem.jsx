import React, { useContext, useCallback } from 'react';
import styles from 'styled-components';
import PropTypes from 'prop-types';
import { TotalContext } from './../../../../stores';

const Container = styles.div`
  background: white;
  border-radius: .8em;
  display: flex;
  justifyContent: between-space;
  padding: 1em;
`;
const Info = styles.div`
`;

const Name = styles.div`
  font-size: 1.2em;
`;
const Price = styles.div`
  font-size: 1.1em;
  margin: 0.4em 0;
  color: #fe5d41;
`;
const Rank = styles.div`
  color: #666;
`;

const Thumbnail = styles.img`
  margin-left: auto;
  height: 4.1em;
`;

const TourItem = ({ _id, name, price, rank, image }) => {
  const { setTour } = useContext(TotalContext);

  const selectTour = useCallback(() => {
    console.log('현재 투어 변경');
    setTour({ _id, name, price, rank, image });
  });

  return (
    <Container onClick={selectTour}>
      <Info>
        <Name>{name}</Name>
        <Price>\{price}</Price>
        <Rank>{rank}</Rank>
      </Info>
      <Thumbnail src={image} alt={name} />
    </Container>
  );
};

TourItem.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default TourItem;
