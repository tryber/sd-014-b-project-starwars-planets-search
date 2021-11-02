import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const {
    filters: { filterByNumericValues: [{ column, comparison, value: valor }] },
    setFilters,
    data,
    setPlanetsList } = useContext(MyContext);

  function filterByName({ target }) {
    const nameInput = target.value.toLowerCase();
    const planetsFilteredByName = data
      .filter((planet) => (planet.name.toLowerCase()).includes(nameInput));
    setPlanetsList(planetsFilteredByName);
    setFilters({ filterByName: { name: nameInput } });
  }

  function handleChangeFilter({ target: { name, value } }) {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [{
        ...prevState.filterByNumericValues[0],
        [name]: value,
      }],
    }));
  }

  function handleClick() {
    console.log(column, comparison, valor);
    const planetsFiltered = data.filter((planet) => {
      console.log(column, planet[column], valor);
      switch (comparison) {
      case 'menor que':
        return Number(planet[column]) < valor;
      case 'maior que':
        return Number(planet[column]) > valor;
      case 'igual a':
        return Number(planet[column]) === Number(valor);
      default:
        return planet;
      }
    });
    setPlanetsList(planetsFiltered);
  }

  // function handleChangeName({ target }) {
  //   const nameInput = target.value;
  //   setFilters({ filterByName: { name: nameInput.toLowerCase() } });
  //   filterByName();
  // }

  // useEffect(() => filterByName(), [planetsList]);

  return (
    <form>
      <input
        type="text"
        placeholder="Filtrar por nome"
        data-testid="name-filter"
        onChange={ filterByName }
        name="name"
        // value={ name }
      />
      <select
        name="column"
        id="column-filter"
        data-testid="column-filter"
        onChange={ handleChangeFilter }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        id="comparison-filter"
        data-testid="comparison-filter"
        onChange={ handleChangeFilter }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        name="value"
        id="value"
        data-testid="value-filter"
        onChange={ handleChangeFilter }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar

      </button>
    </form>
  );
}

export default Header;
