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
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const [columns, setColumns] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ]);
  const columnsSort = [
    'name',
    'rotation_period',
    'orbital_period',
    'diameter',
    'climate',
    'gravity',
    'terrain',
    'surface_water',
    'films',
    'created',
    'edited',
    'url',
  ];

  const valueComparator = (a, b) => {
    const negativo = -1;
    if (Number.isNaN(parseInt(a, 10))) {
      if (a < b) return negativo;
      if (a > b) return 1;
      return 0;
    }
    if (Number(a) < Number(b)) return negativo;
    if (Number(a) > Number(b)) return 1;
    return 0;
  };

  const baseData = () => {
    const orderedData = data.sort((a, b) => valueComparator(a.name, b.name));
    setFilterData(orderedData);
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
      setFilterData(newData);
    } else if (comparison === 'menor que') {
      const newData = data.filter((item) => (
        parseInt(item[column], 10) < parseInt(value, 10)
      ));
      setFilterData(newData);
    } else if (comparison === 'igual a') {
      const newData = data.filter((item) => (
        parseInt(item[column], 10) === parseInt(value, 10)
      ));
      setFilterData(newData);
    } else {
      baseData();
    }
  };

  const deleteColumns = (columnName) => {
    const newColumns = columns.filter((column) => column !== columnName);
    setColumns(newColumns);
  };

  const restoreColumns = (columnName) => {
    const newColumns = [...columns, columnName];
    setColumns(newColumns);
  };

  const deleteFilters = (columnName) => {
    const { filterByNumericValues } = filters;
    const newFilters = filterByNumericValues.filter((item) => item.column !== columnName);
    setFilters({
      ...filters,
      filterByNumericValues: newFilters,
    });
    setFilterData(data);
  };

  // A ideia de resolução para o requisito 6 veio do repositório de Kelvin Wevertor: https://github.com/tryber/sd-014-a-project-starwars-planets-search/pull/121/files

  const sortData = () => {
    const { column, sort } = order;
    const newData = [...filterData];
    if (sort === 'ASC') {
      newData.sort((a, b) => valueComparator(a[column], b[column]));
    }
    if (sort === 'DESC') {
      newData.sort((b, a) => valueComparator(a[column], b[column]));
    }
    setFilterData(newData);
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
    columns,
    columnsSort,
    deleteColumns,
    restoreColumns,
    deleteFilters,
    order,
    setOrder,
    sortData,
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
