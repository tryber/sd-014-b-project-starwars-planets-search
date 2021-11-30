import PropTypes from 'prop-types';
import React from 'react';

function PlanetTableRow({ planetInfo, ...props }) {
  return (
    <tr { ...props }>
      {Object.keys(planetInfo).map((info) => {
        if (info === 'name') {
          return (
            <td data-testid="planet-name" key={ info }>
              {planetInfo[info]}
            </td>
          );
        }

        return <td key={ info }>{planetInfo[info]}</td>;
      })}
    </tr>
  );
}

PlanetTableRow.propTypes = {
  planetInfo: PropTypes.shape({
    films: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PlanetTableRow;
