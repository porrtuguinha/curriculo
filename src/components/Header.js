import React from 'react';

const Header = ({ name, profession }) => {
  return (
    <header>
      <h1>{name}</h1>
      <p>{profession}</p>
    </header>
  );
}

export default Header;