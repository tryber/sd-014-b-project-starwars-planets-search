import React, { useContext } from 'react';
import Context from '../context/Context';
import tableHeaders from '../utils/tableHeaders';

function Table() {
  const { planets, loading } = useContext(Context);

  function renderTh() {
    return tableHeaders.map((header) => (
      <th key={ header }>{ header }</th>
    ));
  }

  function renderTd() {
    Object.values(planets).forEach((planet) => {
      delete planet.residents;
    });
    return planets.map((data) => (
      <tr key={ data }>
        { Object.values(data).map((iten) => (
          <td key={ iten }>
            { iten }
          </td>
        )) }
      </tr>
    ));
  }

  return (
    <table>
      <thead>
        <tr>
          { renderTh() }
        </tr>
      </thead>
      <tbody>
        { !loading ? renderTd() : 'Carregando...' }
      </tbody>
    </table>
  );
}
export default Table;
