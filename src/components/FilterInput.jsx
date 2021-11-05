import React, { Component } from 'react';
import SearchContext from '../provider/SearchContext';

class FilterInput extends Component {
  constructor() {
    super();
    this.state = { value: '' };
    this.onChange = this.onChange.bind(this);
  }

  componentDidUpdate() {
    const { setValue } = this.context;
    const { value } = this.state;
    setValue(value);
  }

  handleClick() {
    const { saveName, saveNumeric, removeFilter,
      filter, column, comparison, value } = this.context;
    const name = filter;
    if (name !== '') {
      saveName(name);
    }
    const arrayNumeric = [column, comparison, value];
    if (value !== '') {
      removeFilter(column);
      saveNumeric(arrayNumeric);
    }
  }

  // https://www.ti-enxame.com/pt/reactjs/como-permitir-apenas-numeros-na-caixa-de-texto-em-reactjs/831379815/
  onChange(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
    }
  }

  render() {
    const { setColumn, setComparison,
      setFilter, toRemove } = this.context;
    const { value } = this.state;
    const options = ['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    const factors = ['maior que', 'menor que', 'igual a'];
    return (
      <>
        <div>
          <input
            data-testid="name-filter"
            type="text"
            onChange={ (e) => setFilter(e.target.value) }
            placeholder="Filtrar por nome"
          />
        </div>
        <select
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          { options
            .filter((e) => !toRemove.includes(e))
            .map((e) => <option key={ e }>{e}</option>)}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          { factors.map((e) => <option key={ e }>{e}</option>)}
        </select>
        <input
          data-testid="value-filter"
          value={ value }
          onChange={ this.onChange }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => this.handleClick() }
        >
          Filtrar
        </button>
      </>
    );
  }
}

FilterInput.contextType = SearchContext;

export default FilterInput;
