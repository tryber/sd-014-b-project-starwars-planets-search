import React, { useState, useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import NumericFilter from './NumericFilter';

import './styles/Filters.css';

function Filters() {
  const { setFiltersList, filtersList, filterByName } = useContext(PlanetsContext);

  const [valueState, setValueState] = useState('');

  useEffect(() => {
    setValueState(filtersList.filters.filterByName.name);
  }, []);

  function handleChange(value) {
    setValueState(value);
    filterByName(value);

    setFiltersList({
      filters: {
        ...filtersList.filters,
        filterByName: {
          name: value,
        },
      },
    });
  }

  return (
    <div className='filters'>
      <form className="form_container">
        <label htmlFor="name-filter-input">
          <input
          placeholder="  Procure por nome"
            value={ valueState }
            id="name-filter-input"
            data-testid="name-filter"
            onChange={ ({ target: { value } }) => {
              handleChange(value);
            } }
          />
        </label>
        <NumericFilter />
      </form>
    </div>
  );
}

export default Filters;
