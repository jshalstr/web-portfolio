'use client';

import {
  Badge,
  Group,
  Image,
  List,
  ListItem,
  Modal,
  Stack,
  Text,
  Timeline,
  TimelineItem,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { useState } from 'react';
import NextImage from 'next/image';

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
    image: '/images/glimpse.png',
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
    image: '/images/autopot.jpg',
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
    image: '/images/logoguesser.jpg',
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
    image: '/images/dejabrew.jpg',
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
    image: '/images/ros.jpg',
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
    image: '/images/posexpress.jpg',
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
    image: '/images/4pics.jpg',
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
        <Text fz={{ base: 14, md: 16 }} lineClamp={2} fw={100} inline>
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

function ProjectDetails({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={project.title}
      className="m-auto"
    >
      <Stack className="p-4 border rounded-lg shadow-lg m-auto">
        <Image
          component={NextImage}
          src={project.image}
          alt={project.title}
          mah={250}
          maw={600}
          miw={{ base: 0, sm: 450 }}
          width={600}
          height={300}
          fit="contain"
          radius="md"
        />

        <List className="list-disc list-inside" p={15}>
          {project.description.map((desc, index) => (
            <ListItem fw={200} key={index}>
              <Text fz={{ base: 'xs', sm: 'sm' }} maw={600}>
                {desc}
              </Text>
            </ListItem>
          ))}
        </List>
        <Group gap={5}>
          {project.tags.map((tag, index) => (
            <Badge key={index} color="blue" variant="light">
              {tag}
            </Badge>
          ))}
        </Group>
      </Stack>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<null | Project>(null);
  const isSmall = useMediaQuery('(max-width: 48em)');

  return (
    <Stack>
      <Title fw={100} fz={{ base: 24, md: 30 }} lineClamp={1}>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            type: 'spring',
            stiffness: 100,
            damping: 10,
          }}
          exit={{
            opacity: 0,
            y: -40,
            x: 40,
            filter: 'blur(8px)',
            scale: 2,
            position: 'absolute',
          }}
          className="z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2"
          key={selectedProject?.title}
        >
          {selectedProject?.title &&
            selectedProject.title.split('').map((letter, index) => (
              <motion.span
                key={selectedProject.title + index}
                initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.3,
                }}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
        </motion.div>
      </Title>
      <Group gap={20} h="100%" align="start" wrap="nowrap">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Timeline bulletSize={14} lineWidth={2}>
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
        </motion.div>
        {isSmall ? (
          <Modal
            opened={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject?.title}
          >
            {selectedProject ? (
              <ProjectDetails project={selectedProject} />
            ) : (
              <Text className="self-center m-auto">Select a project to see details</Text>
            )}
          </Modal>
        ) : selectedProject ? (
          <ProjectDetails project={selectedProject} />
        ) : (
          <Text className="self-center m-auto">Select a project to see details</Text>
        )}
      </Group>
    </Stack>
  );
}
