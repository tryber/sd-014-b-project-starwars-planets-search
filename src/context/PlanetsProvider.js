import React from 'react';
import PropTypes from 'prop-types';

import PlanetsContext from './PlanetsContext';

class PlanetsProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      planetsList: [],
    };

    this.fetchPlanets = this.fetchPlanets.bind(this);
  }

  fetchPlanets() {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json()
        .then((results) => {
          this.setState({ planetsList: results.results });
        }));
  }

  render() {
    const { children } = this.props;
    return (
      <PlanetsContext.Provider
        value={ { ...this.state, fetchPlanets: this.fetchPlanets } }
      >
        { children }
      </PlanetsContext.Provider>
    );
  }
}

PlanetsProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.func).isRequired,
};

export default PlanetsProvider;
