import React, { useContext } from 'react';
import Context from '../Context/Context';

function Ordenar() {
  const { data, setData, dataOrdem } = useContext(Context);

  const optionSelect = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  function buttonOrder() {
    const column = document.querySelector('#coluna').value;
    const asc = document.querySelector('#ascendente');
    const desc = document.querySelector('#descendente');
    const order = (asc.checked ? asc.value : desc.value);
    const ordenado = dataOrdem(data, column, order);
    setData([...ordenado]);
  }

  return (
    <div>
      <label htmlFor="coluna">
        Order
        <select id="coluna" data-testid="column-sort">
          { optionSelect.map((option, index) => (
            <option key={ index }>{ option }</option>
          ))}
        </select>
      </label>
      <label htmlFor="ascendente">
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          value="ASC"
          id="ascendente"
          name="order"
        />
        Ascendente
      </label>
      <label htmlFor="descendente">
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          value="DESC"
          id="descendente"
          name="order"
        />
        Descendente
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ buttonOrder }
      >
        Ordenar
      </button>
    </div>
  );
}

export default Ordenar;
