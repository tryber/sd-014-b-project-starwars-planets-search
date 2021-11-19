import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './pages/Table';
import MyContext from './contextApi/contextApi';

function App() {
  const [arrayFiltros] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period',
    'surface_water',
  ]);
  const [inputNamePlanet, setInputNamePlanet] = useState('');
  const [inputTypeSelectorNumber, setInputTypeSelectorNumber] = useState('population');
  const [inputMaiorMenorIgual, setInputMaiorMenorIgual] = useState('maior que');
  const [inputNumber, setInputNumber] = useState('0');
  const [filterByNumbers, setFilterByNumbers] = useState([]);
  const [columSort, setColumSort] = useState('name');
  const [asdDesc, setAscDesc] = useState('ASC');
  const [objSort, setObjSort] = useState({ column: columSort, sort: asdDesc });
  const [copyArrayFiltros, setCopyArrayFiltros] = useState(arrayFiltros);

  const handleInputs = ({ target }) => {
    const { value, id } = target;
    switch (id) {
    case 'TypeSelectorNumber':
      setInputTypeSelectorNumber(value);
      break;
    case 'MaiorMenorIgual':
      setInputMaiorMenorIgual(value);
      break;
    case 'PesquisaPlaneta':
      setInputNamePlanet(value);
      break;
    case 'ValueNumber':
      setInputNumber(value);
      break;
    case 'Asc':
      setAscDesc(value);
      break;
    case 'Desc':
      setAscDesc(value);
      break;
    case 'modfiSort':
      setColumSort(value);
      break;
    default:
      console.error('FAZ ISSO N DOIDO');
      break;
    }
  };

  const veryfyInptuTextOnlyNumbers = () => {
    const regex = /^[0-9]+$/;
    if (inputNumber.match(regex)) {
      return true;
    }
    return false;
  };

  const selectFilter = () => (
    <select
      data-testid="column-filter"
      onChange={ handleInputs }
      id="TypeSelectorNumber"
      value={ inputTypeSelectorNumber }
    >
      { copyArrayFiltros.map((element) => (
        <option
          key={ element }
          value={ element }
        >
          { element }
        </option>)) }
    </select>
  );

  useEffect(() => {
    const newCopyArrayFiltros = arrayFiltros.slice(0);
    filterByNumbers.forEach((elements) => {
      const index = newCopyArrayFiltros.indexOf(elements.column);
      newCopyArrayFiltros.splice(index, 1);
    });
    setCopyArrayFiltros(newCopyArrayFiltros);
  }, [arrayFiltros, filterByNumbers]);

  useEffect(() => {
    setInputTypeSelectorNumber(copyArrayFiltros[0]);
  }, [copyArrayFiltros]);

  const onClick = () => {
    if (veryfyInptuTextOnlyNumbers()) {
      setFilterByNumbers([...filterByNumbers,
        {
          column: inputTypeSelectorNumber,
          comparison: inputMaiorMenorIgual,
          value: inputNumber,
        },
      ]);
    } else {
      const TIME_TO_CHANGE_STYLE = 3000;
      const span = document.getElementById('ValidaNumber');
      span.style.display = 'inline';
      setTimeout(() => { span.style.display = 'none'; }, TIME_TO_CHANGE_STYLE);
    }
  };

  const onClickRemove = ({ target }) => {
    const elementToBeRemoved = target.parentNode.children[0].value;
    const index = filterByNumbers
      .findIndex((planets) => planets.column === elementToBeRemoved);
    const arrayFilter = filterByNumbers.slice(0);
    arrayFilter.splice(index, 1);
    setFilterByNumbers(arrayFilter);
    setCopyArrayFiltros([...copyArrayFiltros, elementToBeRemoved]);
  };

  const onClickSort = () => {
    setObjSort({ column: columSort, sort: asdDesc });
  };

  const bodySelectNumber = () => (
    <form>
      { selectFilter() }
      <select
        data-testid="comparison-filter"
        onChange={ handleInputs }
        id="MaiorMenorIgual"
        value={ inputMaiorMenorIgual }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        onChange={ handleInputs }
        id="ValueNumber"
        value={ inputNumber }
        type="text"
      />
      <span
        id="ValidaNumber"
        style={ { display: 'none' } }
      >
        Pf coloque apenas numeros
      </span>
      <button
        onClick={ onClick }
        data-testid="button-filter"
        type="button"
      >
        Filtrar!
      </button>
    </form>
  );

  const oldSelects = () => (
    filterByNumbers.map((element) => (
      <form data-testid="filter" key={ element.column }>
        <select defaultValue={ element.column }>
          <option>{ element.column }</option>
        </select>
        <select>
          <option>{ element.comparison }</option>
        </select>
        <input id="ValueNumber" defaultValue={ element.value } type="text" />
        <span
          id="ValidaNumber"
          style={ { display: 'none' } }
        >
          Pf coloque apenas numeros
        </span>
        <button
          onClick={ onClickRemove }
          type="button"
        >
          X
        </button>
      </form>
    )));

  const objContext = {
    filters: {
      filterByName: {
        name: inputNamePlanet,
      },
      filterByNumericValues: filterByNumbers,
      order: objSort,
    },
  };

  return (
    <MyContext.Provider value={ objContext }>
      <h1>Star Wars Project</h1>
      <input
        id="PesquisaPlaneta"
        onChange={ handleInputs }
        type="text"
        data-testid="name-filter"
        value={ inputNamePlanet }
      />
      { filterByNumbers.length === 0 ? '' : oldSelects() }
      { bodySelectNumber() }
      <select data-testid="column-sort" id="modfiSort" onChange={ handleInputs }>
        <option value="name">name</option>
        { arrayFiltros.map((element) => (
          <option
            key={ element }
            value={ element }
          >
            { element }
          </option>)) }
      </select>
      <label htmlFor="Asc">
        Ascendente
        <input
          data-testid="column-sort-input-asc"
          onClick={ handleInputs }
          id="Asc"
          value="ASC"
          type="radio"
          name="ascdsc"
          defaultChecked
        />
      </label>
      <label htmlFor="Desc">
        Descendente
        <input
          data-testid="column-sort-input-desc"
          onClick={ handleInputs }
          id="Desc"
          value="DESC"
          type="radio"
          name="ascdsc"
        />
      </label>
      <button
        data-testid="column-sort-button"
        onClick={ onClickSort }
        type="button"
      >
        Ordernar!
      </button>
      <Table />
    </MyContext.Provider>
  );
}

export default App;
