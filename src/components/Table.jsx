import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import filterName from '../Filters/filterName';
import noFilter from '../Filters/noFilter';

const Table = () => {
  const { loading, data, filters: { filterByName } } = useContext(MyContext);
  console.log(data);
  if (filterByName) {
    return filterName(data, filterByName);
  }
  if (loading) {
    return <div>Carregando</div>;
  }
  return (
    noFilter(data)
  );
};

export default Table;
