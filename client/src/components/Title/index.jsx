import * as React from 'react';
import Styled from 'styled-components';

const Label = Styled.h1`
  color: black;
`;

const Title = ({ label }) => {
  return <Label>{label}</Label>;
};

export default Title;
