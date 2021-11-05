/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/fetchPlanets';
import PlanetContext from '../Context/PlanetContext';

export default function PlanetProvider({ children }) {
  const allColumnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [planets, setPlanets] = useState([]);
  const [name, setNames] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparision, setComparision] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterByNumericValues, setNumericValues] = useState([]);
  const [filteredColumnOptions, setOptions] = useState(allColumnOptions);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetchPlanets();
      setPlanets(response.results);
      setFilteredPlanets(response.results);
    };
    getPlanets();
  }, []);

  useEffect(() => {
    if (name === '') return setFilteredPlanets(planets);
    const planetsWithFilter = planets
      .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
    setFilteredPlanets(planetsWithFilter);
  }, [name]);

  useEffect(() => {
    const columns = filterByNumericValues.map((filter) => filter.column);
    const filtersToBeKept = allColumnOptions
      .filter((options) => !columns.includes(options)); // arrays cujos quais não têm a coluna já filtrada
    setOptions(filtersToBeKept);
  }, [filterByNumericValues]);

  useEffect(() => {
    setColumn(filteredColumnOptions[0]);
  }, [filteredColumnOptions]);

  const planetState = {
    setNames,
    setColumn,
    setComparision,
    setValue,
    setNumericValues,
    column,
    filteredColumnOptions,
    comparision,
    value,
    filteredPlanets,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues,
    },
  };

  return (
    <PlanetContext.Provider value={ planetState }>
      {children}
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
