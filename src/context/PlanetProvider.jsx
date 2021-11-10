import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';
import fetchPlanets from '../services/planetApi';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]); // esta variavel e função vao armazenar
  // o retorno da API e usar para exibir os planetas
  const [filterName, setFilterName] = useState('');
  const [filterColumn, setFilterColumn] = useState('population');
  const [filterComparison, setFilterComparison] = useState('maior que');
  const [filterValue, setFilterValue] = useState('100000');

  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: filterName,
      },
      filterByNumericValues: [
        {
          column: filterColumn,
          comparison: filterComparison,
          value: filterValue,
        },
      ],
    },
  });

  async function requestApiPlanet() {
    const results = await fetchPlanets();
    setPlanets(results); // a função que define o armazenamento dos planetas(dados da api)
    // como estado inicial da const "planets"
  }

  useEffect(() => {
    requestApiPlanet();
  }, []);

  const contextValue = {
    planets,
    setPlanets,
    filterName,
    setFilterName,
    filter,
    setFilter,
    filterColumn,
    setFilterColumn,
    filterComparison,
    setFilterComparison,
    filterValue,
    setFilterValue,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
// Context é o lugar de armazenamento, é simples e curto (atalho de memória?)
// o provider fornece as informaçoes pro context que vai repassar as informaçoes
// dos estados definidos para os components que invocarem os estados e funçoes
// do context, fornecidas pelo provider
