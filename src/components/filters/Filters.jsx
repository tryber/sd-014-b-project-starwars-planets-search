import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';
import './filters.css';

export default function Filters() {
  const [nameFilter, setNameFilter] = useState({ name: '' });

  const { data } = useContext(MyContext);

  // data.filter(({ name }) => {
  //   console.log(name);
  //   return name;
  // });

  // preciso pegar os dados da api - ok
  // Linha 7

  // passar plela minha logíca de filtros

  // LÓGICA DO FILTER
  // pegar o que está sendo digitado no input - ok
  // console.log(nameFilter);
  // verificar se os dados na posição name inclui o que está sendo digitado no input - ok
  const teste = data.filter(({ name }) => name.toLowerCase()
    .includes(nameFilter.name.toLowerCase()));
  console.log(teste);
  // retornar esses dados

  // salvar os dados filtrados no contexto
  // renderizar os dados filtrados na tabela

  return (
    <form>
      <label htmlFor="name">
        <input
          id="name"
          name="name"
          value={ nameFilter.name }
          type="text"
          data-testid="name-filter"
          placeholder="Filtrar por nome"
          onChange={ ({ target: { id, value } }) => setNameFilter({ [id]: value }) }
        />
      </label>
    </form>
  );
}
