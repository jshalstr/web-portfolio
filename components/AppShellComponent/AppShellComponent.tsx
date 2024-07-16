'use client';

import {
  Affix,
  AppShell,
  AppShellAside,
  AppShellMain,
  Burger,
  Portal,
  Stack,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import TextWithCursor from '../TextWithCursor/TextWithCursor';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import FloatingBlob from '../FloatingBlob/FloatingBlob';

interface IProps {
  children: React.ReactNode;
}

export default function AppShellComponent({ children }: IProps) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();

  return (
    <>
      <Portal>
        <div className="fixed inset-0 -z-10">
          <div className="absolute -top-[100px] right-[325px]">
            <FloatingBlob />
          </div>
          <div className="fixed inset-0 outline outline-white outline-1 outline-offset-[-16px] md:outline-offset-[-20px]" />
        </div>
      </Portal>
      <AppShell
        aside={{
          width: 350,
          breakpoint: 'sm',
          collapsed: { mobile: !mobileOpened },
        }}
        padding="40px"
        withBorder={false}
      >
        <AppShellMain bg="none" pt={60}>
          <Affix hiddenFrom="sm" position={{ bottom: 20, right: 20 }}>
            <Burger opened={mobileOpened} onClick={toggleMobile} size="sm" />
          </Affix>
          {children}
        </AppShellMain>
        <AppShellAside
          bg={{ base: 'black', sm: 'none' }}
          p={{
            base: 'xl',
            md: 'var(--mantine-spacing-xl) var(--mantine-spacing-xl) 0px var(--mantine-spacing-sm)',
          }}
        >
          <Stack h="100%">
            <div className="self-center sm:self-end">
              <TextWithCursor>
                <Title fw={100} fz={{ base: 26, md: 32 }} className="text-wrap xs:text-nowrap">
                  Josh Aleister Valenzuela
                </Title>
              </TextWithCursor>
            </div>
            <div className="h-2/3 mt-auto sm:my-auto pr-14 sm:pr-0 self-center sm:self-end">
              <NavigationLinks onClick={toggleMobile} />
            </div>
          </Stack>
        </AppShellAside>
      </AppShell>
    </>
  );
}
