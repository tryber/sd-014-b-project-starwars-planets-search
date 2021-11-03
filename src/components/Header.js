import React from 'react';
import useData from '../hooks/useData';

function Header() {
  const [data] = useData();
  console.log(data);
  return (
    <div>
      {
        data.length === 0 ? <h1>Loading...</h1>
          : (
            <table>
              <tr>
                {
                  Object.keys(data[0])
                    .filter((item) => item !== 'residents')
                    .map((item) => <th key={ item }>{ item }</th>)
                }
              </tr>
              {
                data.map((item) => (
                  <tr key={ item.name }>
                    <td>{item.name}</td>
                    <td>{item.rotation_period}</td>
                    <td>{item.orbital_period}</td>
                    <td>{item.diameter}</td>
                    <td>{item.climate}</td>
                    <td>{item.gravity}</td>
                    <td>{item.terrain}</td>
                    <td>{item.surface_water}</td>
                    <td>{item.population}</td>
                    <td>{item.films}</td>
                    <td>{item.created}</td>
                    <td>{item.edited}</td>
                    <td>{item.url}</td>
                  </tr>))
              }
            </table>
          )
      }
    </div>
  );
}

export default Header;
