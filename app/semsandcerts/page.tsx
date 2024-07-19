'use client';

import { Stack, Title, Group, Space } from '@mantine/core';
import Card from '@/components/Card/Card';
import NavigationLink from '@/components/NavigationLink/NavigationLink';

const seminars = [
  {
    from: 'Xaltus Pte. Ltd.',
    name: 'Masterclass: How to kickstart your career in Cybersecurity',
    link: '/certificates/xaltus.png',
  },
];
const certificates = [
  {
    from: 'Fortinet Training Institute',
    name: 'NSE 1 Network Security Associate',
    link: '/certificates/NSE_1_Certification.pdf',
  },
];

export default function SeminarsAndCertificatesPage() {
  return (
    <Stack>
      <Title fw={100} fz={{ base: 24, md: 30 }} lineClamp={1}>
        Seminars And Certificates
      </Title>
      <Title fw={100} fz={{ base: 20, md: 26 }} lineClamp={1}>
        Seminars Attended
      </Title>
      <Group align="start">
        {seminars.map((seminar) => (
          <Card key={seminar.name}>
            <Title order={3}>{seminar.from}</Title>
            <NavigationLink label={seminar.name} link={seminar.link} target="_blank" />
          </Card>
        ))}
      </Group>
      <Space h="lg" />
      <Title fw={100} fz={{ base: 20, md: 26 }} lineClamp={1}>
        Certificates
      </Title>
      <Group align="start">
        {certificates.map((certificate) => (
          <Card key={certificate.name}>
            <Title order={3}>{certificate.from}</Title>
            <NavigationLink label={certificate.name} link={certificate.link} target="_blank" />
          </Card>
        ))}
      </Group>
    </Stack>
  );
}
