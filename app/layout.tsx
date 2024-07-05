import '@mantine/core/styles.css';
import './styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, AppShell, AppShellMain } from '@mantine/core';
import { theme } from '../theme';
import Sidebar from '@/components/Sidebar/Sidebar';

export const metadata = {
  title: 'Josh Aleister Valenzuela',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme} withGlobalClasses defaultColorScheme="dark">
          <AppShell navbar={{ width: 200, breakpoint: 'sm' }}>
            <Sidebar />
            <AppShellMain>{children}</AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
