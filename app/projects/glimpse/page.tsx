'use client';

import { Key, useState } from 'react';
import { Group, Image, List, ListItem, Space, Stack, Text, Title, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const imageSources = {
  menuSmartwatch: '/images/glimpse/menu-smartwatch.png',
  text1Smartwatch: '/images/glimpse/text1-smartwatch.png',
  text2Smartwatch: '/images/glimpse/text2-smartwatch.png',
  text3Smartwatch: '/images/glimpse/text3-smartwatch.png',
  text4Smartwatch: '/images/glimpse/text4-smartwatch.png',
  call1Smartwatch: '/images/glimpse/call1-smartwatch.png',
  call2Smartwatch: '/images/glimpse/call2-smartwatch.png',
  joinQuizSmartwatch: '/images/glimpse/join-quiz-smartwatch.png',
  menuQuizSmartwatch: '/images/glimpse/menu-quiz-smartwatch.png',
  listQuizSmartwatch: '/images/glimpse/list-quiz-smartwatch.png',
  menuSmartphone: '/images/glimpse/menu-smartphone.jpg',
  enrollment1Smartphone: '/images/glimpse/enrollment1-smartphone.jpg',
  enrollment2Smartphone: '/images/glimpse/enrollment2-smartphone.jpg',
  enrollment3Smartphone: '/images/glimpse/enrollment3-smartphone.jpg',
  message1Smartphone: '/images/glimpse/message1-smartphone.jpg',
  message2Smartphone: '/images/glimpse/message2-smartphone.jpg',
  locationSmartphone: '/images/glimpse/location-smartphone.jpg',
  safetyzoneSmartphone: '/images/glimpse/safetyzone-smartphone.jpg',
  call1Smartphone: '/images/glimpse/call1-smartphone.jpg',
  call2Smartphone: '/images/glimpse/call2-smartphone.jpg',
  calllogsSmartphone: '/images/glimpse/calllogs-smartphone.jpg',
};

type ImageListProps = {
  images: string[];
  onClick: (src: string) => void;
};

const ImageList = ({ images, onClick }: ImageListProps) => (
  <Group grow>
    {images.map((src: string, index: Key) => (
      <Image key={index} src={src} onClick={() => onClick(src)} mah={400} />
    ))}
  </Group>
);

export default function CapstoneProject() {
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
          Glimpse (Capstone)
        </Title>
        <Title size="h3">Overview</Title>
        <Text fw={200}>
          Glimpse, our capstone project, is a multi-application system for students with visual
          impairment. It includes a multifunctional smartwatch application that provides
          communicative and utility features for these students, complemented by a companion
          application for teachers. This companion application allows teachers to monitor and
          support visually impaired students through location tracking, quick calls, and special
          messages. Additionally, an interactive gesture-based module was integrated into the
          smartwatch application. Another smartphone application was developed for sighted students
          to facilitate engagement with visually impaired students and provide a common learning
          tool in the classroom setting.
        </Text>
        <Title size="h3">Scope and Limitations</Title>
        <Text fw={200}>
          The study focuses on developing a smartwatch application for visually impaired students
          and a companion application for teachers to monitor and foster classroom engagement. The
          smartwatch app, designed for the Samsung Galaxy Watch 4 and similar devices, includes
          features like fall detection, quick calling, special messaging, and time/date checking.
          The companion app for teachers, compatible with Android smartphones (version 9+), enables
          monitoring, alerts, and management of student enrollment.
        </Text>
        <Text fw={200}>Key features include:</Text>
        <List className="list-disc" px={15}>
          <ListItem fw={200}>
            Text-to-speech for time/date checking triggered by wrist flick.
          </ListItem>
          <ListItem fw={200}>Location sending activated by fall detection.</ListItem>
          <ListItem fw={200}>
            Quick calling and special messaging initiated by the visually impaired students.
          </ListItem>
          <ListItem fw={200}>
            Interactive activity tool for both visually impaired and sighted students that enables
            participation in teacher-initiated activities.
          </ListItem>
        </List>
        <Text fw={200}>
          The study, conducted with visually impaired students at Biñan Central Elementary School,
          aims to develop accessibility aids for classroom settings. The solutions require Wi-Fi
          connectivity for full functionality but offer limited offline capabilities. The study
          acknowledges that these tools may not be suitable for all visually impaired students due
          to individual cognitive or developmental factors.
        </Text>
        <Title size="h3">Features Discussion</Title>
        <List className="list-disc" px={15}>
          <ListItem fw={200}>
            Menu (Smartwatch Application): This screen provides access to various features using
            gesture-based controls, with text-to-speech (TTS) reading out menu options for visually
            impaired students. Gestures include swiping up for messaging, swiping down for quick
            calling, and tapping to start interactive activities.
          </ListItem>
          <ImageList images={[imageSources.menuSmartwatch]} onClick={handleImageClick} />
          <Space h="lg" />
          <ListItem fw={200}>
            Quick Messages (Smartwatch Application): This feature allows students to send predefined
            messages such as "I am thirsty/hungry" or "I need assistance" by navigating through
            messages using swipe gestures and tapping to send the selected message.
          </ListItem>
          <ImageList
            images={[
              imageSources.text1Smartwatch,
              imageSources.text2Smartwatch,
              imageSources.text3Smartwatch,
              imageSources.text4Smartwatch,
            ]}
            onClick={handleImageClick}
          />
          <Space h="lg" />
          <ListItem fw={200}>
            Call (Smartwatch Application): The call function lets students directly initiate a call
            to the teacher by swiping down, with a single tap to end the call. This provides a quick
            way for students to communicate with their teacher.
          </ListItem>
          <ImageList
            images={[imageSources.call1Smartwatch, imageSources.call2Smartwatch]}
            onClick={handleImageClick}
          />
          <Space h="lg" />
          <ListItem fw={200}>
            Join Interactive Activity (Smartwatch Application): This feature allows students to join
            interactive activities by tapping the screen and following text-to-speech instructions.
            They can choose to see the activity list or join an activity directly.
          </ListItem>
          <ImageList
            images={[imageSources.menuQuizSmartwatch, imageSources.joinQuizSmartwatch]}
            onClick={handleImageClick}
          />
          <Space h="lg" />
          <ListItem fw={200}>
            Interactive Activity List (Smartwatch Application): Students can view a list of
            available activities and receive instructions via text-to-speech. They can then decide
            if they want to proceed with an activity by tapping on it.
          </ListItem>
          <ImageList images={[imageSources.listQuizSmartwatch]} onClick={handleImageClick} />
          <Space h="lg" />
          <ListItem fw={200}>
            Menu (Teacher Companion Application): The sidebar menu provides options for adding
            students, viewing messages, locating students, creating activities, viewing call logs,
            and setting a safety zone, giving teachers comprehensive control over the application’s
            functionalities.
          </ListItem>
          <ImageList images={[imageSources.menuSmartphone]} onClick={handleImageClick} />
          <Space h="lg" />
          <ListItem fw={200}>
            Students Enrollment and Adding (Teacher Companion Application): This feature allows
            teachers to add and remove students from their classes, view session IDs for pairing
            smartwatches, and manage enrolled and unenrolled students.
          </ListItem>
          <ImageList
            images={[
              imageSources.enrollment1Smartphone,
              imageSources.enrollment2Smartphone,
              imageSources.enrollment3Smartphone,
            ]}
            onClick={handleImageClick}
          />
          <Space h="lg" />
          <ListItem fw={200}>
            Messages (Teacher Companion Application): Teachers can view messages from visually
            impaired students and use the location tracking function in case of emergencies or when
            students are outside the designated safe area.
          </ListItem>
          <ImageList
            images={[imageSources.message1Smartphone, imageSources.message2Smartphone]}
            onClick={handleImageClick}
          />
          <Space h="lg" />
          <ListItem fw={200}>
            Location Tracking (Teacher Companion Application): This screen enables teachers to
            monitor students' locations and respond to emergencies or safety zone breaches by
            clicking "Locate Student" to get precise locations.
          </ListItem>
          <ImageList images={[imageSources.locationSmartphone]} onClick={handleImageClick} />
          <Space h="lg" />
          <ListItem fw={200}>
            Safety Zone (Teacher Companion Application): Teachers can set a specific safety radius
            for students and receive notifications if a student leaves the zone. A timer can also be
            set for how long the safety zone should be active.
          </ListItem>
          <ImageList images={[imageSources.safetyzoneSmartphone]} onClick={handleImageClick} />
          <Space h="lg" />
          <ListItem fw={200}>
            Call (Teacher Companion Application): Teachers receive calls initiated by students,
            allowing for immediate communication for emergencies or feedback.
          </ListItem>
          <ImageList
            images={[imageSources.call1Smartphone, imageSources.call2Smartphone]}
            onClick={handleImageClick}
          />
          <Space h="lg" />
          <ListItem fw={200}>
            Call Logs (Teacher Companion Application): This screen displays the complete call
            history, including names, times, and status of calls, helping teachers track
            communication attempts.
          </ListItem>
          <ImageList images={[imageSources.calllogsSmartphone]} onClick={handleImageClick} />
          <Space h="lg" />
        </List>

        <Title size="h5">Software and Frameworks Used</Title>
        <List className="list-disc" px={15}>
          <ListItem fw={200}>
            Android Studio: An integrated development environment (IDE) for Android development,
            provided by Google. It includes tools for building, testing, and debugging Android apps.
          </ListItem>
          <ListItem fw={200}>
            Jetpack Compose: A modern toolkit for building native Android UIs. It simplifies UI
            development with declarative components and a Kotlin-based API.
          </ListItem>
          <ListItem fw={200}>
            Socket.io: A JavaScript library for real-time web applications. It enables bidirectional
            communication between web clients and servers.
          </ListItem>
          <ListItem fw={200}>
            Node.js: A runtime environment for executing JavaScript on the server side. It allows
            for building scalable network applications using JavaScript.
          </ListItem>
        </List>
      </Stack>
      <Modal opened={modalOpened} onClose={modalToggle.close} size="xl" centered>
        <Image src={currentImage} className="object-contain" mah={500} />
      </Modal>
    </>
  );
}
