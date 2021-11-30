import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../../context/MyContext';
import './listFilters.css';

export default function Listfilters() {
  const { filters: { filters: { filterByNumericValues } } } = useContext(MyContext);
  const { delFilterNumeric } = useContext(MyContext);
  const [numericFilter, setNumericFilter] = useState([]);

  useEffect(() => {
    setNumericFilter(filterByNumericValues);
  }, [filterByNumericValues]);

  const delFilter = (id) => {
    const delId = filterByNumericValues.filter((_filter, i) => i !== id);
    setNumericFilter(delId);
    delFilterNumeric(delId);
  };

  return (
    <ul>
      {numericFilter.map((filter, i) => (
        <li data-testid="filter" key={ i }>
          <span>{filter.column}</span>
          <span>{filter.comparison}</span>
          <span>{filter.value}</span>
          <button type="button" onClick={ () => delFilter(i) }>X</button>
        </li>
      ))}
    </ul>
  );
}
