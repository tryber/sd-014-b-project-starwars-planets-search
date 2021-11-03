import { useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

function HandleFilterByNumericValues() {
  const {
    copyData,
    setCopyData,
    filters,
  } = useContext(MyContext);

  function filterDataSearch(comparison, column, value) {
    if (comparison === 'maior que') {
      const newArray = copyData.filter((obj) => Number(obj[column]) > Number(value));
      setCopyData(newArray);
    }
    if (comparison === 'menor que') {
      const newArray = copyData.filter((obj) => Number(obj[column]) < Number(value));
      setCopyData(newArray);
    }
    if (comparison === 'igual a') {
      const newArray = copyData.filter((obj) => Number(obj[column]) === Number(value));
      setCopyData(newArray);
    }
  }

  useEffect(() => {
    const { filters: { filterByNumericValues } } = filters;
    filterByNumericValues.forEach(({ comparison, column, value }) => {
      filterDataSearch(comparison, column, value);
    });
  }, [filters]);

  return { copyData, setCopyData, filters };
}

export default HandleFilterByNumericValues;
