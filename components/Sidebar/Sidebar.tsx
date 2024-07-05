import { AppShellNavbar, NavLink } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

const links = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Projects',
    link: '/projects',
  },
  {
    label: 'About Me',
    link: '/aboutme',
  },
];

export default function Sidebar() {
  return (
    <AppShellNavbar>
      {links.map((link) => (
        <NavLink component={Link} href={link.link} label={link.label} key={link.label} />
      ))}
    </AppShellNavbar>
  );
}
