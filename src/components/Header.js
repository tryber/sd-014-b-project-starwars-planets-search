import React from 'react';
import FiltersBar from './FiltersBar';
import SearchInput from './SearchInput';

export default function Header() {
  return (
    <div>
      <SearchInput />
      <FiltersBar />
    </div>
  );
}
