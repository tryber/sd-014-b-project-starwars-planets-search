import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  console.log(data);
  return (
    <div>
      <h1>Tabela de Planetas</h1>
      { data.length > 0 ? <table></table> : 'Loading...'}
    </div>
  );
}

export default Table;
