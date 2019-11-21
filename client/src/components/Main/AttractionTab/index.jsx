import React, { useState } from 'react';
import Styled from 'styled-components';
import TabList from './TabList';
import AttractionList from './AttractionList';

const Section = Styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: .4em;
`;

const AttractionTab = _ => {
  const [currentTab, setCurrentTab] = useState('hotel');

  return (
    <Section>
      <TabList currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <AttractionList currentTab={currentTab} />
    </Section>
  );
};

export default AttractionTab;
