import React from 'react';
import AppliedFilters from './AppliedFilters';
import FilterByName from './FilterByName';
import FilterByNumericValues from './FilterByNumericValues';
import SortTable from './SortTable';

function Filters() {
  return (
    <section>
      <FilterByName />
      <div>
        <FilterByNumericValues />
        <SortTable />
      </div>
      <AppliedFilters />
    </section>
  );
}

export default Filters;
