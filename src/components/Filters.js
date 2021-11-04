import React, { useState, useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

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
    <div>
      <form>
        <label htmlFor="name-filter-input">
          <input
            value={ valueState }
            id="name-filter-input"
            data-testid="name-filter"
            onChange={ ({ target: { value } }) => {
              handleChange(value);
            } }
          />
        </label>
      </form>
    </div>
  );
}

export default Filters;
