import React, { useState, useEffect } from 'react';
import RenderTable from './RenderTable';

function Table() {
  const APIurl = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [loading, setLoading] = useState(false);
  const [array, setArray] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const { results } = await fetch(APIurl)
        .then((response) => response.json());
      setArray(results);
    }
    getData();
    setLoading(false);
  }, []);

  return (
    <div>
      { loading && 'Carregando...'}
      <RenderTable array={ array } />
    </div>
  );
}

export default Table;
