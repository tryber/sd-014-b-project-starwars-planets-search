import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FiltersList() {
  const {
    filters: { filterByNumericValues },
    setColumns,
    data,
    setFilteredPlanets,
    setFilterByNumericValues,
    columns } = useContext(MyContext);

  function handleClick(column, comparison, value) {
    const updatedFilters = filterByNumericValues.filter(
      (filter) => `${filter.column} ${filter.comparison} ${filter.value}`
          !== `${column} ${comparison} ${value}`,
    );
    setFilterByNumericValues(updatedFilters);
    setColumns([...columns, column]);
    setFilteredPlanets(data);
  }

  return (
    <section>
      <ul>
        {filterByNumericValues.map(({ column, comparison, value }) => (
          <li key={ column } data-testid="filter">
            {`${column} ${comparison} ${value}`}
            <button
              type="button"
              onClick={ () => handleClick(column, comparison, value) }
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FiltersList;
