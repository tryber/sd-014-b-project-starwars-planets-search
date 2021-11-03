import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

export default function Search() {
  const [planet, setPlanet] = useState('');
  const { setFilterByName, data } = useContext(MyContext);

  const filtros = (value) => {
    const planetaFiltrado = data.filter(({ name }) => (
      name.includes(value)
    ));
    console.log('false do if', planetaFiltrado);
    setFilterByName(planetaFiltrado);
  };

  const handleChangePlanet = ({ target: { value } }) => {
    setPlanet(value);
    filtros(value);
  };

  return (
    <input
      data-testid="name-filter"
      value={ planet }
      onChange={ handleChangePlanet }
      placeholder="pesquise um Planeta"
    />
  );
}
