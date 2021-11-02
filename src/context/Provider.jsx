import PropTypes from 'prop-types';
import React, { useState } from 'react';
import PlanetsContext from './PlanetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  const [filterByNumericValues, setFilterByNumericValues] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '',
  });


  const fetchPlanetsApi = async () => {
    const PLANETS_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchPlanets = await fetch(PLANETS_URL).then((response) => response.json());
    setData(fetchPlanets.results);
  };

  function handleChangeByNameValues({ target }) {
    const { value } = target;
    setFilters({
      ...filters,
      filterByName: {
        name: value,
      },
    });
  }

  function handleChangeByNumericValues({ target }) {
    const { value, id } = target;
    setFilterByNumericValues({
        ...filterByNumericValues,
        [id]: value,
    });
  }

  function handleChangeByOrderValues({ target }) {
    const { value, id } = target;
    setFilters({
      ...filters,
      order: {
        ...filters.order,
        [id]: value,
      },
    });
  }

  function handleFilterByNumericValues() {
    const { column, comparison, value } = filterByNumericValues;
    if(comparison === 'maior que') {
      const newData = data.filter((planet) => Number(planet.[column])  > value);
      setData(newData);
    }else if (comparison === 'menor que'){
      const newData = data.filter((planet) => Number(planet.[column])  < value);
      setData(newData);
    } else if (comparison === 'igual a'){
      const newData = data.filter((planet) => Number(planet.[column])  == value);
      setData(newData);
    }
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, filterByNumericValues ]
    });

    console.log(filters);
  }

  function handleByOrder() {
  }

  const CONTEXT_DEFAULT = {
    data,
    setData,
    fetchPlanetsApi,
    filters,
    filterByNumericValues,
    handleChangeByNameValues,
    handleChangeByNumericValues,
    handleChangeByOrderValues,
    handleFilterByNumericValues,
    handleByOrder,
  };
  return (
    <PlanetsContext.Provider value={ CONTEXT_DEFAULT }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
