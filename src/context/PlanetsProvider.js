import React from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchApi from '../service/fetchApi';

class PlanetsProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [
          {
            column: '',
            comparison: '',
            value: '',
          },
        ],
      },
    };

    this.requestApi = this.requestApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleColumnFilter = this.handleColumnFilter.bind(this);
    this.handleComparisonFilter = this.handleComparisonFilter.bind(this);
  }

  componentDidMount() {
    this.requestApi();
  }

  handleChange({ target }) {
    const { filters: { filterByNumericValues:
      { column, comparison, value } } } = this.state;
    this.setState({
      filters: {
        filterByName: {
          name: target.value,
        },
        filterByNumericValues: [
          {
            column,
            comparison,
            value,
          },
        ],
      },
    });
    console.log(target.value);
  }

  /* filterPlanets() {
    const { filters: { filterByName }, planets } = this.state;
    if (filterByName.name !== '') {
      const planetsFiltered = planets
        .filter((planet) => planet.name.toLowerCase()
          .includes(filterByName.name.toLowerCase()) === true);
      this.setState({
        planets: planetsFiltered,
      });
    }
       console.log('cheguei aqui');
    console.log(planets);
  } */

  handleColumnFilter({ target }) {
    const { filters: { filterByName: { name } },
      filters:
      { filterByNumericValues:
        { comparison, value } } } = this.state;
    this.setState({
      filters: {
        filterByName: {
          name,
        },
        filterByNumericValues: [
          {
            column: target.value,
            comparison,
            value,
          },
        ],
      },
    });
  }

  handleComparisonFilter({ target }) {
    const { filters: { filterByName: { name } },
      filters:
      { filterByNumericValues:
        { column, value } } } = this.state;
    this.setState({
      filters: {
        filterByName: {
          name,
        },
        filterByNumericValues: [
          {
            column,
            comparison: target.value,
            value,
          },
        ],
      },
    });
  }

  async requestApi() {
    const results = await fetchApi();
    this.setState({
      planets: results,
    });
  }

  render() {
    const { children } = this.props;
    const { planets, filters: { filterByName, filterByNumericValues } } = this.state;
    return (
      <PlanetsContext.Provider
        value={
          { planets,
            filterByName,
            filterByNumericValues,
            handleChange: this.handleChange,
            handleColumnFilter: this.handleColumnFilter,
            handleComparisonFilter: this.handleComparisonFilter }
        }
      >
        { children }
      </PlanetsContext.Provider>
    );
  }
}

PlanetsProvider.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};

export default PlanetsProvider;
