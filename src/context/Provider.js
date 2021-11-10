import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import useFetch from '../hooks/useFetch';

export default function Provider({ children }) {
  const [data, loading] = useFetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const [planetsToRender, setPlanetsToRender] = useState([]);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  // Consultei o repositório do colega Luiz Gustavo (Turma 14 - B) para realizar o segundo requisito, que filtra os planetas pelo nome
  useEffect(() => {
    const { filterByName: { name } } = filters.filters;
    setPlanetsToRender(data.filter((planet) => planet.name.includes(name)));
  }, [data, filters]);

  const contextValue = {
    data,
    loading,
    planets: planetsToRender,
    filters,
    setFilters,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
