import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import GlobalContext from '../../Context/GlobalContext';
import regexFilter from '../../helpers/regexFilter';

export default function Table({ data, headerLine }) {
  const { filter } = useContext(GlobalContext);
  const { filters } = filter;
  const [filteredData, setFilteredData] = useState([]);

  const setFilterByName = () => {
    const { filterByName: { name }, filterByNumericValues } = filters;
    const filteredOnlyByName = regexFilter(data, 'name', name);
    return filterByNumericValues.reduce((acc, curr) => (
      acc.filter((object) => {
        switch (curr.comparison) {
        case 'maior que':
          return Number(object[curr.column]) > Number(curr.value);

        case 'menor que':
          return Number(object[curr.column]) < Number(curr.value);

        case 'igual a':
          return Number(object[curr.column]) === Number(curr.value);

        default:
          return false;
        }
      })
    ), filteredOnlyByName);
  };

  useEffect(() => {
    setFilteredData(setFilterByName());
  }, [filters]);

  return (
    <table>
      <thead>
        <tr>
          { headerLine.map((key) => <th key={ key }>{ key }</th>) }
        </tr>
      </thead>
      <tbody>
        { filteredData.map((planet, index) => {
          const keys = Object.keys(planet);
          return (
            <tr
              key={ index }
            >
              { keys.map((key, keyIndex) => <td key={ keyIndex }>{ planet[key] }</td>) }
            </tr>
          );
        }) }
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  headerLine: PropTypes.arrayOf(PropTypes.string),
}.isRequired;
