import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Select from './Select';
import Input from './Input';
import Button from './Button';

const NumericFilter = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');
  const {
    filters: { filterByNumericValues },
    setFilterByNumericValues,
    columnOptions,
    setColumnOptions,
  } = useContext(StarWarsContext);

  useEffect(() => {
    filterByNumericValues.forEach((filter) => {
      const filtered = columnOptions.filter((option) => option !== filter.column);
      setColumnOptions(filtered);
    });
    setColumn(columnOptions[0]);
  }, [columnOptions, filterByNumericValues, setColumnOptions]);

  const comparisonOptions = ['maior que', 'menor que', 'igual a'];
  return (
    <form>
      <Select
        id="column-filter"
        name="column"
        onChange={ ({ target }) => setColumn(target.value) }
        options={ columnOptions }
        value={ column }
      />
      <Select
        id="comparison-filter"
        name="comparison"
        onChange={ ({ target }) => setComparison(target.value) }
        options={ comparisonOptions }
        value={ comparison }
      />
      <Input
        id="value-filter"
        name="value"
        onChange={ ({ target }) => setValue(target.value) }
        type="number"
        value={ value }
      />
      <Button
        id="button-filter"
        label="Filtrar"
        onClick={ () => setFilterByNumericValues({ column, comparison, value }) }
      />
    </form>
  );
};

export default NumericFilter;
