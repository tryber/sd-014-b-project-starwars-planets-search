import React, { useState, useContext, useEffect } from 'react';
import Context from '../context/Context';
import NumericFilter from './NumericFilter';

function Filters() {
  const { setFiltersList, filtersList, filterByName } = useContext(Context);

  const [valueState, setValueState] = useState('');

  useEffect(() => {
    setValueState(filtersList.filters.filterByName.name);
  }, [filtersList.filters]);

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
        <NumericFilter />
      </form>
    </div>
  );
}

export default Filters;
