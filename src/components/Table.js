import React, { useContext } from 'react';
import ContextSWP from '../context/ContextSWP';

const filterByNumericValue = (data, filt) => {
  const { filterByNumericValues: filter } = filt.filters;

  if (filter.length === 0) return data;
  const { value, column, comparison } = filter[filter.length - 1];
  let comp = 0;
  if (comparison === 'maior que') {
    comp = Number(data[column]) > Number(value);
  } else if (comparison === 'menor que') {
    comp = Number(data[column]) < Number(value);
  } else {
    comp = Number(data[column]) === Number(value);
  }
  return comp;
};

function Table() {
  const { state } = useContext(ContextSWP);

  if (!state) return null;
  const { name } = state.filters.filterByName;
  const { column, sort } = state.filters.order;

  const filterTable = () => state.data
    .filter((data) => data.name.toLowerCase().includes(name))
    .filter((data) => filterByNumericValue(data, state));

  // Algoritmo de ordenação fontes: https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  const ordenationBySort = (item) => {
    if (sort === 'ASC') {
      return item
        .sort(({ [column]: a }, { [column]: b }) => a.localeCompare(b))
        .sort((a, b) => (a[column] - b[column]));
    } if (sort === 'DESC') {
      return item
        .sort(({ [column]: a }, { [column]: b }) => b.localeCompare(a))
        .sort((a, b) => b[column] - a[column]);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {Object.keys(state.data[0]).map((item) => (
            <th key={ item }>
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ordenationBySort(filterTable())
          .map((item) => (
            <tr key={ item.name }>
              <td data-testid="planet-name">{ item.name }</td>
              <td>{ item.rotation_period }</td>
              <td>{ item.orbital_period }</td>
              <td>{ item.diameter }</td>
              <td>{ item.climate }</td>
              <td>{ item.gravity }</td>
              <td>{ item.terrain }</td>
              <td>{ item.surface_water }</td>
              <td>{ item.population }</td>
              <td>{ item.films }</td>
              <td>{ item.created }</td>
              <td>{ item.edited }</td>
              <td>{ item.url }</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
