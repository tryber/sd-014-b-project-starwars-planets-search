import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';
import { columns } from '../services/data';
import Loading from './Loading';

export default function Table() {
  const { planets, loading } = useContext(StarwarsContext);
  return (
    loading ? <Loading /> : (
      <section>
        <table border="1">
          <thead>
            <tr>
              { columns.map((name) => <th key={ name }>{name}</th>) }
            </tr>
          </thead>
          <tbody>
            { planets.map((item) => (
              <tr key={ item.url }>
                <td>{ item.name }</td>
                <td>{ item.rotation_period }</td>
                <td>{ item.orbital_period }</td>
                <td>{ item.diameter }</td>
                <td>{ item.climate }</td>
                <td>{ item.gravity }</td>
                <td>{ item.terrain }</td>
                <td>{ item.surface_water }</td>
                <td>{ item.population }</td>
                <td>{ item.residents.length }</td>
                <td>{ item.films.length }</td>
                <td>{ item.created }</td>
                <td>{ item.edited }</td>
              </tr>
            )) }
          </tbody>
        </table>
      </section>
    )
  );
}
