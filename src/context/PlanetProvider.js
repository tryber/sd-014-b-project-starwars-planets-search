import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataRestore, setDataRestore] = useState([]);
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [filterSearch, setFilterSearch] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  async function PlanetAPI() {
    const urlFetch = await fetch(URL);
    const response = await urlFetch.json();
    const { results } = response;
    const resultApi = results.filter((result) => delete result.residents);
    setData(resultApi);
    setDataRestore(resultApi);
  }

  useEffect(() => {
    PlanetAPI();
  }, []);

  // local de pesquisa para resolução do requisito 2
  // https://www.youtube.com/watch?v=mZvKPtH9Fzo

  function filterData(name) {
    const dataFilter = [...dataRestore];
    return dataFilter.filter((value) => value
      .name.toLowerCase().includes(name.toLowerCase()));
  }

  function handleChange(string) {
    setData(filterData(string));
    setFilterSearch({
      filters: {
        filterByName: {
          name: string,
        },
      },
    });
  }

  const newObject = {
    data,
    handleChange,
    filterSearch,
  };

  return (
    <PlanetContext.Provider value={ newObject }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
