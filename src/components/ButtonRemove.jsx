import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function ButtonRemove() {
  const { filterColumn, setFilterColumn,
    setOptionsColumn, optionsColumn } = useContext(PlanetsContext);
  return (
    <div>
      { filterColumn.map(({ column, comparison, value }, idx) => (
        <div key={ idx } data-testid="filter">
          <span>{column}</span>
          <span>{comparison}</span>
          <span>{value}</span>
          <button
            type="button"
            onClick={ () => {
              setFilterColumn(filterColumn
                .filter((el) => el.column !== column));
              setOptionsColumn([...optionsColumn, column]);
            } }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default ButtonRemove;
