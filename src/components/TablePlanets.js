import React, { useContext, useState, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function TablePlanets() {
  const {
    data,
    dataFiltered,
    setDataFiltered,
    isLoading,
    setFilters,
    filters } = useContext(PlanetsContext);

  const [textFilter, setTextFilter] = useState(''); // [state, setState]
  const [columnFilter, setColumnFilter] = useState('population');
  const [comparisonFilter, setComparisonFilter] = useState('maior que');
  const [valueFilter, setValueFilter] = useState(0);

  // component didupdate
  useEffect(() => {
    if (!isLoading) {
      // console.log(data.results);
      // console.log('dataFiltered', dataFiltered.results);
      setFilters({
        ...filters,
        filterByName: {
          name: textFilter.toLowerCase(),
        },
        filterByNumericValues: {
          column: columnFilter,
          comparison: comparisonFilter,
          value: valueFilter,
        },
      });
    }
  }, [textFilter, columnFilter, comparisonFilter, valueFilter]); // update qnd elemento do array alterado

  /*
  const handleChange = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
    console.log(filters.filterByName.name);
  }; */

  function filterHandleClick() {
    if (comparisonFilter === 'igual a') {
      setDataFiltered(
        data.filter((result) => result[columnFilter] === valueFilter),
      );
    } else if (comparisonFilter === 'maior que') {
      setDataFiltered(
        data.filter(
          (result) => parseInt(result[columnFilter], 10) > parseInt(valueFilter, 10),
        ),
      );
    } else {
      setDataFiltered(
        data.filter(
          (result) => parseInt(result[columnFilter], 10) < parseInt(valueFilter, 10),
        ),
      );
    }
  }
  console.log('dataFiltered.map: ', dataFiltered);
  return (
    <>
      <label
        htmlFor="textFilter"
      >
        Filtro de texto no planeta:
        <input
          data-testid="name-filter"
          type="text"
          id="textFilter"
          name="textFilter"
          value={ textFilter }
          onChange={ (event) => { setTextFilter(event.target.value); } }
        />
      </label>

      <section className="filters">
        <select
          data-testid="column-filter"
          name="column"
          value={ columnFilter }
          onChange={ (event) => { setColumnFilter(event.target.value); } }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>

        <select
          data-testid="comparison-filter"
          name="comparison"
          value={ comparisonFilter }
          onChange={ (event) => { setComparisonFilter(event.target.value); } }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>

        <input
          data-testid="value-filter"
          type="number"
          name="valueFilter"
          value={ valueFilter }
          onChange={ (event) => { setValueFilter(event.target.value); } }
        />

        <button
          data-testid="button-filter"
          type="button"
          onClick={ filterHandleClick }
        >
          Filtrar
        </button>
      </section>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          { !isLoading
            && dataFiltered
              .filter((planet) => planet.name.toLowerCase().includes(
                filters.filterByName.name,
              ))
              .map((planet) => (
                <tr key={ planet.name }>
                  <td>{ planet.name }</td>
                  <td>{ planet.rotation_period }</td>
                  <td>{ planet.orbital_period }</td>
                  <td>{ planet.diameter }</td>
                  <td>{ planet.climate }</td>
                  <td>{ planet.gravity }</td>
                  <td>{ planet.terrain }</td>
                  <td>{ planet.surface_water }</td>
                  <td>{ planet.population }</td>
                  <td>{ planet.films }</td>
                  <td>{ planet.created }</td>
                  <td>{ planet.edited }</td>
                  <td>{ planet.url }</td>
                </tr>
              )) }
        </tbody>
      </table>
    </>
  );
}

export default TablePlanets;
