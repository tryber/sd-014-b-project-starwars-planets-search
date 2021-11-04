import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import Input from './Input';
import Select from './Select';

function Form({ filterByName, filterComparasionNumeric }) {
  const [textSearch, setTextSearch] = useState('');
  const [textColumnSelect, setColumnSelect] = useState('population');
  const [textComparisonSelect, setComparisonSelect] = useState('maior que');
  const [valueFilter, setValueFilter] = useState('');

  const handleFilterByName = ({ target }) => {
    setTextSearch(target.value);
  };

  useEffect(() => {
    filterByName(textSearch);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textSearch]);

  const optionsColumnSelect = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  return (
    <form className="form">
      <Input
        className="btn-search"
        inputName="search"
        onChange={ (event) => handleFilterByName(event) }
        placeholder="Ex: Tatoonie"
        type="text"
        value={ textSearch }
        dataTestId="name-filter"
      >
        Faça sua pesquisa:
      </Input>

      <Select
        dataTestId="column-filter"
        id="column-select"
        nameSelect="column"
        onChange={ ({ target }) => setColumnSelect(target.value) }
        options={ optionsColumnSelect }
        value={ textColumnSelect }
      />

      <Select
        dataTestId="comparison-filter"
        id="comparison-select"
        nameSelect="comparison"
        onChange={ ({ target }) => setComparisonSelect(target.value) }
        options={ ['maior que', 'menor que', 'igual a'] }
        value={ textComparisonSelect }
      />

      <Input
        className="value-filter"
        inputName="valueFilter"
        onChange={ ({ target }) => setValueFilter(target.value) }
        placeholder="Ex: 10.000"
        type="number"
        value={ valueFilter }
        dataTestId="value-filter"
      />

      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => filterComparasionNumeric(
          textColumnSelect, textComparisonSelect, valueFilter,
        ) }
      >
        Acionar
      </button>

    </form>
  );
}

Form.propTypes = {
  filterComparasionNumeric: PropTypes.func.isRequired,
  filterByName: PropTypes.func.isRequired,
};

export default Form;
