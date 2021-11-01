const fetchAPI = async () => {
  try {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export default fetchAPI;
