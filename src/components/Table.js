import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const [nameHeader, setNameHeader] = useState([]);
  const { data } = useContext(StarWarsContext);

  useEffect(() => {
    if (data.length > 0) {
      const Nove = 9;
      const names = Object.keys(data[0]);
      names.splice(Nove, 1);
      setNameHeader(names);
    }
  }, [data]);

  return (
    <table>
      <thead>
        <tr>
          { nameHeader.map((name) => <th key={ name }>{ name }</th>) }
        </tr>
      </thead>
      <tbody>
        { data.map((value, index) => (
          <tr key={ index }>
            <td key={ value.name }>{ value.name }</td>
            <td key={ value.rotation_period }>{ value.rotation_period }</td>
            <td key={ value.orbital_period }>{ value.orbital_period }</td>
            <td key={ value.diameter }>{ value.diameter }</td>
            <td key={ value.climate }>{ value.climate }</td>
            <td key={ value.gravity }>{ value.gravity }</td>
            <td key={ value.terrain }>{ value.terrain }</td>
            <td key={ value.surface_water }>{ value.surface_water }</td>
            <td key={ value.population }>{ value.population }</td>
            <td key={ value.films }>{ value.films }</td>
            <td key={ value.created }>{ value.created }</td>
            <td key={ value.edited }>{ value.edited }</td>
            <td key={ value.url }>{ value.url }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
