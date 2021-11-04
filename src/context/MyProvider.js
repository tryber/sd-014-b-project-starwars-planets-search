import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function MyProvider({ children }) {
  const [data, setData] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    setLoading(true);
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((planets) => {
        setData(planets.results);
        setFilteredPlanets(planets.results);
        setLoading(false);
      });
  }, []);

  const { filterByName: { name } } = filters;

  useEffect(() => {
    setFilteredPlanets(data.filter((planet) => {
      const planetName = planet.name.toLowerCase();
      return planetName.includes(name);
    }));
  }, [name]);

  const contextValue = {
    filteredPlanets,
    setData,
    loading,
    filters,
    setFilters,
  };

  return (
    <main>
      <MyContext.Provider value={ contextValue }>
        {children}
      </MyContext.Provider>
    </main>
  );
}

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyProvider;
