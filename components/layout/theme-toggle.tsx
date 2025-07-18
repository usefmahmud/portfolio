'use client';

import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';

type THEME = 'light' | 'dark';

const ThemeToggle = () => {
  const [theme, setTheme] = React.useState<THEME>(() => {
    if (typeof window === 'undefined') return 'light';
    return (localStorage.getItem('theme') as THEME) || 'light';
  });

  const toggleTheme = () => {
    setTheme((newTheme) => {
      const nextTheme = newTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', nextTheme);
      return nextTheme;
    });
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <div
      className='border-foreground relative flex cursor-pointer overflow-hidden border-5 *:px-4 *:text-[32px] *:font-semibold *:transition-transform *:duration-150 *:ease-in-out'
      role='button'
      tabIndex={0}
      aria-label={`Switch theme`}
      onClick={() => toggleTheme()}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      }}
    >
      <div
        className={cn(
          'bg-foreground absolute inset-y-0 transition-transform duration-150 ease-in-out',
          'w-1/2',
          theme === 'light' ? 'translate-x-0' : 'translate-x-full'
        )}
      />

      <span
        className={cn(
          'relative z-10 flex items-center justify-center transition-colors duration-300',
          theme === 'light' ? 'text-background' : 'text-foreground'
        )}
        aria-hidden={theme !== 'dark'}
      >
        DARK
      </span>
      <span
        className={cn(
          'relative z-10 flex items-center justify-center transition-colors duration-300',
          theme === 'dark' ? 'text-background' : 'text-foreground'
        )}
        aria-hidden={theme !== 'light'}
      >
        LIGHT
      </span>
    </div>
  );
};

export default ThemeToggle;
