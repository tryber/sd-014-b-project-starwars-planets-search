import React from 'react';
import PropTypes from 'prop-types';
import PlanetContext from '../Context/PlanetContext';
import fetchPlanets from '../services/fetchPlanets';

export default function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const response = await fetchPlanets();
      setPlanets(response.results);
    }; getPlanets();
  }, []);

  const planetState = {
    planets,
  };

  return (
    <PlanetContext.Provider value={ planetState }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
