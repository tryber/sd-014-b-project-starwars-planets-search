import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [data, setData] = useState([]);
  const [dataRestore, setDataRestore] = useState([]);
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [filterSearch, setFilterSearch] = useState({
    filters: {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: 0,
        },
      ],
    },
  });

  async function PlanetAPI() {
    const urlFetch = await fetch(URL);
    const response = await urlFetch.json();
    const { results } = response;
    const resultApi = results.filter((result) => delete result.residents);
    setData(resultApi);
    setDataRestore(resultApi);
  }

  useEffect(() => {
    PlanetAPI();
  }, []);

  // local de pesquisa para resolução do requisito 2
  // https://www.youtube.com/watch?v=mZvKPtH9Fzo

  function filterData(name) {
    const dataFilter = [...dataRestore];
    return dataFilter.filter((text) => text
      .name.toLowerCase().includes(name.toLowerCase()));
  }

  function handleChange(string) {
    setData(filterData(string));
    setFilterSearch({
      filters: {
        filterByName: {
          name: string,
        },
        filterByNumericValues: {
          column: '',
          comparison: '',
          value: 0,
        },
      },
    });
  }

  function handleClick() {
    const dataFilter = [...dataRestore];
    if (filterSearch.filters.filterByNumericValues[0].comparison === 'maior que') {
      setData(dataFilter.filter((choice) => parseInt(choice[filterSearch.filters
        .filterByNumericValues[0].column], 10)
        > parseInt(filterSearch.filters.filterByNumericValues[0].value, 10)));
    } else if (filterSearch.filters.filterByNumericValues[0].comparison === 'menor que') {
      setData(dataFilter.filter((choice) => parseInt(choice[filterSearch.filters
        .filterByNumericValues[0].column], 10)
        < parseInt(filterSearch.filters.filterByNumericValues[0].value, 10)));
    } else {
      setData(dataFilter.filter((choice) => choice[filterSearch.filters
        .filterByNumericValues[0].column]
        === filterSearch.filters.filterByNumericValues[0].value));
    }
    document.getElementById(filterSearch.filters
      .filterByNumericValues[0].column).remove();
  }

  // https://qastack.com.br/programming/5933157/how-to-remove-an-html-element-using-javascript
  // Utilização da função remove para apagar o elemento da option.

  function handleSelect(event) {
    if (event.target.id === 'column') {
      setFilterSearch({
        ...filterSearch,
        filters: {
          filterByNumericValues: [{
            column: event.target.value,
            comparison: filterSearch.filters.filterByNumericValues[0].comparison,
            value: filterSearch.filters.filterByNumericValues[0].value,
          }],
        },
      });
    } else if (event.target.id === 'comparison') {
      setFilterSearch({
        ...filterSearch,
        filters: {
          filterByNumericValues: [{
            column: filterSearch.filters.filterByNumericValues[0].column,
            comparison: event.target.value,
            value: filterSearch.filters.filterByNumericValues[0].value,
          }],
        },
      });
    } else if (event.target.id === 'number-value') {
      setFilterSearch({
        ...filterSearch,
        filters: {
          filterByNumericValues: [{
            column: filterSearch.filters.filterByNumericValues[0].column,
            comparison: filterSearch.filters.filterByNumericValues[0].comparison,
            value: event.target.value,
          }],
        },
      });
    }
  }

  const newObject = {
    data,
    handleChange,
    filterSearch,
    handleSelect,
    handleClick,
  };

  return (
    <PlanetContext.Provider value={ newObject }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
