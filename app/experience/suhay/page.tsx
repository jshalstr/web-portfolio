import { Group, Image, List, ListItem, Space, Stack, Text, Title } from '@mantine/core';

export default function SuhayProject() {
  return (
    <>
      <Stack>
        <Title fw={100} fz={{ base: 24, md: 30 }} lineClamp={1}>
          SUHAY, OPC
        </Title>
        <Title size="h3">Company Background</Title>
        <Text fw={200}>
          SUHAY, OPC stands out as a provider of Business Processing and Management Services. For
          OJT trainees and employees alike, SUHAY, OPC offers a transformative learning environment
          enriched by its core values of integrity, commitment, professionalism, and governance. The
          company's office is found at Paseo de Sta. Rosa, Greenfield City, Sta. Rosa, Laguna
          Philippines 4026.
        </Text>
        <Text fw={200}>
          SUHAY, OPC prides itself on being a trusted partner in its clients' success stories,
          offering comprehensive solutions that encompass high-quality Business Processing and
          Management Services. Some of the business units that it supports are Aurotech, Alibata,
          GreenChemistry and KKMWorks. These business units are under different categories,
          including manufacturing and logistics, which highlights the company’s ability to handle a
          wide range of businesses.
        </Text>
        <Text fw={200}>
          The company is known for its unwavering commitment to integrity, professionalism,
          commitment, and governance, instilling these values into every aspect of its operations.
          Interns at SUHAY, OPC are immersed in a culture that values continuous learning and
          development. They gain practical experience in Human Resources & Administration, Finance,
          Planning, Legal & Quality Management Services, Advertising & Promotions, and Information
          Technology. Each department plays a crucial role in supporting clients' business needs
          through structured consultancy and strategic planning.
        </Text>
        <Title size="h3">Phases of Practicum</Title>
        <List className="list-disc" px={15}>
          <ListItem fw={200}>
            Code Familiarization: During the early weeks of our practicum, we were tasked to
            comprehend and explore the existing code without proper documentation. Afterwards, we
            were also tasked to create a basic CRUD application with authentication.
          </ListItem>
          <ListItem fw={200}>
            Software Development and Deployment: This is the main focus of the practicum where we
            were assigned our projects to develop for the benefit of the company. Using modern web
            technologies and SQL, I was assigned to develop an Issue Tracker.
          </ListItem>
          <ListItem fw={200}>
            Testing, Debugging and Autobackup: After the deployment of the web application, any
            issues that arise further must be resolved, along with the continuous backup of the
            database to ensure data is not lost.
          </ListItem>
          <ListItem fw={200}>
            Technical Documentation: Whenever needed, such as pre-development and post-deployment,
            technical documentation was provided to assist the users and other developers of the
            application to comprehend how to use it or further develop it.
          </ListItem>
        </List>
        <Title size="h3">Project Presentation</Title>
        <Title size="h4">ITApp - Issue Tracker</Title>
        <Title size="h5">Overview</Title>
        <Text fw={200}>
          ITApp is an issue tracker that allows users to organize meetings and manage issues
          effectively within those meetings. Users can raise issues, comment, attach files, filter,
          and sort data to streamline issue tracking and resolution.
        </Text>
        <Title size="h5">Key Features</Title>
        <List className="list-disc" px={15}>
          <ListItem fw={200}>Create and manage meetings</ListItem>
          <Group grow>
            <Image src="/images/ITApp/createmeeting.png" />
            <Image src="/images/ITApp/viewmeetings.png" />
          </Group>
          <Space h="lg" />
          <ListItem fw={200}>Raise and track issues within meetings</ListItem>
          <Group grow>
            <Image src="/images/ITApp/createissue.png" />
            <Image src="/images/ITApp/viewissuesonmeeting.png" />
          </Group>
          <Space h="lg" />
          <ListItem fw={200}>Filter and sort meetings and issues</ListItem>
          <Group grow>
            <Image src="/images/ITApp/viewissues.png" />
            <Image src="/images/ITApp/viewmeetings.png" />
          </Group>
          <Space h="lg" />
          <ListItem fw={200}>Comment and attach files to issues</ListItem>
          <Group grow>
            <Image src="/images/ITApp/viewcomments.png" />
            <Space h="lg" />
          </Group>
          <Space h="lg" />
          <ListItem fw={200}>Change issue status</ListItem>
          <Group grow>
            <Image src="/images/ITApp/changestatus.png" />
            <Space h="lg" />
          </Group>
          <Space h="lg" />
        </List>
        <Title size="h5"></Title>
      </Stack>
    </>
  );
}
