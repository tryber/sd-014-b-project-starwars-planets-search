import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlannetsContext from './PlannetsContext';
import fetchAPI from '../services/StarWarsAPI';

export default function PlannetsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function saveData() {
      const dataAPI = await fetchAPI();
      setData(dataAPI);
    }
    saveData();
  }, []);

  return (
    <PlannetsContext.Provider value={ { data } }>
      {children}
    </PlannetsContext.Provider>
  );
}

PlannetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
