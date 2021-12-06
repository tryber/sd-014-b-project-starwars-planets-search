/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import ContextPlanets from '../context/ContextPlanets';

const UlFilter = () => {
  const { filter, setFilters, setFilterColumns,
    filterColums, data, setPlanetFiltered } = useContext(ContextPlanets);
  const { filters: { filterByName: { name }, filterByNumericValues } } = filter;

  const handleClick = (obj) => {
    const filterObj = filterByNumericValues
      .filter((filterOption) => filterOption.column !== obj.column);
    setFilterColumns(filterColums.concat(obj.column));
    setFilters({ filters: { filterByName: { name },
      filterByNumericValues: filterObj } });
  };

  useEffect(() => {
    if (filterByNumericValues.length === 0) setPlanetFiltered(data);
  }, [filterByNumericValues]);

  return (
    <ul>
      { filterByNumericValues.map((filterData, index) => (
        <li
          key={ index }
          data-testid="filter"
        >
          { filterData.column }
          { ' ' }
          { filterData.comparison }
          { ' ' }
          { filterData.value }
          { ' ' }
          <button
            type="button"
            onClick={ () => handleClick(filterData) }
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UlFilter;
