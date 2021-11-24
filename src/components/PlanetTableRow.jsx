// /* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function PlanetTableRow({ planetInfo, ...props }) {
  const [residents, setResidents] = useState('');
  const [films, setFilms] = useState('');

  useEffect(() => {
    console.log(planetInfo.residents);
    planetInfo.residents.forEach((resident) => {
      fetch(resident)
        .then((buffer) => buffer.json())
        .then((response) => setResidents((prev) => {
          const name = prev ? `${prev}, ${response.name}` : response.name;
          return name;
        }));
    });
  }, [planetInfo.residents]);

  useEffect(() => {
    planetInfo.films.forEach((film) => {
      fetch(film)
        .then((buffer) => buffer.json())
        .then((response) => setFilms((prev) => {
          const name = prev ? `${prev}, ${response.title}` : response.title;
          return name;
        }));
    });
  }, [planetInfo.films]);

  return (
    <tr { ...props }>
      {Object.keys(planetInfo).map((info) => {
        switch (info) {
        case 'residents':
          return <td key={ info }>{residents.substr(0, residents.length - 1)}</td>;
        case 'films':
          return <td key={ info }>{films.substr(0, films.length - 1)}</td>;

        default:
          return <td key={ info }>{planetInfo[info]}</td>;
        }
      })}
    </tr>
  );
}

PlanetTableRow.propTypes = {
  planetInfo: PropTypes.shape({
    films: PropTypes.arrayOf(PropTypes.string).isRequired,
    residents: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PlanetTableRow;
