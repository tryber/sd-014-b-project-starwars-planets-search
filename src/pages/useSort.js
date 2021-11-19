import { useState, useContext } from 'react';
import contextApi from '../contextApi/contextApi';

export default function useSort() {
  const { filters: { order } } = useContext(contextApi);
  const [planetsSort, setPlanetsSort] = useState([]);
  const TEN_VALUE = 10;
  const NEGATIVE_VALUE = -1;
  const POSITVE_VALUE = 1;
  const NEUTRAL_VALUE = 0;

  const organzArrayAsc = (element, elementTwo, column) => {
    if (parseInt(element[column], TEN_VALUE)
        < parseInt(elementTwo[column], TEN_VALUE)) {
      return NEGATIVE_VALUE;
    } if (parseInt(element[column], TEN_VALUE)
        > parseInt(elementTwo[column], TEN_VALUE)) {
      return POSITVE_VALUE;
    }
    return NEUTRAL_VALUE;
  };

  const organzArrayDesc = (element, elementTwo, column) => {
    if (parseInt(element[column], TEN_VALUE)
          < parseInt(elementTwo[column], TEN_VALUE)) {
      return POSITVE_VALUE;
    } if (parseInt(element[column], TEN_VALUE)
          > parseInt(elementTwo[column], TEN_VALUE)) {
      return NEGATIVE_VALUE;
    }
    return NEUTRAL_VALUE;
  };

  const verifyAscDesc = (column) => {
    if (order.sort === 'ASC') {
      planetsSort
        .sort((element, elementTwo) => organzArrayAsc(element, elementTwo, column));
    } else {
      planetsSort
        .sort((element, elementTwo) => organzArrayDesc(element, elementTwo, column));
    }
  };

  const especialForName = () => {
    if (order.sort === 'ASC') {
      planetsSort.sort((element, elementTwo) => {
        if (element.name < elementTwo.name) {
          return NEGATIVE_VALUE;
        } if (element.name > elementTwo.name) {
          return POSITVE_VALUE;
        }
        return NEUTRAL_VALUE;
      });
    } else {
      planetsSort.sort((element, elementTwo) => {
        if (element.name < elementTwo.name) {
          return POSITVE_VALUE;
        } if (element.name > elementTwo.name) {
          return NEGATIVE_VALUE;
        }
        return NEUTRAL_VALUE;
      });
    }
  };

  const whatColumnSort = () => {
    switch (order.column) {
    case 'name': {
      especialForName();
      break;
    }
    case 'population': {
      verifyAscDesc('population');
      break;
    }
    case 'orbital_period': {
      verifyAscDesc('orbital_period');
      break;
    }
    case 'diameter': {
      verifyAscDesc('diameter');
      break;
    }
    case 'rotation_period': {
      verifyAscDesc('rotation_period');
      break;
    }
    case 'surface_water': {
      verifyAscDesc('surface_water');
      break;
    }
    default:
      console.log('Expecte nada meu irmão');
      break;
    }
  };

  whatColumnSort();

  return [planetsSort, setPlanetsSort];
}
