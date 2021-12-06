import React, { useContext } from 'react';
import ContextPlanets from '../context/ContextPlanets';
import { optionsComparison } from '../helper/helper';
import OrderData from './OrderData';
import UlFilter from './UlFilter';

const Filter = () => {
  const { getFilterNumeric, column, comparison,
    setComparison, setColumn, filterComparison,
    setValue, value, filterColums, setFilterColumns } = useContext(ContextPlanets);

  const handleColumn = ({ target }) => {
    setColumn(target.value);
  };

  const handleComparison = ({ target }) => {
    setComparison(target.value);
  };

  const handleInput = ({ target }) => {
    setValue(target.value);
  };

  const resetState = () => {
    setColumn('');
    setComparison('');
    setValue('0');
  };

  const handleClick = () => {
    getFilterNumeric();
    const filteredColums = filterColums
      .filter((option) => option !== column);
    filterComparison();
    setFilterColumns(filteredColums);
    resetState();
  };

  return (
    <>
      <section className="section-filter">
        <select
          data-testid="column-filter"
          onChange={ handleColumn }
          value={ column }
          className="select-filter"
        >
          { filterColums.map((option, index) => (
            <option key={ index }>{ option }</option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ handleComparison }
          value={ comparison }
          className="select-filter"
        >
          {optionsComparison.map((option, index) => (
            <option key={ index }>{ option }</option>
          ))}
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ handleInput }
          value={ value }
          className="input-select-filter"
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
          className="btn-filter"
        >
          Filtrar
        </button>
        <OrderData />
      </section>
      <section>
        <UlFilter />
      </section>
    </>
  );
};

export default Filter;
