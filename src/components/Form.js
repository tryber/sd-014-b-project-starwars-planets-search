import React from 'react';
// import PlanetsContext from '../context/PlanetsContext';
import Dropdown from './Dropdown';
import InputNumber from './InputNumber';
import { options, label, comparison } from '../utils';

export default function Form() {
  // const { filter, SetFilter } = useContext(PlanetsContext);
  return (
    <>
      <Dropdown label={ label } options={ options } testId="column-filter" />
      <Dropdown
        label={ comparison }
        options={ comparison }
        testId="comparison-filter"
      />
      <InputNumber />
      <button type="button">Filtrar</button>
    </>
  );
}
