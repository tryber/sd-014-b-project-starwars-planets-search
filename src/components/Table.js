import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../context/MyContext';
import useData from '../hooks/useData';

function Table() {
  const { filters, setFilters } = useContext(MyContext);
  const [data] = useData();
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    if (data.length !== 0) {
      setDataFilter(data);
    }
  }, [data]);

  console.log(dataFilter);
  const filterName = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
    setDataFilter(data
      .filter((planet) => planet.name.toLowerCase().includes(target.value)));
  };

  return (
    <div>
      <input data-testid="name-filter" onChange={ filterName } />
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
                dataFilter.map((item) => (
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

export default Table;
