import React, { useContext, useState } from 'react';
import MyContext from '../../context/MyContext';

export default function OrderFilter() {
  const {
    setFilterByOrder,
    filteredPlanets,
    filters: { order },
  } = useContext(MyContext);

  const [filterOder, setFilterOrder] = useState(order);

  const nameColumns = () => {
    let keys = [...filteredPlanets];
    filteredPlanets.forEach((element) => {
      keys = Object.keys(element);
      keys = keys.filter((key) => key !== 'residents');
    });
    return keys;
  };

  const handleChange = ({ target: { name, value } }) => {
    setFilterOrder((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    console.log('clicou');
    setFilterByOrder(filterOder);
  };

  return (
    <form>
      <select
        data-testid="column-sort"
        name="column"
        value={ filterOder.column }
        onChange={ handleChange }
      >
        {nameColumns().map((opt, i) => <option key={ i }>{opt}</option>)}
      </select>
      <label htmlFor="up">
        <input
          onChange={ handleChange }
          data-testid="column-sort-input-asc"
          id="up"
          name="sort"
          type="radio"
          value="ASC"
        />
        Ascendente
      </label>
      <label htmlFor="down">
        <input
          onChange={ handleChange }
          name="sort"
          data-testid="column-sort-input-desc"
          id="down"
          type="radio"
          value="DESC"
        />
        Descendente
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ handleClick }
      >
        Ordenar
      </button>
    </form>
  );
}
