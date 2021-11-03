import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../context/AppContext';
import Loading from './Loading';
import './styles/table.css';

function Table() {
  const { data } = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  // ComponentDidUpdate - espera vir o resultado da API e seta o loading pra false
  useEffect(() => {
    if (data.length) {
      setLoading(false);
    }
  }, [data]);

  if (!loading) {
    return (
      <table className="table">
        <thead>
          <tr>
            {Object.keys(data[0])
              .map((key, index) => <th scope="col" key={ index }>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map(({
            name, rotation_period, orbital_period, diameter, climate,
            gravity, terrain, surface_water, population, films,
            created, edited, url,
          }, index) => (
            <tr key={ index }>
              <td key={ name }>{name}</td>
              <td key={ rotation_period }>{rotation_period}</td>
              <td key={ orbital_period }>{orbital_period}</td>
              <td key={ diameter }>{diameter}</td>
              <td key={ climate }>{climate}</td>
              <td key={ gravity }>{gravity}</td>
              <td key={ terrain }>{terrain}</td>
              <td key={ surface_water }>{surface_water}</td>
              <td key={ population }>{population}</td>
              <td key={ films }>{films}</td>
              <td key={ created }>{created}</td>
              <td key={ edited }>{edited}</td>
              <td key={ url }>{url}</td>
            </tr>))}
        </tbody>
      </table>
    );
  }
  return (
    <Loading />
  );
}

export default Table;
