import React, { useContext } from 'react';
import MyContext from '../../context/MyContext';
import './filterList.css';

export default function FilterList() {
  const { filters: { filterByNumericValues }, delFilterNumeric } = useContext(MyContext);

  const delFilter = (id) => {
    const delId = filterByNumericValues.filter((_filter, i) => i !== id);
    delFilterNumeric(delId);
  };

  return (
    <ul>
      {filterByNumericValues.map((filter, i) => (
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
