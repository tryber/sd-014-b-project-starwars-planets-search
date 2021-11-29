import React, { useContext, useEffect, useState } from 'react';
import AppContext from './context/AppContext';

const Table = () => {
  const { data, setData, loading, setLoading, headers, setHeaders } = useContext(AppContext);
  const myHeaders = ['Name', 'Rotation period', 'Orbital period', 'Diameter', 'Climate', 'Gravity', 'Terrain'];
  return (
    <table>
      <tbody>
        <input placeholder='filtrar por nome' type='text'/>
        <tr>
          {myHeaders.map(header => <th>{header}</th>)}
        </tr>
        {console.log(data)}
        {data.map((item, index) => (<tr key={ index }>
          <td>{item.name}</td>
          <td>{item.rotation_period}</td>
          <td>{item.orbital_period}</td>
          <td>{item.diameter}</td>
          <td>{item.climate}</td>
          <td>{item.gravity}</td>
          <td>{item.terrain}</td>
          <td>
            {item.population}
          </td>
          <td>
            {item.films}
          </td>
        </tr>))}
      </tbody>
    </table>
  );
};

export default Table;
