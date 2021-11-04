import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Loading from './Loading';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  if (!data.length) return <Loading />;

  const headers = Object.keys(data[0]).filter((key) => key !== 'residents');
  const { filterByName: { name } } = filters;
  const dataFiltered = data
    .filter((planet) => planet.name.toLowerCase()
      .includes(name.toLowerCase()));

  return (
    <table>
      <thead>
        <tr>
          { headers.map((head) => (
            <th key={ head }>{ head }</th>
          )) }
        </tr>
      </thead>

      <tbody>
        { dataFiltered.map((planet) => (
          <tr key={ planet.name }>
            { headers.map((header) => (
              <td key={ planet[header] }>
                { header !== 'films' ? planet[header] : planet[header].length }
              </td>
            )) }
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;
