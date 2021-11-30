import React, { useContext } from 'react';
import appContext from '../context/Context';

export default function FilterButton() {
  const { filter, columns, setColumns, setFilter } = useContext(appContext);
  const { filters: { filterByName: { name }, filterByNumericValues } } = filter;

  const handleClick = (e) => {
    const filterObj = filterByNumericValues
      .filter((filterOption) => filterOption.column !== e);
    setColumns(columns.concat(e));
    setFilter({
      filters: {
        filterByName: { name },
        filterByNumericValues: filterObj,
      },
    });
  };

  return (
    <ul>
      { filterByNumericValues.map(({ column, comparison, numericFilter }, index) => (
        <li
          key={ index }
          data-testid="filter"
        >
          { column }
          { ' ' }
          { comparison }
          { ' ' }
          { numericFilter }
          { ' ' }
          <button
            type="button"
            value={ column }
            onClick={ (e) => handleClick(e.target.value) }
          >
            X
          </button>
        </li>
      )) }
    </ul>
  );
}
