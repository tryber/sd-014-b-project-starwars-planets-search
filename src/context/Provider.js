import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getPlanetList from '../services/planetsAPI';
import Context from './Context';

const INITIAL_FILTER = {
  filters: {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  },
};

const initFiltersToSelect = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const Provider = ({ children }) => {
  // Dados originais
  const [originalList, setOriginalList] = useState([]);
  // Dados que renderizaram a tabela
  const [planetList, setPlanetList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);
  const [filtersToSelect, setFiltersToSelect] = useState(initFiltersToSelect);
  // Filtros da tabela e criador do objeto
  const [tableFilters, setTableFilters] = useState(INITIAL_FILTER);

  const [auxFilterByNumber, setAuxFilterByNumber] = useState({});
  const [filtersByNumber, setFiltersByNumber] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const updateSelectList = () => {
    const { filters: { filterByNumericValues } } = tableFilters;
    let newSelect = [];

    filterByNumericValues.forEach((element) => {
      newSelect = filtersToSelect.filter((filter) => {
        if (element.column !== filter) return filter;
        return false;
      });
    });
    if (newSelect.length > 0) setFiltersToSelect(newSelect);
  };

  const recoverPlanetList = async () => {
    const list = await getPlanetList();
    setPlanetList(list.results);
    setOriginalList(list.results);
    setIsLoading(false);
  };

  const filterByName = ({ target: { value } }) => {
    if (value === '') {
      setPlanetList(originalList);
    } else {
      const { filters: { filterByNumericValues } } = tableFilters;
      const searchPlanet = planetList.filter((planet) => planet.name.toLowerCase()
        .includes(value.toLowerCase()));
      setTableFilters({
        ...tableFilters,
        filters: {
          filtersByName: { name: value },
          filterByNumericValues,
        },
      });
      setPlanetList([...searchPlanet]);
    }
  };

  const filterByNumber = () => {
    const { filters: { filterByNumericValues } } = tableFilters;
    if (filtersByNumber.value === '0') return false;
    filterByNumericValues.push(filtersByNumber);
    setTableFilters({
      ...tableFilters,
      filters: {
        filterByNumericValues,
      },
    });
    let newFilter = [];
    filterByNumericValues.forEach((filtro) => {
      newFilter = planetList.filter((planet) => {
        if ((filtro.comparison === 'igual a')
        && (parseInt(planet[filtro.column], 10) === parseInt(filtro.value, 10))) {
          return planet;
        }
        if ((filtro.comparison === 'maior que')
        && (parseInt(planet[filtro.column], 10) > filtro.value)) return planet;
        if ((filtro.comparison === 'menor que')
        && (parseInt(planet[filtro.column], 10) < filtro.value)) return planet;
        return false;
      });
    });
    setPlanetList([...newFilter]);
    setIsFiltering(true);
    updateSelectList();
  };

  const context = {
    planetList,
    setPlanetList,
    isLoading,
    setIsLoading,
    filterByName,
    filtersToSelect,
    filtersByNumber,
    tableFilters,
    setFiltersByNumber,
    auxFilterByNumber,
    setAuxFilterByNumber,
    isFiltering,
  };

  useEffect(() => {
    recoverPlanetList();
  }, []);

  useEffect(() => {
    filterByNumber();
  }, [filtersByNumber]);

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
