import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Input from './Input';

const TextFilter = () => {
  const { setFilterByName } = useContext(StarWarsContext);
  const { filters: { filterByName: { name } } } = useContext(StarWarsContext);
  return (
    <form>
      <Input
        id="name-filter"
        name="name"
        onChange={ ({ target }) => setFilterByName(target.value) }
        placeholder="Filtre pelo nome"
        type="text"
        value={ name }
      />
    </form>
  );
};

export default TextFilter;
