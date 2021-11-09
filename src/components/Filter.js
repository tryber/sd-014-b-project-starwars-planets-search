import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Input from './Input';
import Select from './Select';

function Filter() {
  const { setSearchByNumerics } = useContext(StarWarsContext);
  return (
    <section>
      <Input />
      <Select />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setSearchByNumerics(true) }
      >
        Filtrar
      </button>
    </section>
  );
}

export default Filter;
