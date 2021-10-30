import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import setHeaders from '../services/setHeaders';

export default function Table() {
  const { data } = useContext(PlanetsContext);
  const [tableHeaders, setTableHeaders] = useState([]);

  useEffect(() => {
    setHeaders(data, setTableHeaders);
  }, []);

  // const allHeaders = (Object.keys(data[0]));
  // const headers = allHeaders.filter((head) => head !== 'residents');

  // const modifiedHeaders = headers;

  // for (let i = 0; i < modifiedHeaders.length; i += 1) { // adaptado de https://stackoverflow.com/questions/953311/replace-string-in-javascript-array
  //   modifiedHeaders[i] = modifiedHeaders[i].replace('_', ' ');
  // }

  // for (let i = 0; i < modifiedHeaders.length; i += 1) { // adaptado de https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  //   modifiedHeaders[i] = modifiedHeaders[i]
  //     .charAt(0).toUpperCase() + modifiedHeaders[i].slice(1);
  //   setTableHeaders(modifiedHeaders);
  // }

  console.log(tableHeaders);

  return ( // // adaptado do site https://edrodrigues.com.br/blog/criando-tabelas-com-filtros-%E2%80%8B%E2%80%8Busando-react/
    <div>oi</div>
  );
}
