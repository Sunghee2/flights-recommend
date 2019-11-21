import React, { useState } from 'react';
import Styled from 'styled-components';
import TabList from './TabList';
import AttractionList from './AttractionList';

const Body = Styled.div`
`;

const AttractionTab = _ => {
  const [currentTab, setCurrentTab] = useState('hotel');

  return (
    <Body>
      <TabList currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <AttractionList currentTab={currentTab} />
    </Body>
  );
};

export default AttractionTab;
