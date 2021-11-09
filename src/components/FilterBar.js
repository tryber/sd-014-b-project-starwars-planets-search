import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function FilterBar() {
  const {
    apllyFilter,
    resultSearch: planets,
    newList,
  } = useContext(PlanetsContext);

  const [takeColumns, setColumns] = useState('population');
  const [takeComparison, setComparison] = useState('maior que');
  const [takeValue, setValue] = useState(0);

  const handleColumns = ({ target }) => {
    const takeCol = target.value;
    setColumns(takeCol);
  };

  const handleComparison = ({ target }) => {
    const takeComp = target.value;
    setComparison(takeComp);
  };

  const handleValue = ({ target }) => {
    const valueInput = target.value;
    setValue(valueInput);
  };

  function listed() {
    const listedPlanets = planets.filter((planet) => {
      switch (takeComparison) {
      case 'maior que':
        return +(planet[takeColumns]) > takeValue;
      case 'menor que':
        return +(planet[takeColumns]) < takeValue;
      case 'igual a':
        return +(planet[takeColumns]) === +takeValue;
      default:
        return planet;
      }
    });
    newList(listedPlanets);
  }

  const options = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const selected = (listOfoptions) => {
    listOfoptions.filter((elem) => elem !== takeColumns);
    return (
      listOfoptions.map((option, index) => (
        <option key={ index }>{option}</option>
      ))
    );
  };

  const handleClick = () => {
    const filtersCoparison = {
      column: takeColumns,
      comparison: takeComparison,
      value: takeValue,
    };
    apllyFilter(filtersCoparison);
    listed();
    selected(options);
  };

  return (
    <div>
      <form>
        <select name="column" data-testid="column-filter" onChange={ handleColumns }>
          {selected(options)}
          {/* <option name="population">population</option>
          <option name="orbital_period">orbital_period</option>
          <option name="diameter">diameter</option>
          <option name="rotation_period">rotation_period</option>
          <option name="surface_water">surface_water</option> */}
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ handleComparison }
        >
          <option name="comparison">maior que</option>
          <option name="comparison">menor que</option>
          <option name="comparison">igual a</option>
        </select>
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ handleValue }
        />
        <button type="button" data-testid="button-filter" onClick={ () => handleClick() }>
          Filtrar
        </button>
      </form>
      <div>
        { `${takeColumns} ${takeComparison} ${takeValue} `}
        <button type="button">
          X
        </button>
      </div>
    </div>
  );
}

export default FilterBar;
