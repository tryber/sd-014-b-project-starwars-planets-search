import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './styles/table.css';

function Table() {
  const { data, filteredData } = useContext(AppContext);

  return (
    <table className="table">
      <thead>
        <tr>
          {Object.keys(data[0])
            .map((key, index) => <th scope="col" key={ index }>{key}</th>)}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((planet, index) => {
          const { name, diameter, climate, gravity, terrain,
            population, films, created, edited, url } = planet;

          return (
            <tr key={ index }>
              <td key={ name }>{name}</td>
              <td key={ planet.rotation_period }>{planet.rotation_period}</td>
              <td key={ planet.orbital_period }>{planet.orbital_period}</td>
              <td key={ diameter }>{diameter}</td>
              <td key={ climate }>{climate}</td>
              <td key={ gravity }>{gravity}</td>
              <td key={ terrain }>{terrain}</td>
              <td key={ planet.surface_water }>{planet.surface_water}</td>
              <td key={ population }>{population}</td>
              <td key={ films }>{films}</td>
              <td key={ created }>{created}</td>
              <td key={ edited }>{edited}</td>
              <td key={ url }>{url}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
