'use client';

import { AppShell, AppShellMain, Flex, Space, Stack, Title } from '@mantine/core';
import TextWithCursor from '../TextWithCursor/TextWithCursor';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import FloatingBlob from '../FloatingBlob/FloatingBlob';

interface IProps {
  children: React.ReactNode;
}

export default function AppShellComponent({ children }: IProps) {
  // const [sidebarOpened, setSidebarOpened] = useDisclosure(false);

  return (
    <>
      <AppShell padding={0}>
        <AppShellMain h="100svh" className="relative overflow-hidden isolate">
          <FloatingBlob />
          <Flex
            direction="column"
            h="100%"
            className="outline outline-white outline-1 outline-offset-[-12px] md:outline-offset-[-25px] p-6 md:p-8 lg:p-10"
          >
            <div className="ml-auto">
              <TextWithCursor>
                <Title
                  fw={100}
                  fz={{ base: 26, md: 32 }}
                  ta="end"
                  className="float-right"
                  textWrap="balance"
                >
                  Josh Aleister Valenzuela
                </Title>
              </TextWithCursor>
            </div>
            <Flex className="grow">
              <Flex className="w-4/5" align="center">
                {children}
              </Flex>
              <div className="w-1/5">
                <Stack align="end">
                  <Space h={150} />
                  <NavigationLinks />
                </Stack>
              </div>
            </Flex>
          </Flex>
        </AppShellMain>
      </AppShell>
    </>
  );
}
