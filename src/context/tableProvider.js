import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import tableContext from './tableContext';
import requestPlanets from '../services/api';

export default function Provider({ children }) {
  const [data, setData] = useState({ results: [{ name: '' }] });
  const [filters, setFilter] = useState(
    { filterByName: { name: '' },
      filterByNumericValues: [{ column: '', comparison: '', value: 0 }],
    },
  );

  useEffect(() => {
    async function fetchDatasetData() {
      const dataValue = await requestPlanets();
      setData(dataValue);
    }
    fetchDatasetData();
  }, []);

  const contextValue = {
    data,
    filters,
    setFilter,
  };

  return (
    <tableContext.Provider value={ contextValue }>
      {children}
    </tableContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};
