'use client';

import { motion } from 'framer-motion';
import { Button, Card, Group, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';

const experiences = [
  {
    name: 'SUHAY, OPC',
    position: 'IT Intern - Software Developer',
    project: 'Issue Tracker Web App',
  },
];

export default function ExperiencePage() {
  return (
    <Stack>
      <Title fw={100} fz={{ base: 24, md: 30 }} lineClamp={1}>
        Experience
      </Title>
      <Group align="start">
        {experiences.map(({ name, position, project }, index) => (
          <motion.div
            key={name}
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
              <Stack>
                <Title order={3}>{name}</Title>
                <div>
                  <Text fw={700}>Position</Text>
                  <Text>{position}</Text>
                </div>
                <div>
                  <Text fw={700}>Project</Text>
                  <Group>
                    <Text>{project}</Text>
                    <Button
                      component={Link}
                      href="/experience/suhay"
                      radius="xl"
                      color="green"
                      variant="outline"
                      size="xs"
                    >
                      View
                    </Button>
                  </Group>
                </div>
              </Stack>
            </Card>
          </motion.div>
        ))}
      </Group>
    </Stack>
  );
}
