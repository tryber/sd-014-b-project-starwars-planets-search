/* eslint-disable react-hooks/exhaustive-deps */
// Referência 01: Filtro para updatedColumns.
// src: https://stackoverflow.com/a/19957433

import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../api/starWarsPlanets';

export const PlanetFinderContext = createContext();

export default function PlanetFinderProvider({ children }) {
  const FILTER_COLUMN = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [filteredColumns, setFilteredColumns] = useState(FILTER_COLUMN);
  const [initialPlanets, setInitialPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState(initialPlanets);
  const [name, setName] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetchPlanets();
      setInitialPlanets(response.results);
      setFilteredPlanets(response.results);
    };
    getPlanets();
  }, []);

  useEffect(() => {
    setFilteredPlanets(
      initialPlanets.filter((planet) => {
        const planetName = planet.name.toLowerCase();
        const filter = name.toLowerCase();
        return planetName.includes(filter);
      }),
    );
  }, [name]);

  useEffect(() => {
    const columns = filterByNumericValues.map((filter) => filter.column);
    const updatedColumns = FILTER_COLUMN.filter(
      (filter) => !columns.includes(filter),
    );
    setFilteredColumns(updatedColumns);
  }, [filterByNumericValues]);

  useEffect(() => {
    setColumn(filteredColumns[0]);
  }, [filteredColumns]);

  useEffect(() => {
    let planets = initialPlanets;
    filterByNumericValues.forEach((element) => {
      switch (element.comparison) {
      case 'maior que':
        planets = planets
          .filter(
            (planet) => parseInt(planet[element.column], 10) > element.value,
          );
        break;
      case 'menor que':
        planets = planets
          .filter(
            (planet) => parseInt(planet[element.column], 10) < element.value,
          );
        break;
      case 'igual a':
        planets = planets
          .filter(
            (planet) => planet[element.column] === element.value,
          );
        break;
      default:
        break;
      }
    });
    setFilteredPlanets(planets);
  }, [filterByNumericValues]);

  const providerValue = {
    planets: filteredPlanets,
    columns: filteredColumns,
    numericValues: { column, comparison, value },
    filters: { filterByName: { name }, filterByNumericValues },
    setters: {
      setName,
      setFilterByNumericValues,
      setColumn,
      setComparison,
      setValue,
    },
  };

  return (
    <PlanetFinderContext.Provider value={ providerValue }>
      {children}
    </PlanetFinderContext.Provider>
  );
}

PlanetFinderProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
