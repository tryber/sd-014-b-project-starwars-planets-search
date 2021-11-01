import React from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchApi from '../service/fetchApi';

class PlanetsProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      planets: [],
    };

    this.requestApi = this.requestApi.bind(this);
  }

  componentDidMount() {
    this.requestApi();
  }

  async requestApi() {
    const results = await fetchApi();
    this.setState({
      planets: results,
    });
  }

  render() {
    const { children } = this.props;
    const { planets } = this.state;
    return (
      <PlanetsContext.Provider value={ { planets } }>
        { children }
      </PlanetsContext.Provider>
    );
  }
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};

export default PlanetsProvider;
