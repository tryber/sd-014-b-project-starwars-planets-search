import React, { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { options, comparisons } from '../utils';

const PlanetsContext = createContext({});

export function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [value, setValue] = useState('');
  const [column, setColumn] = useState(options[0]);
  const [comparison, setComparison] = useState(comparisons[0]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
  });

  const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetchPlanets = async () => {
    const response = await fetch(PLANETS_URL);
    const { results } = await response.json();
    setData(results);
  };

  useEffect(() => {
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
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default function usePlanets() {
  const context = useContext(PlanetsContext);
  return context;
}
