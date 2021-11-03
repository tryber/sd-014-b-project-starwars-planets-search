import React, { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../provider/Provider';
import RenderTable from './RenderTable';

function Table() {
  const APIurl = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [loading, setLoading] = useState(false);
  const { setArray } = useContext(SearchContext);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const { results } = await fetch(APIurl)
        .then((response) => response.json());
      setArray(results);
    }
    getData();
    setLoading(false);
  }, [setArray]);

  return (
    <div>
      { loading && 'Carregando...'}
      <RenderTable />
    </div>
  );
}

export default Table;
