import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './Context';
import fetchPlanets from '../services/fecthApi';

function Provider({ children }) {
  const [firstRender, setFirstRender] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [{ column: 'population', comparison: 'maior que', value: 0 }],
  });

  const baseData = () => {
    setFilterData(data);
  };

  const handleFetch = async () => {
    const planetsList = await fetchPlanets();
    setData(planetsList.results);
    setFirstRender(false);
    setLoading(false);
  };

  // Aprendi como usar da forma correta o .filter em: https://stackoverflow.com/questions/50185401/filter-arrow-function-es6

  const handleFilterName = (input) => {
    if (input) {
      const newData = data.filter((item) => item.name.toLowerCase()
        .includes(input.toLowerCase()));
      setFilterData(newData);
    } else {
      baseData();
    }
  };

  const handleFilterNumber = (column, comparison, value) => {
    if (comparison === 'maior que') {
      const newData = data.filter((item) => (
        parseInt(item[column], 10) > parseInt(value, 10)
      ));
      console.log(newData);
      setFilterData(newData);
    } else if (comparison === 'menor que') {
      const newData = data.filter((item) => (
        parseInt(item[column], 10) < parseInt(value, 10)
      ));
      console.log(newData);
      setFilterData(newData);
    } else if (comparison === 'igual a') {
      const newData = data.filter((item) => (
        parseInt(item[column], 10) === parseInt(value, 10)
      ));
      console.log(newData);
      setFilterData(newData);
    } else {
      baseData();
    }
  };

  useEffect(() => {
    setLoading(true);
    handleFetch();
    if (firstRender) {
      setFilterData(data);
    }
  }, [data, firstRender]);

  const contextValue = {
    loading,
    filterData,
    filters,
    setFilters,
    handleFilterName,
    handleFilterNumber,
  };

  return (
    <myContext.Provider value={ contextValue }>
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
