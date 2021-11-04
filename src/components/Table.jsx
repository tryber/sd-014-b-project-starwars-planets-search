import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';

export default function Table() {
  const { data, filterByName, dataFilter, filterOn } = useContext(MyContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [data]);

  const renderFilter = () => {
    if (filterOn) {
      return dataFilter;
    }
    return filterByName;
  };

  const table = (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>climate</th>
          <th>population</th>
          <th>surface water</th>
          <th>created</th>
          <th>diameter</th>
          <th>edited</th>
          <th>films</th>
          <th>gravity</th>
          <th>orbital period</th>
          <th>rotation period</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {renderFilter().map((planets) => (
          <tr key={ planets.name }>
            <td>{planets.name}</td>
            <td>{planets.climate}</td>
            <td>{planets.created}</td>
            <td>{planets.diameter}</td>
            <td>{planets.edited}</td>
            <td>{planets.films}</td>
            <td>{planets.gravity}</td>
            <td>{planets.orbital_period}</td>
            <td>{planets.population}</td>
            <td>{planets.rotation_period}</td>
            <td>{planets.surface_water}</td>
            <td>{planets.terrain}</td>
            <td>{planets.url}</td>
          </tr>
        ))}
      </tbody>
    </table>);

  return (

    <div>
      {loading ? <p>Carregando...</p> : table }

    </div>

  );
}
