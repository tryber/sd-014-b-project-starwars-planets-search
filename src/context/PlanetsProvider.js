import React from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import fetchApi from '../service/fetchApi';

class PlanetsProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      planets: [],
      buttonClick: false,
      deleteOptions: [],
      filters: {
        filterByName: {
          name: '',
        },
        filterByNumericValues: [],
      },
    };

    this.requestApi = this.requestApi.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
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
  }

  handleFilterClick(objFilter) {
    const { filters: { filterByName: { name },
      filterByNumericValues },
    deleteOptions } = this.state;

    this.setState({
      buttonClick: true,
      deleteOptions: [...deleteOptions, objFilter.column],
      filters: {
        filterByName: {
          name,
        },
        filterByNumericValues: [
          ...filterByNumericValues,
          objFilter,
        ],
      },
    });
    console.log(objFilter);
  }

  async requestApi() {
    const results = await fetchApi();
    this.setState({
      planets: results,
    });
  }

  render() {
    const { children } = this.props;
    const {
      planets,
      filters: { filterByName, filterByNumericValues },
      buttonClick, deleteOptions } = this.state;
    return (
      <PlanetsContext.Provider
        value={
          { planets,
            buttonClick,
            deleteOptions,
            filterByName,
            filterByNumericValues,
            handleChange: this.handleChange,
            handleFilterClick: this.handleFilterClick }
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
