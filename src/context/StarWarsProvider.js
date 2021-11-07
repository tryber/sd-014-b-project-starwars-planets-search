import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanetsAPI from '../services/PlanetsAPI';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilter] = useState([{
    filters: {
      filtersByName: {
        name: '',
      },
      filterByNumericValues: {
        column: '',
        comparison: '',
        value: '',
      },
    } },
  ]);

  // A synthax do useEffect abaixo foi retirado da resposta do Kenny John Jacob em
  // https://stackoverflow.com/questions/63570597/typeerror-func-apply-is-not-a-function
  // Não está clara ainda pra mim...

  // Fiz um setFilter() pois o valor inicial das chaves internas estava 'undefined'.
  // Buscar a razão na mentoria

  useEffect(() => {
    (async () => {
      const results = await fetchPlanetsAPI();
      setData(results);
    })();
    setFilter({
      filtersByName: {
        name: '',
      },
      filterByNumericValues: {
        column: 'population',
        comparison: 'maior que',
        value: '0',
      },
    });
  }, []);

  useEffect(() => {
    const filteredPlanets = data.filter((planet) => (
      planet.name.includes(filters.filtersByName.name)));
    setData(filteredPlanets);
  }, [filters.filtersByName]);

  const handleNameChange = ({ target }) => {
    if (target.value.length === 0) {
      (async () => {
        const results = await fetchPlanetsAPI();
        setData(results);
      })();
    }
    setFilter({ filtersByName: { name: target.value } });
  };

  const handleFiltersChange = (event) => {
    const { name, value } = event.target;
    setFilter({
      ...filters,
      filterByNumericValues: {
        ...filters.filterByNumericValues,
        [name]: value,
      },
    });
  };

  const handleClick = () => {
    const filterColumn = filters.filterByNumericValues.column;
    const filterComparison = filters.filterByNumericValues.comparison;
    const filterValue = Number(filters.filterByNumericValues.value);
    if (filterComparison === 'maior que') {
      const filteredPlanets = data.filter((planet) => (
        Number(planet[filterColumn]) > filterValue
      ));
      setData(filteredPlanets);
    } else if (filterComparison === 'menor que') {
      const filteredPlanets = data.filter((planet) => (
        Number(planet[filterColumn]) < filterValue
      ));
      setData(filteredPlanets);
    } else {
      const filteredPlanets = data.filter((planet) => (
        Number(planet[filterColumn]) === filterValue
      ));
      setData(filteredPlanets);
    }
  };

  const context = {
    data,
    filters,
    setData,
    handleNameChange,
    handleClick,
    handleFiltersChange,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default StarWarsProvider;
