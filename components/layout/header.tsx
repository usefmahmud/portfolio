import React from 'react';
import ThemeToggle from './theme-toggle';

const Header = () => {
  return (
    <header className='flex justify-between py-3' role='banner'>
      <div>
        <h1
          className='flex gap-3 text-[40px] font-black select-none'
          itemProp='name'
          itemScope
          itemType='https://schema.org/Person'
        >
          <span itemProp='givenName'>YOUSEF</span>
          <span itemProp='familyName'>MAHMOUD</span>
        </h1>
      </div>

      <ThemeToggle />
    </header>
  );
};

export default Header;
