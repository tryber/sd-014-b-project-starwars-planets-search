import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import { options, comparisons } from '../utils';

const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [value, setValue] = useState('');
  const [column, setColumn] = useState(options[0]);
  const [comparison, setComparison] = useState(comparisons[0]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch(PLANETS_URL);
        const { results } = await response.json();
        setData(results);
      } catch (error) {
        return error;
      }
    };
    fetchPlanets();
  }, []);

  return (
    <PlanetsContext.Provider
      value={ {
        data,
        setData,
        searchTerm,
        setSearchTerm,
        filters,
        setFilters,
        value,
        setValue,
        column,
        setColumn,
        comparison,
        setComparison,
        isFiltered,
        setIsFiltered,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
