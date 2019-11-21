import React, { useContext, useCallback } from 'react';
import styles from 'styled-components';
import PropTypes from 'prop-types';
import { IterContext, TotalContext } from '../../../../stores';

const Card = styles.div`
  display: flex;
  flex-direction: column;
  margin-left: .4em;
`;

const Info = styles.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .3em;
  background: rgba(255,255,255, 0.7);
`;

const Name = styles.div`
  color: #2c3e50;
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

const Score = styles.div`
  font-size: 0.8em;
`;

const Thumbnail = styles.img`
  color: white;
  background-repeat: no-repeat;
  background-size: contain;
  height: 6em;
`;
const TourPlan = ({ index, _id, name, price, rank, image }) => {
  const { setDays } = useContext(IterContext);
  const { currentHotel, currentTour } = useContext(TotalContext);
  const deleteTour = useCallback(() => {
    if (Object.keys(currentHotel).length === 0 && Object.keys(currentTour).length === 0) {
      console.log('현재 투어 삭제');
      setDays(prev =>
        prev.map(day => {
          if (day.index === index) {
            const { tours } = day;
            return Object.assign(day, { tours: tours.filter(tour => tour._id !== _id) });
          }
          return day;
        }),
      );
    }
  });

  return (
    <Card onClick={deleteTour}>
      <Thumbnail src={image} alt={name} />
      <Info>
        <Name>{name}</Name>
        <Score>
          <Price>\{price}</Price>
          <Rank>{rank}</Rank>
        </Score>
      </Info>
    </Card>
  );
};

TourPlan.propTypes = {
  index: PropTypes.number.isRequired,
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default TourPlan;
