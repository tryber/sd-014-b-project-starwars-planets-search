import React, { useContext } from 'react';
import AppContext from './context/AppContext';

const myHeaders = ['Name', 'Rotation period',
  'Orbital period', 'Diameter', 'Climate', 'Gravity',
  'Terrain', 'Population', 'films', 'Created', 'Edited', 'URL', 'Surface Water'];
const colum_filter = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];
const comparison_filter = ['maior que', 'igual a', 'menor que'];

const Table = () => {
  const { data, results, filters: { filterByName: { name: filterName },
    filterByNumericValues: [{
      column: filterColum,
      comparison: filterComparison,
      value: filterValue,
    }],
  }, setFilterName, setFilterComparison,
  setFilterColum, setFilterValue, setData } = useContext(AppContext);
  return (
    <>
      <input
        data-testid="name-filter"
        onChange={ ({ target }) => setFilterName(target.value) }
        placeholder="filtrar por nome"
        type="text"
      />
      <br />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => {
          setData(results);
          setFilterColum(target.value)} }
      >
        {colum_filter.map((item) => <option>{item}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => {
          setData(results);
          setFilterComparison(target.value)} }
      >
        {comparison_filter.map((item) => <option>{item}</option>)}
      </select>
      <input 
        onChange={ ({ target }) => {
          console.log(typeof(filterValue))
          setData(results);
          setFilterValue(target.value)}} 
        data-testid="value-filter" 
        type="number" 
      />
      <button
        data-testid='button-filter'
        type='button'
        onClick={()=> {
          setData(data.filter(obj => {
            if(filterComparison === 'maior que' ){
              return Number(obj[filterColum]) > Number(filterValue);
            }
            if(filterComparison === 'menor que' ){
              return Number(obj[filterColum]) < Number(filterValue);
            }
            if(filterComparison === 'igual a' ){
              return Number(obj[filterColum]) === Number(filterValue);
            }
        }))}}
        >
        Add filtro
      </button>
      <table>
        <tbody>
          <tr>
            {myHeaders.map((header, index) => <th key={ index }>{header}</th>)}
          </tr>
          {data.filter((obj) => obj.name.includes(filterName))
            .map((item, index) => (
              <tr key={ index }>
                <td>{item.name}</td>
                <td>{item.rotation_period}</td>
                <td>{item.orbital_period}</td>
                <td>{item.diameter}</td>
                <td>{item.climate}</td>
                <td>{item.gravity}</td>
                <td>{item.terrain}</td>
                <td>{item.population}</td>
                <td>{item.films}</td>
                <td>{item.created}</td>
                <td>{item.edited}</td>
                <td>{item.url}</td>
                <td>{item.surface_water}</td>
              </tr>
            ))}
        
        </tbody>
      </table>
    </>
  );
};

export default Table;
