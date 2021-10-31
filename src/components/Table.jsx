/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React from 'react';

function Table({ data }) {
  const tableTitles = [
    'Name', 'Diameter', 'Rotation Period', 'Orbital Period', 'Climate',
    'Gravity', 'Terrain', 'Surface Water', 'Population',
    'Films', 'Created', 'Edited', 'URL'];

  return (
    <table>
      <thead>
        <tr>
          {tableTitles.map((title, index) => <th key={ index }>{title}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((planet, index) => {
          const {
            name,
            diameter,
            climate,
            gravity,
            terrain,
            population,
            films,
            created,
            edited,
            url } = planet;
          return (
            <tr key={ index }>
              <td>{name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{diameter}</td>
              <td>{climate}</td>
              <td>{gravity}</td>
              <td>{terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{population}</td>
              <td>{films}</td>
              <td>{created}</td>
              <td>{edited}</td>
              <td>{url}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
