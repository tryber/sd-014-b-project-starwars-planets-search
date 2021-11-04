import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Select from './Select';
import Input from './Input';
import Button from './Button';

const NumericFilter = () => {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('100000');
  const { setFilterByNumericValues } = useContext(StarWarsContext);
  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
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
