import React, { useState, useEffect, useContext } from 'react';
import SearchContext from '../provider/SearchContext';
import RenderTable from './RenderTable';

function Table() {
  const APIurl = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [loading, setLoading] = useState(false);
  const { setData } = useContext(SearchContext);

  useEffect(() => {
    setLoading(true);
    async function getData() {
      const { results } = await fetch(APIurl)
        .then((response) => response.json());
      setData(results);
    }
    getData();
    setLoading(false);
  }, [setData]);

  return (
    <div>
      { loading && 'Carregando...'}
      <RenderTable />
    </div>
  );
}

export default Table;
