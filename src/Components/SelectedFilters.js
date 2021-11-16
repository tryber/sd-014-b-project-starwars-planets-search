import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SelectedFilters() {
  const {
    filters,
    setFilters,
    arrayColumns,
    setArrayColumns,
  } = useContext(MyContext);

  const { filterByNumericValues } = filters;

  function filterRemove(selectedColumn) {
    const filtered = filterByNumericValues
      .filter(({ column }) => column !== selectedColumn);
    setArrayColumns([...arrayColumns, selectedColumn]);
    setFilters({
      ...filters,
      filterByNumericValues: filtered,
    });
    console.log(selectedColumn);
  }

  return (
    <div>
      {filterByNumericValues.map(({ column, comparison, value }, index) => (
        <div key={ index }>
          <p>{`${column} | ${comparison} | ${value}`}</p>
          <button
            data-testid="filter"
            type="button"
            onClick={ () => filterRemove(column) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default SelectedFilters;
