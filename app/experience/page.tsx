'use client';

import { motion } from 'framer-motion';
import { Button, Group, Stack, Text, Title } from '@mantine/core';
import Link from 'next/link';
import Card from '@/components/Card/Card';

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
            <Card>
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
