import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import PlannetsContext from './PlannetsContext';
import fetchAPI from '../services/StarWarsAPI';

export default function PlannetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior');
  const [value, setFilterValue] = useState(0);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    async function saveData() {
      const dataAPI = await fetchAPI();
      setData(dataAPI);
    }
    saveData();
  }, []);

  function filterDataByNumericValues() {
    let filter = data;
    switch (comparison) {
    case 'maior que':
      filter = data.filter((element) => parseInt(element[column], 10) > value);
      setFilterData(filter);
      break;
    case 'igual a':
      filter = data.filter((element) => element[column] === value);
      setFilterData(filter);
      break;
    case 'menor que':
      filter = data.filter((element) => parseInt(element[column], 10) < value);
      setFilterData(filter);
      break;
    default:
      setFilterData(data);
      return filter;
    }
  }

  const INITIAL_STATE = { data,
    filters: {
      filterByName: { name },
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    },
    setName,
    filterData,
    setFilterData,
    setColumn,
    setComparison,
    setFilterValue,
    filterDataByNumericValues,
  };

  return (
    <PlannetsContext.Provider value={ INITIAL_STATE }>
      {children}
    </PlannetsContext.Provider>
  );
}

PlannetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
