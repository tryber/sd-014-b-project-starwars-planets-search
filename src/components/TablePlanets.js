import React from 'react';
// import NewContext from '../context/NewContext';
import PropTypes from 'prop-types';
// import getDataByPlanets from '../services/ApiPlanets';

function TablePlanets({ planets, titlePlanets }) {
  return (
    <table>
      <thead>
        <tr>
          {titlePlanets.map((key) => (
            <th key={ key }>{key.replace('_', ' ').toUpperCase()}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {planets.map((planet) => (
          <tr key={ planet.name }>
            { Object.values(planet).map((value) => (
              <td key={ value }>{ value }</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TablePlanets.propTypes = {
  planets: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
  titlePlanets: PropTypes.objectOf().isRequired,
};

export default TablePlanets;
