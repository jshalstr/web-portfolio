import { Card as MantineCard } from '@mantine/core';

interface IProps {
  children: React.ReactNode;
}

export default function Card({ children }: IProps) {
  return (
    <>
      <MantineCard
        className="transition duration-500 hover:scale-105 shadow-md shadow-white hover:shadow-md hover:shadow-blue-700"
        shadow="0 4px 6px -1px white, 0 2px 4px -2px white"
        bg="transparent"
        padding="lg"
        radius="md"
        withBorder
        maw={300}
      >
        {children}
      </MantineCard>
    </>
  );
}
