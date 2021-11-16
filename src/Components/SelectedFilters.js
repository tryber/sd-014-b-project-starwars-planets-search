import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function SelectedFilters() {
  const {
    filters,
    setFilters,
    arrayColumns,
    setArrayColumns,
    setListPlanets,
    resetList,
    listPlanets,
  } = useContext(MyContext);

  const { filterByNumericValues } = filters;

  function filterRemove(selectedColumn, comparison, value) {
    const filtered = filterByNumericValues
      .filter(({ column }) => column !== selectedColumn);
    setArrayColumns([...arrayColumns, selectedColumn]);
    setFilters({
      ...filters,
      filterByNumericValues: filtered,
    });

    const result = resetList.filter((planet) => {
      switch (comparison) {
      case 'maior que':
        return Number(planet[selectedColumn]) < Number(value);
      case 'menor que':
        return Number(planet[selectedColumn]) > Number(value);
      case 'igual a':
        return Number(planet[selectedColumn]) !== Number(value);
      default:
        return resetList;
      }
    });

    const sorted = () => {
      if (listPlanets > 1) {
        return [...listPlanets, ...result];
      }
      return resetList;
    };

    setListPlanets(sorted);
  }

  return (
    <div>
      {filterByNumericValues.map(({ column, comparison, value }, index) => (
        <label
          data-testid="filter"
          htmlFor="btn-remove"
          key={ index }
        >
          {`${column} | ${comparison} | ${value}`}
          <button
            id="btn-remove"
            type="button"
            onClick={ () => filterRemove(column, comparison, value) }
          >
            X
          </button>
        </label>
      ))}
    </div>
  );
}

export default SelectedFilters;
