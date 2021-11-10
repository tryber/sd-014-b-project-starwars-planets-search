import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

export default function FilterBar() {
  const { setQntFilter, setColumFilter, setDataFilter,
    dataFilter, columFilter, valueFilter, setValueFilter, qntFilter,
  } = useContext(MyContext);

  const filterClick = () => {
    const orderFilter = dataFilter.filter((val) => {
      if (columFilter === 'maior que') {
        return Number(val[qntFilter]) > Number(valueFilter);
      }
      if (columFilter === 'menor que') {
        return Number(val[qntFilter]) < Number(valueFilter);
      }
      if (columFilter === 'igual a') {
        return Number(val[qntFilter]) === Number(valueFilter);
      }
      return null;
    });
    setDataFilter(orderFilter);
    const optionFather = document.getElementById('optionFather');
    const removeOption = document.getElementById(qntFilter);
    optionFather.removeChild(removeOption);
    // removeOption.setAttribute('disabled', '');
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ (event) => setQntFilter(event.target.value) }
        id="optionFather"
      >
        <option id="population" value="population">population</option>
        <option id="orbital_period" value="orbital_period">orbital_period</option>
        <option id="diameter" value="diameter">diameter</option>
        <option id="rotation_period" value="rotation_period">rotation_period</option>
        <option id="surface_water" value="surface_water">surface_water</option>
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ (event) => setColumFilter(event.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        onChange={ (event) => setValueFilter(event.target.value) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterClick }
      >
        Filtrar
      </button>
    </div>
  );
}
