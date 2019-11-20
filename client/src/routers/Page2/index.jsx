import * as React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';

const Page2 = ({ history }) => {
  return (
    <div>
      <a onClick={history.goBack}>Previous Page</a>
      <Link to="/">Home</Link>
      <Link to="/page1">Page 1</Link>
      <Title label="Page 2" />
    </div>
  );
};

export default Page2;
