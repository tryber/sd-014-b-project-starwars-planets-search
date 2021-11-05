import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Header = () => {
  const { setData,
    data,
    setFilterButton,
    columnState,
    setColumnState,
    filters: {
      filterByName,
      setFilterByName,
      setNumericValue },
    infoFilter: {
      column,
      setColumn,
      comparison,
      setComparison,
      value,
      setValue,
    } } = useContext(MyContext);
  const handleClick = () => {
    setFilterButton(true);
    setNumericValue({
      column,
      comparison,
      value,
    });
    setData(data);
    setColumnState(columnState.filter((e) => e !== column));
  };
  return (
    <header>
      <input
        data-testid="name-filter"
        value={ filterByName }
        onChange={ ({ target }) => setFilterByName(target.value) }
      />
      <select
        value={ column }
        onChange={ ({ target }) => setColumn(target.value) }
        data-testid="column-filter"
      >
        {columnState.map((e) => <option key={ e }>{e}</option>)}
      </select>
      <select
        value={ comparison }
        onChange={ ({ target }) => setComparison(target.value) }
        data-testid="comparison-filter"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        value={ value }
        onChange={ ({ target }) => setValue(target.value) }
        data-testid="value-filter"
        type="number"
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => handleClick() }
      >
        Filtrar!
      </button>
    </header>);
};

export default Header;
