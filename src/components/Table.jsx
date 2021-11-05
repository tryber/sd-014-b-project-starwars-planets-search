import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import filterBiggenThen from '../Filters/filterBiggenThen';
import filterEqualThen from '../Filters/filterEqualThen';
import filterLessThen from '../Filters/filterLessThen';
import filterName from '../Filters/filterName';
import noFilter from '../Filters/noFilter';

const Table = () => {
  const { loading,
    data,
    filterButton,
    filters: { filterByName,
      filterByNumericValues } } = useContext(MyContext);

  if (filterByName) {
    return filterName(data, filterByName);
  }
  if (filterButton) {
    if (filterByNumericValues.comparison === 'maior que') {
      return filterBiggenThen(data, filterByNumericValues);
    }
    if (filterByNumericValues.comparison === 'menor que') {
      return filterLessThen(data, filterByNumericValues);
    }
    if (filterByNumericValues.comparison === 'igual a') {
      return filterEqualThen(data, filterByNumericValues);
    }
  }
  if (loading) {
    return <div>Carregando</div>;
  }
  return (
    noFilter(data)
  );
};

export default Table;
