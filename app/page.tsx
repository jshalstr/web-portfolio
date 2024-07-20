'use client';

import { Stack, Group, Title, Text } from '@mantine/core';
import { IconBrandFacebook, IconMail, IconPhone } from '@tabler/icons-react';
import GradientButton from '@/components/GradientButton/GradientButton';
import NavigationLink from '@/components/NavigationLink/NavigationLink';

export default function HomePage() {
  return (
    <>
      <Stack justify="center" align="center" h="75svh" m="auto">
        <Title fz={{ base: 24, md: 30 }} ta={{ base: 'left', md: 'center' }} fw={100}>
          With a passion for web and software development, I am eager to bring innovative solutions
          to real-world challenges.
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
          <IconPhone size={20} />
          <Text>Mobile:</Text>
          <Text fw={100}>+639195083311</Text>
        </Group>
      </Stack>
    </>
  );
}
