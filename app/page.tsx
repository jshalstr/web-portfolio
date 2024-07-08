'use client';

import { Flex, Group, Text } from '@mantine/core';
import GradientButton from '@/components/GradientButton/GradientButton';

export default function HomePage() {
  return (
    <Flex
      align="center"
      justify="center"
      wrap="wrap"
      direction="column"
      rowGap={30}
      columnGap={40}
      m="auto"
    >
      <Text>
        With a passion for web and software development, I am eager to bring innovative solutions to
        real-world challenges.
      </Text>
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
    </Flex>
  );
}
