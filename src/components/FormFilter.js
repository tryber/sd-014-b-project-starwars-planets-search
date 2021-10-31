import React/* , { useContext }  */from 'react';
// import MyContext from '../context/MyContext';

function FormFilter() {
//   const { data } = useContext(MyContext);

  return (
    <form>
      <input
        type="text"
        placeholder="Filtrar por nome"
      />
      <select>
        <option>population</option>
      </select>
      <select>
        <option>Menor que</option>
      </select>
      <input
        type="number"
        placeholder="0"
      />
      <button type="button">Filtrar</button>
      <select>
        <option>population</option>
      </select>
      <fieldset>
        Ordenar
        <label htmlFor="Ascendente">
          Ascendente
          <input type="radio" id="Ascendente" />
        </label>
        <label htmlFor="Descendente">
          Descendente
          <input type="radio" id="Descendente" />
        </label>
        <button type="button">Ordenar</button>
      </fieldset>
    </form>

  );
}

export default FormFilter;
