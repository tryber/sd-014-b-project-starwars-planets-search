import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';

export default function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchInput, updateSearchInput] = useState('');
  const [columnFilter, updateColumnFilter] = useState('population');
  const [comparisonFilter, updateComparisonFilter] = useState('');
  const [valueFilter, updateValueFilter] = useState(0);
  const [numberFilter, updateNumberFilter] = useState(false);

  const contextValue = {
    data,
    filteredData,
    filters: {
      filterByName: {
        name: searchInput,
      },
      filterByNumericValues: [
        { numberFilter,
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      ],
    },
    updateSearchInput,
    updateColumnFilter,
    updateComparisonFilter,
    updateValueFilter,
    updateNumberFilter,
    setFilteredData,
  };

  useEffect(() => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const APIfetch = async () => {
      const fetchAPI = await fetch(URL);
      const response = await fetchAPI.json();
      setData(response.results);
      setFilteredData(response.results);
    };
    APIfetch();
  }, []);

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
