import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Input from './Input';

const Form = () => {
  const { filters: { filterByName: { name } } } = useContext(StarWarsContext);
  return (
    <form>
      <Input
        id="name-filter"
        name="name"
        placeholder="Filtre pelo nome"
        type="text"
        value={ name }
      />
    </form>
  );
};

export default Form;
