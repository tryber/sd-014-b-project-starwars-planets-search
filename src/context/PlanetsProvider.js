import React from 'react';
import PlanetsContext from './PlanetsContext';
import { data } from '../services/PlanetsAPI';

class PlanetsProvider extends React.Component {
  constructor () {
    super();

    this.state = {
      columns: [],
      search: '',
      listOfPlanets: [],
    }
    this.createColumns = this.createColumns.bind(this);
  }

  async createColumns() {
    const resultado = await data();
    const columnsNames = Object.keys(resultado);

    this.setState({ columns: columnsNames });
  }

  render() {
    const { children } = this.props;
    return(
      <PlanetsContext.Provider
        value={ {
          ...this.state,
          createColumns: this.createColumns,
        } }
      >
        { children }
      </PlanetsContext.Provider>
    )
  }
}

export default PlanetsProvider;