export default function returnApi() {
  const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetchData = async () => {
    try {
      const response = await fetch(URL_API);
      const json = await response.json();
      return json.results;
    } catch (error) {
      return error;
    }
  };
  fetchData();
}
