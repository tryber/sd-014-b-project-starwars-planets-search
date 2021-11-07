import React, { useContext, useState } from 'react';
import PlanetApiContext from '../context/PlanetContext';

function FilterSelect() {
  const { dataPlanet, setNewFilterArray,
    setIsNewFilter, arrayColomnFilter,
    filteredItem, setFilteredItem } = useContext(PlanetApiContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [inputValue, setInputValue] = useState('100000');
  const [newFilter, setNewFilter] = useState(arrayColomnFilter);

  function handleChangeColumn({ target }) {
    const { value } = target;
    setColumn(value);
  }

  function handleChangeComparison({ target }) {
    const { value } = target;
    setComparison(value);
  }

  function handleChangeInputValue({ target }) {
    const { value } = target;
    setInputValue(value);
  }

  // console.log('column', column);
  const editFilter = () => {
    const filterItem = newFilter.filter((item) => item !== column);
    setNewFilter(filterItem);
  };

  function filterNewArray() {
    let newArray = [];
    if (comparison === 'igual a') {
      newArray = dataPlanet.filter((item) => item[column] === inputValue);
    }
    if (comparison === 'maior que') {
      newArray = dataPlanet.filter((item) => item[column] > Number(inputValue));
    }
    if (comparison === 'menor que') {
      newArray = dataPlanet.filter((item) => item[column] < Number(inputValue));
    }
    setFilteredItem([...filteredItem, {
      newColumn: column,
      newComparison: comparison,
      newInputValue: inputValue,
    }]);
    setNewFilterArray(newArray);
    setIsNewFilter(true);
    editFilter();
  }

  return (
    <div>
      <select
        value={ column }
        onChange={ handleChangeColumn }
        data-testid="column-filter"
      >
        {newFilter
          .map((item, index) => <option key={ index }>{item}</option>)}
      </select>
      <select
        value={ comparison }
        onChange={ handleChangeComparison }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <label
        value={ inputValue }
        onChange={ handleChangeInputValue }
        htmlFor="value-filter"
      >
        <input
          data-testid="value-filter"
          id="value-filter"
          name="value"
          type="number"
        />
        <button
          data-testid="button-filter"
          onClick={ filterNewArray }
          type="button"
        >
          Filtrar
        </button>
      </label>
      {/* <div>
        {newArrayColomnFilter && newArrayColomnFilter
          .map((item, index) => <div key={ index }>{item}</div>)}

      </div> */}
    </div>
  );
}

export default FilterSelect;
