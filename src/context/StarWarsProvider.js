import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

const PLANET_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState('');
  const [columnValue, setColumnValue] = useState('population');
  const [comparisonValue, setComparisonValue] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  // Dica do Matheus Gonzaga - 14B, decidi colocar também no meu
  const [loading, setLoading] = useState([]);

  const fetchPlanets = async () => {
    setLoading(true);
    const response = await fetch(PLANET_API);
    const { results } = await response.json(); // Dica do Glauco Lomenha, 14B
    setData(results);
    setLoading(false);
  };

  // Fetch data from API, like DidMount
  useEffect(() => {
    fetchPlanets();
  }, []);

  // Declaration of an object, to provider context
  const starWarsContext = {
    data,
    loading,
    filteredSearch,
    setFilteredSearch,
    columnValue,
    setColumnValue,
    comparisonValue,
    setComparisonValue,
    valueFilter,
    setValueFilter,
    filters,
    setFilters,
  };

  return (
    <main>
      <StarWarsContext.Provider value={ starWarsContext }>
        { children }
      </StarWarsContext.Provider>
    </main>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StarWarsProvider;
