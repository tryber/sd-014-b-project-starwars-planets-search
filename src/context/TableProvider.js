import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  // componentDidMount useEffect (() => {funct}, []);
  // componentDidUpdate useEffect (() => {funct}, [esperando att de estado]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const { results } = await response.json();
      setData(results);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    // utilizei o let planets para armazenar a resposta do if e só no final dar setData
    // fiz desse jeito com a instrução do meu colega Gustavo Santanna e Matheus Laurindo por conta de asincrosinidade
    // pois a função com setData em todos os ifs deixava a aplicação lenta, requisitando muitas vezes o setData
    let planets = [...data];
    search.filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        planets = (data.filter((planet) => Number(planet[column]) > Number(value)));
      }
      if (comparison === 'menor que') {
        planets = (data.filter((planet) => Number(planet[column]) < Number(value)));
      }
      if (comparison === 'igual a') {
        planets = (data.filter((planet) => Number(planet[column]) === Number(value)));
      }
    });
    setData(planets);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search.filterByNumericValues.length]);

  return (
    <TableContext.Provider value={ { data, setData, search, setSearch } }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableProvider;
