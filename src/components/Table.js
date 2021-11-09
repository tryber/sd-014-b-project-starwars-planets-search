import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';
import SWContext from '../context/SWContext';

function Table() {
  const { isLoading, data } = useContext(SWContext);
  const { nameFilter } = useContext(SearchContext);
  const { typeFilter } = useContext(SearchContext);

  let filteredData = data;

  switch (typeFilter.columnFilter) {
  case 'population':
    if (!typeFilter.numberInput || typeFilter.numberInput <= 0) {
      filteredData = data;
    } else if (typeFilter.comparison === 'bigger') {
      filteredData = data.filter((d) => (
        Number(d.population) > typeFilter.numberInput
      ));
    } else if (typeFilter.comparison === 'smaller') {
      filteredData = data.filter((d) => (
        Number(d.population) < typeFilter.numberInput
      ));
    } else if (typeFilter.comparison === 'equals') {
      filteredData = data.filter((d) => (
        Number(d.population) === typeFilter.numberInput
      ));
    }
    break;
  default:
    break;
  }

  if (nameFilter !== '') {
    filteredData = data.filter((d) => (
      d.name.toLowerCase().includes(nameFilter.toLowerCase())
    ));
  }

  const headers = ['Name', 'Rotation Period', 'Orbital Period', 'Diameter', 'Climate',
    'Gravity', 'Terrain', 'Surface Water',
    'Population', 'Films', 'Created', 'Edited', 'URL'];

  return (isLoading ? (<span> loading...</span>)
    : (
      <table>
        <thead>
          <tr>
            { headers.map((header) => <th key={ header }>{ header }</th>) }
          </tr>
        </thead>
        <tbody>
          { filteredData.map((item) => (
            <tr key={ item.name }>
              <td>{ item.name }</td>
              <td>{ item.rotation_period }</td>
              <td>{ item.orbital_period }</td>
              <td>{ item.diameter }</td>
              <td>{ item.climate }</td>
              <td>{ item.gravity }</td>
              <td>{ item.terrain }</td>
              <td>{ item.surface_water }</td>
              <td>{ item.population }</td>
              <td>{ item.films.length }</td>
              <td>{ item.created }</td>
              <td>{ item.edited }</td>
              <td>{ item.url }</td>
            </tr>
          )) }
        </tbody>
      </table>
    ));
}

export default Table;
