import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanetList from '../services/planetsAPI';
import Context from './Context';

const INITIAL_FILTER = {
  filters: {
    filterByName: {
      name: '',
    },
  },
};

const Provider = ({ children }) => {
  const [originalList, setOriginalList] = useState([]);
  const [planetList, setPlanetList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(INITIAL_FILTER);

  const recoverPlanetList = async () => {
    const list = await getPlanetList();
    setPlanetList(list.results);
    setOriginalList(list.results);
    setIsLoading(false);
  };

  const filterByName = ({ target: { value } }) => {
    if (value === '') {
      setPlanetList(originalList);
    } else {
      const searchPlanet = planetList.filter((planet) => planet.name.toLowerCase()
        .includes(value.toLowerCase()));
      setFilters({ ...filters, name: value });
      setPlanetList([...searchPlanet]);
    }
  };

  const context = {
    planetList,
    setPlanetList,
    isLoading,
    setIsLoading,
    filterByName,
  };

  useEffect(() => {
    recoverPlanetList();
  }, []);

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
