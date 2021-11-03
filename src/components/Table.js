import React, { useState, useEffect, useContext } from 'react';
import PlannetsContext from '../context/PlannetsContext';

export default function Table() {
  const { data } = useContext(PlannetsContext);
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const headerObj = data[0];
      const headerArray = Object.keys(headerObj);
      const index = 9;
      headerArray.splice(index, 1);
      setHeaders(headerArray);
    }
  }, [data]);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((value, index) => <th key={ index }>{value}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map((value, index) => (
          <tr key={ index }>
            <td key={ value.name }>{value.name}</td>
            <td key={ value.rotation_period }>{value.rotation_period}</td>
            <td key={ value.orbital_period }>{value.orbital_period}</td>
            <td key={ value.diameter }>{value.diameter}</td>
            <td key={ value.climate }>{value.climate}</td>
            <td key={ value.gravity }>{value.gravity}</td>
            <td key={ value.terrain }>{value.terrain}</td>
            <td key={ value.surface_water }>{value.surface_water}</td>
            <td key={ value.population }>{value.population}</td>
            <td key={ value.films }>{value.films}</td>
            <td key={ value.created }>{value.created}</td>
            <td key={ value.edited }>{value.edited}</td>
            <td key={ value.url }>{value.rotation_period}</td>
          </tr>))}
      </tbody>
    </table>
  );
}
