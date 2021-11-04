import React, { useContext, useState, useEffect } from 'react';
import MyContext from '../context/MyContext';
import useData from '../hooks/useData';

function Table() {
  const { filters, setFilters } = useContext(MyContext);
  const [data] = useData();
  const [dataFilter, setDataFilter] = useState([]);
  const [drop, setDrop] = useState('population');
  const [getComp, setGetComp] = useState('maior que');
  const [number, setNumber] = useState('');
  const [columns] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  useEffect(() => {
    if (data.length !== 0) {
      setDataFilter(data);
    }
  }, [data]);

  const filterName = ({ target }) => {
    setFilters({ ...filters, filterByName: { name: target.value } });
    setDataFilter(data
      .filter((planet) => planet.name.toLowerCase().includes(target.value)));
  };

  const dropDown = ({ target }) => {
    setDrop(target.value);
  };
  // console.log(drop);

  const inputNumber = ({ target }) => {
    setNumber(target.value);
  };
  // console.log(number);

  const comparison = ({ target }) => {
    setGetComp(target.value);
  };
  // console.log(getComp);

  const buttonFilter = () => {
    setFilters({ ...filters,
      filterByNumericValues: [
        {
          column: drop,
          comparison: getComp,
          value: number },
      ] });
    const indexDrop = columns.indexOf(drop);
    console.log(indexDrop);
    columns.splice(indexDrop, 1);
    if (getComp === 'maior que') {
      setDataFilter(data
        .filter((planet) => Number(planet[drop]) > Number(number)));
    } if (getComp === 'menor que') {
      setDataFilter(data
        .filter((planet) => Number(planet[drop]) < Number(number)));
    } if (getComp === 'igual a') {
      setDataFilter(data
        .filter((planet) => Number(planet[drop]) === Number(number)));
    }
  };

  return (
    <div>
      <input data-testid="name-filter" onChange={ filterName } />
      <label htmlFor="dropdown">
        <select data-testid="column-filter" id="dropdown" onChange={ dropDown }>
          {columns.map((item) => <option key={ item }>{item}</option>)}
        </select>
      </label>
      <label htmlFor="comparison">
        <select data-testid="comparison-filter" id="comparison" onChange={ comparison }>
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <input data-testid="value-filter" type="number" onChange={ inputNumber } />
      <button type="submit" data-testid="button-filter" onClick={ buttonFilter }>
        Filter
      </button>
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
