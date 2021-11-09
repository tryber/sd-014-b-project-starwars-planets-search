import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DataContext from './DataContext';
import requestApiPlanets from '../services/requestApiPlanets';
// import response from '../testData';

function DataProvider({ children }) {
  const [data, setData] = useState([]);

  const [searchName, setSearchName] = useState('');
  const [filterName, setFilterName] = useState();
  const [filterEnabled, setFilterEnabled] = useState(false);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [valor, setValor] = useState('');

  const [selectedFilter, setSelectedFilter] = useState([{}]);
  const [filters, setFilters] = useState(false);

  const filtroNumero = ['population',
    'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  function filtrando() {
    setSelectedFilter([...selectedFilter, { filtros: { column, valor, comparison } }]);
    console.log(selectedFilter);
    setFilters(true);
  }

  async function fetchRequestApiPlanets() {
    const resposta = await requestApiPlanets();
    const result = resposta;
    // const resposta = response;
    // setData(resposta.results);
    setData(result.results);
    console.log(result.results);
  }

  return (
    <DataContext.Provider
      value={
        {
          data,
          searchName,
          filterName,
          filterEnabled,
          column,
          valor,
          comparison,
          selectedFilter,
          filters,
          filtroNumero,
          setSelectedFilter,
          setColumn,
          setComparison,
          setValor,
          setData,
          setFilterEnabled,
          setFilterName,
          setSearchName,
          filtrando,
          fetchRequestApiPlanets }
      }
    >
      { children }
    </DataContext.Provider>
  );
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
