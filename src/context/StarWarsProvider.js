import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import starWarsAPI from '../services/starWarsAPI';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filtered, setFiltered] = useState(data);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  const getPlanets = async () => {
    setIsFetching(true);
    const planets = await starWarsAPI();
    setData(planets.results);
    setFiltered(planets.results);
    setIsFetching(false);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  const setFilterByName = (value) => {
    setFilters({
      ...filters,
      filterByName: {
        ...filters.filterByName,
        name: value,
      },
    });
  };

  useEffect(() => {
    const { filterByName: { name } } = filters;
    const filter = data.filter((planet) => planet.name.includes(name));
    setFiltered(filter);
  }, [data, filters, filters.filterByName.name]);

  const setFilterByNumericValues = (object) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        object,
      ],
    });
  };

  const removeFilter = (id) => {
    const toBeRemoved = filters.filterByNumericValues[id];
    const update = filters.filterByNumericValues.filter((filter) => filter !== toBeRemoved);
    setFilters({
      ...filters,
      filterByNumericValues:
        update,
    });
  };

  return (
    <StarWarsContext.Provider
      value={ { data, isFetching, filtered, filters, setFilterByName, setFilterByNumericValues, removeFilter } }
    >
      { children }
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
