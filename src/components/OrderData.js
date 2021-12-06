import React, { useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';

const OrderData = () => {
  const { setOption, setOrder, option, getFilterOrder,
    orderFilter, planetFiltered } = useContext(ContextPlanets);
  const { filterColums } = useContext(ContextPlanets);

  const handleChange = ({ target: { value } }) => {
    setOrder(value);
  };

  const handleChangeOption = ({ target: { value } }) => {
    setOption(value);
  };

  const verifyCaseAsc = () => {
    switch (orderFilter) {
    case 'ASC':
      if (option !== 'name' && option !== '') {
        return planetFiltered.sort((a, b) => {
          if (Number(a[option]) < Number(b[option])) {
            const negative = -1;
            return negative;
          } return true;
        });
      } if (option === 'name' && option !== '') {
        return planetFiltered.sort((a, b) => {
          if (a[option] < b[option]) {
            const negative = -1;
            return negative;
          } return true;
        });
      }
      break;
    default:
      break;
    }
  };

  const verifyCaseDesc = () => {
    switch (orderFilter) {
    case 'DESC':
      if (option !== 'name' && option !== '') {
        return planetFiltered.sort((a, b) => {
          if (Number(a[option]) > Number(b[option])) {
            const negative = -1;
            return negative;
          } return true;
        });
      } if (option === 'name' && option !== '') {
        return planetFiltered.sort((a, b) => {
          if (a[option] > b[option]) {
            const negative = -1;
            return negative;
          } return true;
        });
      }
      break;
    default:
      break;
    }
  };

  const verifyOrder = () => {
    verifyCaseAsc();
    verifyCaseDesc();
  };

  const handleClick = () => {
    getFilterOrder();
    verifyOrder();
  };

  return (
    <section className="section-orderData">
      <select
        data-testid="column-sort"
        value={ option }
        onChange={ handleChangeOption }
        className="select-filter"
      >
        <option>name</option>
        { filterColums.map((title, index) => (
          <option key={ index }>
            {title}
          </option>
        ))}
      </select>
      <label
        htmlFor="acendente"
        className="labelOrder"
      >
        ASCENDENTE
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          value="ASC"
          id="acendente"
          name="radio-order"
          onChange={ handleChange }
          className="radio-order"
        />
      </label>
      <label
        htmlFor="descendente"
        className="labelOrder"
      >
        DESCENDENTE
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          value="DESC"
          id="descendente"
          name="radio-order"
          onChange={ handleChange }
          className="radio-order"
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ handleClick }
        className="btn-filter"
      >
        ordenar

      </button>
    </section>
  );
};

export default OrderData;
