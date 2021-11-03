import React from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

class PlanetsProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      planetsList: 'salve<euBom',
    };
  }

  render() {
    const { children } = this.props;
    return (
      <PlanetsContext.Provider value={ { ...this.state } }>
        { children }
      </PlanetsContext.Provider>
    );
  }
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default PlanetsProvider;
