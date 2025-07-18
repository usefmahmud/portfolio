import React from 'react';
import { ROUTES } from '@/data/navbar';
import { NavbarItem } from './navbar-item';

const Navbar = () => {
  return (
    <div className='flex justify-center py-5'>
      <nav
        className='flex items-center gap-17'
        role='navigation'
        aria-label='Main navigation'
      >
        <ul className='m-0 flex items-center gap-17 p-0'>
          {ROUTES.map((item, index) => {
            return (
              <React.Fragment key={item.path}>
                <NavbarItem key={item.path} item={item} />

                {index !== ROUTES.length - 1 && (
                  <li className='list-none' aria-hidden='true'>
                    <span
                      className='bg-foreground size-3 rounded-full'
                      role='presentation'
                    ></span>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
