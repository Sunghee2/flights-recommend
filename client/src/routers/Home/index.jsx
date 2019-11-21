import * as React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';

const Home = ({ match, history, location }) => {
  console.log(match);
  console.log(history);
  console.log(location);
  return (
    <div>
      <Link to="/plan/111">Plan</Link>
      <Title label="Hello World!" />
    </div>
  );
};

export default Home;
