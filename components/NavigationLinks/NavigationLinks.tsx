import { Stack } from '@mantine/core';
import { usePathname } from 'next/navigation';
import NavigationLink from '../NavigationLink/NavigationLink';

export default function NavigationLinks() {
  const pathname = usePathname();
  const links = [
    { label: 'Home', link: '/' },
    { label: 'Projects', link: '/projects' },
    { label: 'Tech Stack', link: '/techstack' },
    { label: 'Experience', link: '/experience' },
  ];

  return (
    <Stack gap={0.5} p={10}>
      {links.map((link) => (
        <NavigationLink
          key={link.label}
          label={link.label}
          link={link.link}
          isActive={pathname === link.link}
        />
      ))}
    </Stack>
  );
}
