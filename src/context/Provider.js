import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import useFetch from '../hooks/useFetch';

const selectCategory = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export default function Provider({ children }) {
  const [data, loading] = useFetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const [planetsToRender, setPlanetsToRender] = useState([]);
  const [categoryList, setCategoryList] = useState(selectCategory);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '',
        },
      ],
    },
  });

  // Consultei o repositório do colega Luiz Gustavo (Turma 14 - B) para realizar o segundo requisito, que filtra os planetas pelo nome
  useEffect(() => {
    const { filterByName: { name } } = filters.filters;
    setPlanetsToRender(data.filter((planet) => planet.name.includes(name)));
  }, [data, filters]);

  const compare = (element, column, comparison, value) => {
    switch (comparison) {
    case 'maior que':
      return Number(element[column]) > Number(value);
    case 'menor que':
      return Number(element[column]) < Number(value);
    case 'igual a':
      return Number(element[column]) === Number(value);
    default:
      break;
    }
  };

  const handleNumericFilter = () => {
    const { filterByNumericValues } = filters.filters;
    const { column, comparison, value } = filterByNumericValues[0];
    const result = data.filter((planet) => compare(planet, column, comparison, value));
    setPlanetsToRender(result);
    const newCategoryList = categoryList.filter((category) => category !== column);
    setCategoryList(newCategoryList);
  };

  const contextValue = {
    data,
    loading,
    planets: planetsToRender,
    filters,
    setFilters,
    handleNumericFilter,
    selectCategory: categoryList,
    setCategoryList,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
