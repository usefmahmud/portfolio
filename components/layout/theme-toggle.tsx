'use client';

import React from 'react';

const ThemeToggle = () => {
  return (
    <div
      className='border-foreground flex border-5'
      role='group'
      aria-label='Theme selection'
    >
      <button
        className={`px-4 text-[32px] font-semibold transition-colors`}
        aria-label='Switch to light theme'
        type='button'
      >
        LIGHT
      </button>
      <button
        className={`px-4 text-[32px] font-medium transition-colors`}
        aria-label='Switch to dark theme'
        type='button'
      >
        DARK
      </button>
    </div>
  );
};

export default ThemeToggle;
