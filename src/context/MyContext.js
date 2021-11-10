/* eslint-disable no-const-assign */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import planetsApi from '../components/planets';

export const PlanetsSearchContext = createContext();

export default function PlanetsSearchProvider({ children }) {
  const [initialPlanets, setInitialPlanets] = useState([]);
  const [filteredPlantes, setFilteredPlanets] = useState(initialPlanets);
  const [name, setName] = useState('');

  const FILTER_COLUMN = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [column, setColumn] = useState('population');
  const [filteredColumn, setFilteredColumn] = useState([FILTER_COLUMN]);
  const [filterByNumericValues, setFilterBynumericValues] = useState([]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');

  useEffect(() => {
    const planets = async () => {
      const result = await planetsApi();
      setInitialPlanets(result.results);
      setFilteredPlanets(result.results);
    };
    planets();
  }, []);

  useEffect(() => {
    setFilteredPlanets(
      initialPlanets.filter((planet) => {
        const planetName = planet.name.toLowerCase();
        const filtered = name.toLowerCase();
        return planetName.includes(filtered);
      }),
    );
  }, [name]);

  useEffect(() => {
    const columns = filterByNumericValues.map((filter) => filter.column);
    const newColumns = FILTER_COLUMN.filter((filter) => !columns.includes(filter));
    setFilteredColumn(newColumns);
  }, [filterByNumericValues]);

  useEffect(() => {
    setColumn(filteredColumn[0]);
  }, [filteredColumn]);

  useEffect(() => {
    let planets = initialPlanets;
    filterByNumericValues.forEach((element) => {
      switch (element.comparison) {
      case 'maior que':
        planets = planets.filter(
          (planet) => parseInt(planet[element.column], 10) > element.value,
        );
        break;
      case 'menor que':
        planets = planets.filter(
          (planet) => parseInt(planet[element.column], 10) < element.value,
        );
        break;
      case 'igual a':
        planets = planets.filter(
          (planet) => planet[element.column] === element.value,
        );
        break;
      default:
        break;
      }
    });
    setFilteredPlanets(planets);
  }, [filterByNumericValues]);

  const valuE = {
    columns: filteredColumn,
    planets: filteredPlantes,
    filters: {
      filterByName: { name },
      filterByNumericValues,
    },
    numericValues: { column, comparison, value },
    setters: {
      setName,
      setColumn,
      setComparison,
      setValue,
      setFilterBynumericValues,
    },
  };

  return (
    <PlanetsSearchContext.Provider value={ valuE }>
      {children}
    </PlanetsSearchContext.Provider>
  );
}

PlanetsSearchProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
