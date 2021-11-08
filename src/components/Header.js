import React from 'react';
import FilterNames from './NameFilter';
import NumericFilter from './NumericFilter';

export default class Header extends React.Component {
  render() {
    return (
      <section>
        <FilterNames />
        <NumericFilter />
      </section>
    );
  }
}
