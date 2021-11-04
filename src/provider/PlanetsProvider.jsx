import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';
import fetchPlanets from '../services/fetchPlanetsAPI';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filters, setFilters] = useState({ filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' } });
  const [selectObjects, setSelectObjects] = useState({
    column: 'population',
    comparison: 'menor que',
    value: 0,
    id: 0,
  });

  useEffect(() => {
    setIsFetching(true);
    const retrievePlanets = async () => {
      const results = await fetchPlanets();
      setData(results);
      setIsFetching(false);
    };
    retrievePlanets();
  }, []);

  const handleChange = (value) => {
    setFilters((prevState) => ({
      ...prevState,
      filterByName: {
        name: value,
      } }));
  };

  const handleSelectOptions = (name, value) => {
    setSelectObjects((prevState) => ({
      ...prevState,
      [name]: value,
      id: prevState.id + 1,
    }));
  };

  const handleFilterButtonClick = () => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [...prevState.filterByNumericValues,
        selectObjects],
    }));
  };

  const handleDeleteClick = (id) => {
    const newFilterByNumericValues = filters.filterByNumericValues
      .filter((item) => item.id !== id);
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: newFilterByNumericValues,
    }));
  };

  const handleSortChange = (value) => {
    setFilters((prevState) => ({
      ...prevState,
      order: {
        ...prevState.order,
        sort: value,
      },
    }));
  };

  const handleSelectOrderColumn = (name, value) => {
    setFilters((prevState) => ({
      ...prevState,
      order: {
        ...prevState.order,
        [name]: value,
      },
    }));
  };

  const contextValue = {
    data,
    isFetching,
    handleChange,
    handleSelectOptions,
    handleFilterButtonClick,
    handleDeleteClick,
    handleSortChange,
    handleSelectOrderColumn,
    filters,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
};

PlanetsProvider.propTypes = {
  // PropTypes feita com base no stackoverflow, disponível em:
  // https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default PlanetsProvider;
