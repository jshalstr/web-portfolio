import { List, ListItem, Stack, Text, Title } from '@mantine/core';

export default function SuhayProject() {
  return (
    <>
      <Stack>
        <Title fw={100} fz={{ base: 24, md: 30 }} lineClamp={1}>
          SUHAY, OPC
        </Title>
        <Title size="h3">Company Background</Title>
        <Text fw={200}>
          SUHAY, OPC stands out as a pivotal provider of Business Processing and Management
          Services. For OJT trainees and students alike, SUHAY, OPC offers a transformative learning
          environment enriched by its core values of integrity, commitment, professionalism, and
          governance. The company's office is found at Paseo de Sta. Rosa, Greenfield City, Sta.
          Rosa, Laguna Philippines 4026.
        </Text>
        <Text fw={200}>
          SUHAY, OPC prides itself on being a trusted partner in its clients' success stories,
          offering comprehensive solutions that encompass high-quality Business Processing and
          Management Services. The company is known for its unwavering commitment to integrity,
          professionalism, commitment, and governance, instilling these values into every aspect of
          its operations. Interns at SUHAY, OPC are immersed in a culture that values continuous
          learning and development. They gain practical experience in Human Resources &
          Administration, Finance, Planning, Legal & Quality Management Services, Advertising &
          Promotions, and Information Technology. Each department plays a crucial role in supporting
          clients' business needs through structured consultancy and strategic planning.
        </Text>
        <Text fw={200}>
          As an intern, one learns the importance of ethical practices, transparency, and
          accountability in professional settings. SUHAY, OPC stands out for its innovative approach
          to business solutions, fostering an environment where interns contribute to meaningful
          projects that impact clients positively.
        </Text>
        <Text fw={200}>
          An Issue Tracker and Meeting Planner used to provide a platform for employees within SUHAY
          a streamlined way to track identified issues during meetings.
        </Text>
        <Title size="h3">Nature of Practicum</Title>
        <List className="list-disc" p={15}>
          <ListItem fw={200}>
            Code Familiarization: During the early weeks of our practicum, we were tasked to
            comprehend and explore the existing code without proper documentation. Afterwards, we
            were also tasked to create a basic CrUD application with authentication.
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
      </Stack>
    </>
  );
}
