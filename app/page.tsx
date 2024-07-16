'use client';

import { Stack, Group, Title } from '@mantine/core';
import GradientButton from '@/components/GradientButton/GradientButton';

export default function HomePage() {
  return (
    <Stack justify="center" align="center" h="84svh" m="auto">
      <Title fz={{ base: 24, md: 30 }} ta={{ base: 'left', md: 'center' }}>
        With a passion for web and software development, I am eager to bring innovative solutions to
        real-world challenges.
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
  );
}
