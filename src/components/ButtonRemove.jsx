import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function ButtonRemove() {
  const { filterColumn, setFilterColumn } = useContext(PlanetsContext);
  console.log(filterColumn);
  return (
    <div>
      { filterColumn.map(({ column, comparison, value }, idx) => (
        <div key={ idx }>
          <span>{column}</span>
          <span>{comparison}</span>
          <span>{value}</span>
          <button
            type="button"
            data-testid="filter"
            onClick={ () => {
              setFilterColumn(filterColumn
                .filter((el) => el.column !== column));
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
