import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/fetchPlanet';
import PlanetsContext from './PlanetsContext';

function PlanetsProvider(props) {
  const [data, setData] = useState([]); // [state, setState]
  const [isLoading, setIsLoading] = useState(true);

  async function fetchPlanets() {
    const response = await getPlanets(); // call API from services;
    setData(response); // save data;
    setIsLoading(false); // set loading false;
  }

  // componentDidMount
  useEffect(() => {
    fetchPlanets();
  }, []);

  const { children } = props;
  return (
    <PlanetsContext.Provider value={ { data, isLoading, fetchPlanets } }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.shape([]).isRequired,
};

export default PlanetsProvider;

/* state with class
this.state = {
  data: [],
  isLoading: false,
}

this.setState({
  data: 'novoValor',
  isLoading: 'trueOrFalse',
}) */
