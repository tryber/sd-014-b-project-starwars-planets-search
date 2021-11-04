import React from 'react';

function Header() {
  return (
    <main>
      <form>
        <label htmlFor="planet">
          Insira o nome do planeta:
          <input
            id="planet"
            type="text"
          />
        </label>
      </form>
    </main>
  );
}

export default Header;
