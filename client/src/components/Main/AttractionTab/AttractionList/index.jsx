import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_RECOMMAND } from './query';
import { CityContext } from './../../../../stores';

const AttractionList = _ => {
  const [getRecommand, { called, loading, error, data }] = useLazyQuery(GET_RECOMMAND, {
    variables: { airport },
  });
  const { city } = useContext(CityContext);

  useEffect(() => {
    if (city) {
      getRecommand();
    }
  }, [city]);

  if (called && loading) return <p>Loading ...</p>;
  if (error) return <p>error</p>;

  return (
    <div>
      <div></div>
    </div>
  );
};

export default AttractionList;
