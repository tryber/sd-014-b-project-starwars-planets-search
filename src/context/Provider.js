import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';

function Provider({ children }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    /* const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/'; */
    const URL_API = 'https://swapi.dev/api/planets/';
    const fetchData = async () => {
      try {
        const results = await fetch(URL_API);
        const json = await results.json();
        setData(json.results);
        setLoading(false);
      } catch (error) {
        setData(error);
      }
    };
    fetchData();
  }, []);

  const arrayColumn = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];

  const [filterByName, setFilterByName] = useState('');
  const [filterByNumericValues, setNumericValue] = useState({
    column: '',
    comparison: '',
    value: '',
  });
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);
  const [filterButton, setFilterButton] = useState(false);
  const [columnState, setColumnState] = useState(arrayColumn);

  const contextValue = {
    loading,
    setLoading,
    data,
    setData,
    filterButton,
    setFilterButton,
    columnState,
    setColumnState,
    filters: {
      filterByName,
      setFilterByName,
      filterByNumericValues,
      setNumericValue,
    },
    infoFilter: {
      column,
      setColumn,
      comparison,
      setComparison,
      value,
      setValue,
    },
  };

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
