import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import GlobalContext from './GlobalContext';
import fetchPlanetsAPI from '../api/planets';

function Provider({ children }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(
    {
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
      },
    },
  );

  useEffect(() => {
    const fetchAPI = async () => {
      const response = await fetchPlanetsAPI();
      setData(response.map((result) => {
        delete result.residents;
        return result;
      }));
      setLoading(false);
    };
    fetchAPI();
  }, []);

  return (
    <GlobalContext.Provider value={ { data, loading, filter, setFilter } }>
      { children }
    </GlobalContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export default Provider;
