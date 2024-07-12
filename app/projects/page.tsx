'use client';

import { Group, Stack, Text, Timeline, TimelineItem, Title } from '@mantine/core';
import { useState } from 'react';

const projects = [
  {
    title: 'Glimpse',
    image: 'images/glimpse.png',
    description: 'Glimpse is a...',
    year: 2024,
  },
  {
    title: 'Autopot',
    image: 'images/autopot.jpg',
    description: 'Autopot is a...',
    year: 2023,
  },
  {
    title: 'Logo Guesser',
    image: 'images/logoguesser.jpg',
    description: 'Logo Guesser is a...',
    year: 2022,
  },
  {
    title: 'DejaBrew',
    image: 'images/dejabrew.jpg',
    description: 'DejaBrew is a...',
    year: 2022,
  },
  {
    title: 'Restaurant Ordering System',
    image: 'images/ros.jpg',
    description: 'Restaurant Ordering System is a...',
    year: 2021,
  },
  {
    title: 'POS Express',
    image: 'images/posexpress.jpg',
    description: 'POS Express is a...',
    year: 2021,
  },
  {
    title: '4 Pics One Word Clone',
    image: 'images/4pics.jpg',
    description: '4 Pics One Word Clone is a...',
    year: 2020,
  },
];

function ProjectItem({ title, year, onClick, active }: any) {
  return (
    <TimelineItem
      title={
        <Text fz={{ base: 14, md: 16 }} fw={500} inline>
          {title}
        </Text>
      }
      onClick={onClick}
      className="hover:cursor-pointer"
      __active={active}
    >
      <Text fz={{ base: 13, md: 15 }} inline>
        {year}
      </Text>
    </TimelineItem>
  );
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<null | {}>(null);

  return (
    <Stack className="self-start" w="100%">
      <Title fw={100}>Projects</Title>
      <Group w="100%">
        <Timeline>
          {projects.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              year={project.year}
              onClick={() => setSelectedProject(project)}
              active={selectedProject === project}
            />
          ))}
        </Timeline>
        <Text m="auto">Select a Project</Text>
      </Group>
    </Stack>
  );
}
