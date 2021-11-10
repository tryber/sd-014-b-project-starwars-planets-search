import React, { useContext } from 'react';
import Context from '../context/Context';
import tableHeaders from '../utils/tableHeaders';
import Header from './Header';

function Table() {
  const {
    planets,
    loading,
    handleFilterName,
    filteredByName,
  } = useContext(Context);

  function renderTh() {
    return tableHeaders.map((header) => (
      <th key={ header }>{ header }</th>
    ));
  }

  function renderTd() {
    let renders = [];
    if (filteredByName.length >= 1) {
      renders = filteredByName;
      console.log(renders);
    } else {
      renders = planets;
    }
    return renders.map((data) => (
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
    <div>
      <Header />
      <form>
        <label htmlFor="name-filter">
          <input
            type="search"
            name="search"
            id="name-filter"
            placeholder="Filrar por nome"
            data-testid="name-filter"
            onChange={ (e) => handleFilterName(e) }
          />
        </label>
      </form>
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
    </div>
  );
}
export default Table;
