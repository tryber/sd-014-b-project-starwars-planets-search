import React from 'react';
import Form from './Form';
import { container, h1, h2 } from './HeaderStyles';
import Input from './Input';

export default function Header() {
  return (
    <>
      <h1 style={ h1 }>StarWars Planets</h1>
      <h2 style={ h2 }>Vários filtros</h2>
      <div style={ container }>
        <Input />
        <Form />
      </div>
    </>
  );
}
