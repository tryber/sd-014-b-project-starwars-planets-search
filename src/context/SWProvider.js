import PropTypes from "prop-types"
import React from 'react';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

  async function fetchAPI() {
    setIsLoading(true);
    const apiData = await fetch(API);
    setData(apiData);
    setIsLoading(false);
  }

  useEffect(fetchAPI);

  return (
    <SWContext.Provider value={ { data, isLoading } }>
      { children }
    </SWContext.Provider>
  );
}

SWProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SWProvider;
