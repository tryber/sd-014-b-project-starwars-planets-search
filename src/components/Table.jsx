import { useContext } from 'react';
import MyContext from '../context/MyContext';
import filterName from '../Filters/filterName';
import noFilter from '../Filters/noFilter';

const Table = () => {
  const { data, filters: { filterByName } } = useContext(MyContext);
  if (filterByName) {
    return filterName(data, filterByName);
  }
  return (
    noFilter(data)
  );
};

export default Table;
