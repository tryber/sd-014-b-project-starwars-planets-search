import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function TablePlanets() {
  const [textFilter, setTextFilter] = useState('');
  const { data, isLoading, setFilters, filters } = useContext(PlanetsContext);

  // component didupdate
  /* useEffect(() => {
    if (!isLoading && textFilter.length > 0) {
      const newData = data.results.filter(
        (planet) => planet.name.toLowerCase().includes(textFilter),
      );
      console.log(newData);
      console.log('filterFilled:', filterFilled);
    }
  }, [textFilter, isLoading, data.results]); // update qnd elemento do array alterado
  */
  const handleChange = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
    setTextFilter(value);
  };

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
          onChange={ handleChange }
        // onChange={ (event) => { setTextFilter(event.target.value); } }
        />
      </label>
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
            && data.results.filter((planet) => planet.name.includes(textFilter))
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
