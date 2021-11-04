import React, { useContext } from 'react';
import TableContext from '../context/TableContext';
import tableHeads from '../data/tableHead';

function Table() {
  const { data, filters } = useContext(TableContext);
  // refatora para evitar uso excessivo de useEffect,
  // ideia dada pelos meus amigos Matheus silveira, Glauco Lomenha e tirada do video https://www.youtube.com/watch?v=OlVkYnVXPl0
  // isso poupa requisicoes, consequentemente dinheiro!!
  let filteredPlanetsFromData = data.filter(
    (planet) => planet.name.includes(filters.filterByName.name),
  );

  console.log(filters);

  filters.filterByNumericValues.forEach((filter) => {
    const { column, value, comparison } = filter;

    if (comparison === 'maior que') {
      filteredPlanetsFromData = filteredPlanetsFromData.filter(
        (planet) => Number(planet[`${column}`]) > Number(value), // passar a chave dinamicamente, ideia de Matheus silveira https://github.com/matheuspmsilveira
      );
    }
    if (comparison === 'menor que') {
      filteredPlanetsFromData = filteredPlanetsFromData.filter(
        (planet) => Number(planet[`${column}`]) < Number(value),
      );
    }
    if (comparison === 'igual a') {
      filteredPlanetsFromData = filteredPlanetsFromData.filter(
        (planet) => Number(planet[`${column}`]) === Number(value),
      );
    }
  });

  return (
    <table>
      <thead>
        <tr>
          {tableHeads.map((head) => (<th key={ head }>{head}</th>))}
          {/* refatora para ganhar espaço criando um array com os cabeçalhos */}
        </tr>
      </thead>
      {filteredPlanetsFromData.map((planet) => (
        <tbody key={ planet.name }>
          <tr>
            <td>{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Table;
