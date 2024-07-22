'use client';

import { Stack, Group, Title, Text } from '@mantine/core';
import { IconBrandFacebook, IconBrandGit, IconMail, IconPhone } from '@tabler/icons-react';
import GradientButton from '@/components/GradientButton/GradientButton';
import NavigationLink from '@/components/NavigationLink/NavigationLink';

export default function HomePage() {
  return (
    <>
      <Stack justify="center" align="center" h="71svh" m="auto">
        <Title
          fz={{ base: 24, md: 30, xl: 40 }}
          ta={{ base: 'left', md: 'center' }}
          fw={600}
          ff="Archivo Black, sans-serif"
        >
          With a passion for{' '}
          <span className="bg-gradient-to-r from-[#F08F27] via-[#1DB9D1] to-[#691FE1] bg-clip-text text-transparent">
            web and software development
          </span>
          , I am eager to bring innovative solutions to{' '}
          <span className="underline">real-world challenges</span>.
        </Title>
        <Group>
          <GradientButton
            label="LinkedIn"
            link="https://www.linkedin.com/in/josh-aleister-valenzuela-61772815b/"
            tooltip="Get in touch with me on LinkedIn"
          />
          <GradientButton
            label="Resume"
            link="https://drive.google.com/uc?export=download&id=1em_s3muJlZEYGO-ARLqOv5UH1jkEmTlI"
            tooltip="Download my resume"
          />
        </Group>
      </Stack>
      <Stack gap={0}>
        <Group>
          <IconMail size={20} />
          <Text>Email:</Text>
          <NavigationLink
            link="mailto:joshaleisterv@gmail.com"
            label="joshaleisterv@gmail"
            target="_blank"
          />
        </Group>
        <Group>
          <IconBrandFacebook size={20} />
          <Text>Facebook:</Text>
          <NavigationLink
            link="https://facebook.com/jshalstr"
            label="Josh Aleister Valenzuela"
            target="_blank"
          />
        </Group>
        <Group>
          <IconBrandGit size={20} />
          <Text>Github:</Text>
          <NavigationLink link="https://github.com/jshalstr" label="jshalstr" target="_blank" />
        </Group>
        <Group>
          <IconPhone size={20} />
          <Text>Mobile:</Text>
          <Text fw={100}>+639195083311</Text>
        </Group>
      </Stack>
    </>
  );
}
