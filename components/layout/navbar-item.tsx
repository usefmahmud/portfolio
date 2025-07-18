'use client';

import { cn } from '@/lib/utils';
import { NavbarRoute } from '@/types/navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavbarItemProps {
  item: NavbarRoute;
  isActive?: boolean;
}
export const NavbarItem = ({ item }: NavbarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  return (
    <li className='list-none'>
      <Link
        href={item.path}
        className={cn(
          'text-foreground navbar-link-underline',
          isActive && 'after:w-full'
        )}
        aria-current={isActive ? 'page' : undefined}
        title={`Navigate to ${item.label} page`}
        rel='noopener'
      >
        {item.label.toUpperCase()}
      </Link>
    </li>
  );
};
