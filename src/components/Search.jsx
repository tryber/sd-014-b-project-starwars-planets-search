import React, { useState, useContext } from 'react';
import MyContext from '../Context/MyContext';

export default function Search() {
  const [planet, setPlanet] = useState('');
  const { filterByName, data } = useContext(MyContext);

  const filterPlanetText = (value) => {
    const filterPlanet = data.filter(({ name }) => (
      name.includes(value)
    ));
    filterByName(filterPlanet);
  };
  const handleChange = ({ target: { value } }) => {
    setPlanet(value);
    filterPlanetText(value);
  };

  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ planet }
      onChange={ handleChange }
      placeholder="Digite um Planeta"
    />
  );
}
