import React, { useContext, useCallback } from 'react';
import Styled from 'styled-components';
import PropTypes from 'prop-types';
import { TotalContext } from './../../../../stores';

const TabItem = props => {
  const { setHotel, setTour } = useContext(TotalContext);
  console.log('TabItem');
  const TabBody = Styled.li`
  color: white;
  cursor: pointer;
  text-transform: uppercase;
  ${props.active && `border-bottom: 1px solid white;`}
  padding: .4em;
  margin: .6em;
  font-size: 1.1em;
  `;
  const changeTab = useCallback(() => {
    props.setCurrentTab(props.name);
    switch (props.name) {
      case 'hotel':
        setTour({});
        break;
      case 'tour':
        setHotel({});
        break;
      default:
        break;
    }
  });

  return <TabBody onClick={changeTab}>{props.name}</TabBody>;
};

TabItem.propTypes = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setCurrentTab: PropTypes.func.isRequired,
};

export default TabItem;
