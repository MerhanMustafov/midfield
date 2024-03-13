'use client';
import Link from 'next/link';
import React from 'react';
import { NavLinkProps } from './NavLink.types';

const NavLink: React.FC<NavLinkProps> = ({ label, href, cb }) => {
  const handleClick = () => {
    if (cb) {
      cb();
    }
  };

  return (
    <Link onClick={handleClick} href={href}>
      {label}
    </Link>
  );
};

export default NavLink;
