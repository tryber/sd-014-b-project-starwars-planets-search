import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  // const [filteredSearch, setFilteredSearch] = useState([]);
  // Dica do Matheus Gonzaga - 14B, decidi colocar também no meu
  const [loading, setLoading] = useState([]);

  // Fetch data from API
  useEffect(() => {
    setLoading(true);
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then(({ results }) => {
        setData(results);
        setLoading(false);
      });
  }, []);

  const starWarsContext = {
    data,
    loading,
    // filters,
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

// PropTypes.element,

export default StarWarsProvider;
