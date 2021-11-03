import React, { useContext, useEffect } from 'react';
import MyContext from '../myContext/MyContext';
import InputText from './InputText';

export default function TablePlanets() {
  const { data, setData, inputText, setInputText } = useContext(MyContext);

  useEffect(() => {
    const requestApi = async () => {
      const dataPlanets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json());
      const { results } = dataPlanets;
      setData(results);
    };
    requestApi();
  }, []);

  const handleChange = ({ target }) => {
    setInputText(target.value);
  };

  return (
    <div>
      <InputText handleChange={ handleChange } />
      <table>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
        <tbody>
          {data.filter(({ name }) => inputText === '' || name.includes(inputText))
            .map((planet) => (
              <tr key={ planet.name }>
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
            ))}
        </tbody>
      </table>
    </div>
  );
}
