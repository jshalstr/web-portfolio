'use client';

import { Group, Stack, Text, Timeline, TimelineItem, Title } from '@mantine/core';
import { useState } from 'react';

interface Project {
  title: string;
  image: string;
  description: string[];
  year: number;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Glimpse',
    image: 'images/glimpse.png',
    description: [
      'Tool for visually impaired students to communicate with teachers and engage in the classroom.',
      'Comprises three Android applications: smartwatch application for the blind, companion application for teachers, and interactive activity application for sighted students.',
      'Features include messaging, calling, interactive activities (quizzes), location tracking, and fall detection.',
      'Capstone project showcasing accessibility and innovation in education.',
    ],
    year: 2024,
    tags: ['Kotlin', 'Jetpack Compose', 'Android', 'Room'],
  },
  {
    title: 'Autopot',
    image: 'images/autopot.jpg',
    description: [
      'IoT system for automated plant maintenance.',
      'Monitors temperature, humidity, soil moisture, and light exposure.',
      'Automatically waters plants based on soil moisture levels.',
      'Built using Arduino and Wemos, connected to a hosted website for real-time stats viewing.',
      'Demonstrates integration of hardware and software for practical solutions.',
    ],
    year: 2023,
    tags: ['PHP', 'Javascript', 'Bootstrap', 'MySQL', 'Arduino'],
  },
  {
    title: 'Logo Guesser',
    image: 'images/logoguesser.jpg',
    description: [
      'Engaging Android game challenging users to guess logos from various brands.',
      'Features a scoring system to track user progress.',
      'Developed on Xamarin.',
      'Provides an entertaining and educational experience by testing brand recognition skills.',
    ],
    year: 2022,
    tags: ['Android', 'Xamarin', 'C#'],
  },
  {
    title: 'DejaBrew',
    image: 'images/dejabrew.jpg',
    description: [
      'Mock e-commerce website inspired by Starbucks.',
      'Allows users to add drinks to their cart and make purchases, accurately reflected in the database.',
      'Admins can manage stock by adding or removing items.',
      'Demonstrates development of full-stack web applications simulating real-world business operations.',
    ],
    year: 2022,
    tags: ['ASP.NET', 'C#', 'MS Access'],
  },
  {
    title: 'Restaurant Ordering System',
    image: 'images/ros.jpg',
    description: [
      'Console-based C# program using Binary Search Trees to create priority orders.',
      'Efficiently manages and prioritizes customer orders based on urgency.',
      'Highlights proficiency in C# and  data structures.',
      'Developed to ensure smooth and organized ordering processes.',
    ],
    year: 2021,
    tags: ['C#'],
  },
  {
    title: 'POS Express',
    image: 'images/posexpress.jpg',
    description: [
      'Console-based C# program mimicking a point-of-sale system.',
      'Uses Object-Oriented Programming (OOP) principles.',
      'Allows users to purchase, add, or reduce items in a simulated retail environment.',
      'Demonstrates understanding of OOP concepts and development of functional console applications for business needs.',
    ],
    year: 2021,
    tags: ['C#'],
  },
  {
    title: '4 Pics One Word Clone',
    image: 'images/4pics.jpg',
    description: [
      'Puzzle game where players guess the common word linking four images.',
      "Tests players' vocabulary and cognitive skills in a fun and challenging way.",
      'Showcases ability to create engaging and interactive applications.',
    ],
    year: 2020,
    tags: ['Python', 'tkinter'],
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
  const [selectedProject, setSelectedProject] = useState<null | Project>(null);

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
              active={selectedProject?.title === project.title}
            />
          ))}
        </Timeline>
        <Text m="auto">Select a Project</Text>
      </Group>
    </Stack>
  );
}
