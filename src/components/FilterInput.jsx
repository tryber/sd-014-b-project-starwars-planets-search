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

  onChange(e) {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      this.setState({ value: e.target.value });
    }
  }

  render() {
    const { setColumn, setComparison, setFilter } = this.context;
    const { value } = this.state;
    return (
      <>
        <input
          data-testid="name-filter"
          type="text"
          onChange={ (e) => setFilter(e.target.value) }
          placeholder="Filtrar por nome"
        />
        <select
          data-testid="column-filter"
          onChange={ (e) => setColumn(e.target.value) }
        >
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
        <input
          data-testid="value-filter"
          value={ value }
          onChange={ this.onChange }
        />
        <button type="button" data-testid="button-filter">
          Filtrar
        </button>
      </>
    );
  }
}

FilterInput.contextType = SearchContext;

export default FilterInput;
