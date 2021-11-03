import React, { useContext } from 'react';
import myContext from '../context/MyContext';
import FetchPlanets from '../api/ApiPlanets';

function Principal() {
  const { data } = useContext(myContext);
  console.log(data);
  return (
    <div>
      <FetchPlanets />
      <span>Hello, App!</span>
    </div>
  );
}

export default Principal;
