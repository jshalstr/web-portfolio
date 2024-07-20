'use client';

import { useState } from 'react';
import { Group, Image, List, ListItem, Space, Stack, Text, Title, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function SuhayProject() {
  const [modalOpened, modalToggle] = useDisclosure(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleImageClick = (src: string) => {
    setCurrentImage(src);
    modalToggle.open();
  };

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
          <ListItem fw={200}>
            Create and manage meetings: After logging in, users can create and view meetings. For
            creating meetings, users must fill up the required fields, including the Agenda,
            Attendees, Start and End Date and Facilitator of the meeting. The meetings available for
            viewing are those that the user is an attendee in.
          </ListItem>
          <Group grow>
            <Image
              src="/images/ITApp/createmeeting.png"
              onClick={() => handleImageClick('/images/ITApp/createmeeting.png')}
              className="cursor-pointer"
            />
            <Image
              src="/images/ITApp/viewmeetings.png"
              onClick={() => handleImageClick('/images/ITApp/viewmeetings.png')}
              className="cursor-pointer"
            />
          </Group>
          <Space h="lg" />
          <ListItem fw={200}>
            Raise and track issues within meetings: Inside a meeting, a user can raise issues where
            they must fill up the required fields, including the Issue title, Action Plan, Issue and
            Completion Date, Responsibles, Raised by, Frequency, and Priority of the meeting. By
            default, the user can only view issues that they are responsible for or have raised.
            They may toggle the filter to view all issues within the meeting. Furthermore, the user
            may filter out issues based on their status.
          </ListItem>
          <Group grow>
            <Image
              src="/images/ITApp/createissue.png"
              onClick={() => handleImageClick('/images/ITApp/createissue.png')}
              className="cursor-pointer"
            />
            <Image
              src="/images/ITApp/viewissuesonmeeting.png"
              onClick={() => handleImageClick('/images/ITApp/viewissuesonmeeting.png')}
              className="cursor-pointer"
            />
          </Group>
          <Space h="lg" />
          <ListItem fw={200}>
            Filter and sort meetings and issues: Users can filter, sort and search meetings and
            issues to help them find what they need.
          </ListItem>
          <Group grow>
            <Image
              src="/images/ITApp/viewissues.png"
              onClick={() => handleImageClick('/images/ITApp/viewissues.png')}
              className="cursor-pointer"
            />
            <Image
              src="/images/ITApp/viewmeetings.png"
              onClick={() => handleImageClick('/images/ITApp/viewmeetings.png')}
              className="cursor-pointer"
            />
          </Group>
          <Space h="lg" />
          <ListItem fw={200}>
            Comment and attach files to issues: The users who raised an issue and users who are
            responsible for an issue may converse with each other using the comment section. This
            will help in tracking the progress and whether the issue has been resolved. Users are
            also able to attach and download files as needed within these comments.
          </ListItem>
          <Group grow>
            <Image
              src="/images/ITApp/viewcomments.png"
              onClick={() => handleImageClick('/images/ITApp/viewcomments.png')}
              className="cursor-pointer"
            />
            <Space h="lg" />
          </Group>
          <Space h="lg" />
          <ListItem fw={200}>
            Change issue status: The users who raised an issue may change its status to reflect the
            progress of the issue. Closed issues are resolved while open issues are in progress.
            Parked issues are delayed while dropped issues are abandoned.
          </ListItem>
          <Group grow>
            <Image
              src="/images/ITApp/changestatus.png"
              onClick={() => handleImageClick('/images/ITApp/changestatus.png')}
              className="cursor-pointer"
            />
            <Space h="lg" />
          </Group>
          <Space h="lg" />
        </List>
        <Title size="h5">Software and Frameworks Used</Title>
        <List className="list-disc" px={15}>
          <ListItem fw={200}>
            Visual Studio Code: A code editor from Microsoft that provides tools for various
            programming languages.
          </ListItem>
          <ListItem fw={200}>
            HeidiSQL: A database management tool for MySQL, MariaDB, and SQL Server databases. It
            offers features for database management and an easy-to-use interface.
          </ListItem>
          <ListItem fw={200}>
            Mailpit: An email testing tool that captures emails sent from applications. It helps
            inspect emails without sending them to real recipients.
          </ListItem>
          <ListItem fw={200}>
            React.js: A JavaScript library for building user interfaces, maintained by Facebook. It
            allows developers to create web applications that update and render efficiently.
          </ListItem>
          <ListItem fw={200}>
            Laravel: A PHP framework for web application development. It simplifies tasks like
            routing, authentication, and caching.
          </ListItem>
          <ListItem fw={200}>
            SQL Server: A relational database management system developed by Microsoft. It provides
            features for data storage, retrieval, and management.
          </ListItem>
        </List>
      </Stack>
      <Modal opened={modalOpened} onClose={modalToggle.close} size="xl" centered>
        <Image src={currentImage} />
      </Modal>
    </>
  );
}
