import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const [inputName, setInputName] = useState('');

  const contextValue = {
    data,
    setData,
    title,
    setTitle,
    filters,
    setFilters,
    inputName,
    setInputName,
  };

  useEffect(() => {
    async function fetchdata() {
      const { results } = await fetch(API_URL).then((res) => res.json());
      setData(results);
      setTitle(Object.keys(results[0]));
    }

    fetchdata();
  }, []);

  return (
    <div>
      <PlanetsContext.Provider value={ contextValue }>
        {children}
      </PlanetsContext.Provider>
    </div>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetsProvider;
