import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../css/Filter.css';

function Filter() {
  const {
    data,
    setFilters,
    initialOptions,
    setInitialOptions,
    selectOptions,
    setSelectOptions,
    comparisonInitialOptions,
    comparisonOptions,
    setComparisonOptions,
    value,
    setValue,
  } = useContext(AppContext);

  const inputChange = ({ target }) => {
    const inputValue = target.value;
    const listOfPlanets = data.filter(
      (planet) => (planet.name.toLowerCase().includes(inputValue)),
    );
    setFilters(listOfPlanets);
  };

  const handleBtn = () => {
    const listOfPlanets = data.filter((planet) => {
      if (comparisonOptions === 'maior que') {
        return Number(planet[selectOptions]) > Number(value);
      }
      if (comparisonOptions === 'menor que') {
        return Number(planet[selectOptions]) < Number(value);
      }
      if (comparisonOptions === 'igual a') {
        return Number(planet[selectOptions]) === Number(value);
      }
      return null;
    });
    const newSelectList = initialOptions.filter((item) => item !== selectOptions);
    setInitialOptions(newSelectList);
    setFilters(listOfPlanets);
  };

  return (
    <header>
      <h1 className="title">StarWars Project</h1>
      <form>
        <label htmlFor="searchInput">
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            onChange={ inputChange }
            data-testid="name-filter"
            placeholder="enter a name of planet"
          />
        </label>
        <select
          data-testid="column-filter"
          onChange={ ({ target }) => setSelectOptions(target.value) }
        >
          { initialOptions.map((opt, i) => (<option key={ i }>{opt}</option>))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ ({ target }) => setComparisonOptions(target.value) }
        >
          { comparisonInitialOptions.map((opt, i) => (<option key={ i }>{opt}</option>))}
        </select>
        <label htmlFor="valueInput">
          <input
            type="number"
            name="valueInput"
            id="valueInput"
            data-testid="value-filter"
            placeholder="enter a numeric value"
            onChange={ ({ target }) => setValue(target.value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleBtn }
        >
          Filter
        </button>
      </form>
    </header>
  );
}

export default Filter;
