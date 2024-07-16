'use client';

import { motion } from 'framer-motion';
import { Card, Group, Stack, Title, Text, Avatar, SimpleGrid } from '@mantine/core';
import {
  IconBrandPython,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandCSharp,
  IconBrandKotlin,
  IconBrandPhp,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandReact,
  IconBrandLaravel,
  IconBrandNextjs,
  IconBrandTailwind,
  IconDatabase,
  IconBrandGit,
  IconBrandNodejs,
  IconDeviceDesktopAnalytics,
  IconBrandVisualStudio,
  IconBrandAndroid,
} from '@tabler/icons-react';

const techStack = {
  'Programming Languages': [
    { name: 'Python', icon: IconBrandPython },
    { name: 'JavaScript', icon: IconBrandJavascript },
    { name: 'TypeScript', icon: IconBrandTypescript },
    { name: 'C#', icon: IconBrandCSharp },
    { name: 'Kotlin', icon: IconBrandKotlin },
    { name: 'PHP', icon: IconBrandPhp },
    { name: 'HTML', icon: IconBrandHtml5 },
    { name: 'CSS', icon: IconBrandCss3 },
  ],
  'Frameworks and Libraries': [
    { name: 'React', icon: IconBrandReact },
    { name: 'Laravel', icon: IconBrandLaravel },
    { name: 'Next.js', icon: IconBrandNextjs },
    { name: 'Tailwind', icon: IconBrandTailwind },
  ],
  'Other Technologies': [
    { name: 'MySQL', icon: IconDatabase },
    { name: 'Git', icon: IconBrandGit },
    { name: 'Node.js', icon: IconBrandNodejs },
    { name: 'Arduino', icon: IconDeviceDesktopAnalytics },
  ],
  Development: [
    { name: 'Visual Studio Code', icon: IconBrandVisualStudio },
    { name: 'Android Studio', icon: IconBrandAndroid },
  ],
};

export default function TechStackPage() {
  return (
    <Stack>
      <Title fw={100} fz={{ base: 24, md: 30 }} lineClamp={1}>
        Tech Stack
      </Title>
      <Group align="start">
        {Object.entries(techStack).map(([category, items], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              className="transition duration-500 hover:scale-105 shadow-md shadow-white hover:shadow-md hover:shadow-blue-700"
              shadow="0 4px 6px -1px white, 0 2px 4px -2px white"
              bg="transparent"
              padding="lg"
              radius="md"
              withBorder
              w={300}
            >
              <Title order={3}>{category}</Title>
              <SimpleGrid mt="sm" cols={2}>
                {items.map(({ name, icon: Icon }) => (
                  <Group wrap="nowrap" key={name}>
                    <Avatar size={40} radius="xl" color="gray">
                      <Icon size={18} />
                    </Avatar>
                    <Text>{name}</Text>
                  </Group>
                ))}
              </SimpleGrid>
            </Card>
          </motion.div>
        ))}
      </Group>
    </Stack>
  );
}
