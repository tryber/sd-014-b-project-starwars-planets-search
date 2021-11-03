import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import headersFilter from '../services/headersFilter';
import { filteredCharact, setHeaders } from '../services/setHeaders';

export default function Table() {
  const { data, filteredData } = useContext(PlanetsContext);
  const [tableHeaders, setTableHeaders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const characts = headersFilter(data, filteredCharact);

  useEffect(() => {
    setHeaders(data, setTableHeaders);
    setIsLoading(false);
  }, []);

  console.log(filteredData);

  if (isLoading) {
    return 'Loading...';
  }
  // adaptado do site https://edrodrigues.com.br/blog/criando-tabelas-com-filtros-%E2%80%8B%E2%80%8Busando-react/
  return (
    <table border="1">
      <thead>
        <tr>
          {tableHeaders.map((description) => (
            <th key={ description }>{ description }</th>))}
        </tr>
      </thead>
      <tbody>
        { filteredData.map((desc, i) => (
          <tr key={ i }>
            {characts.map((charact) => (
              <td key={ charact }>{ desc[`${charact}`] }</td>
            ))}
          </tr>
        )) }
      </tbody>
    </table>
  );
}
