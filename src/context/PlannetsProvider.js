import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlannetsContext from './PlannetsContext';
import fetchAPI from '../services/StarWarsAPI';

export default function PlannetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    async function saveData() {
      const dataAPI = await fetchAPI();
      setData(dataAPI);
    }
    saveData();
  }, []);

  const INITIAL_STATE = { data,
    filters: { filterByName: { name } },
    setName,
    filterData,
    setFilterData };

  return (
    <PlannetsContext.Provider value={ INITIAL_STATE }>
      {children}
    </PlannetsContext.Provider>
  );
}

PlannetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
