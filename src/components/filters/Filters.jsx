import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';
import './filters.css';

export default function Filters() {
  const [stateLocal, setStateLocal] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const { setArrayFilters } = useContext(MyContext);

  function filterByName({ target: { id, value } }) {
    setFilters((prevState) => ({
      ...prevState,
      filters: { filterByName: { [id]: value } },
    }));
    setArrayFilters([filters]);
  }
  // data.filter(({ name }) => {
  //   console.log(name);
  //   return name;
  // });

  // preciso pegar os dados da api - ok
  // Linha 7

  // passar plela minha logíca de filtros

  // LÓGICA DO FILTER
  // pegar o que está sendo digitado no input
  console.log(filters);
  // verificar se os dados na posição name inclui o que está sendo digitado no input
  // retornar esses dados

  // salvar os dados filtrados no contextos
  // renderizar os dados filtrados na tabela

  return (
    <form>
      <label htmlFor="name">
        <input
          id="name"
          name="name"
          // value={ filters.filterByName.name }
          type="text"
          data-testid="name-filter"
          placeholder="Filtrar por nome"
          onChange={ filterByName }
        />
      </label>
    </form>
  );
}
