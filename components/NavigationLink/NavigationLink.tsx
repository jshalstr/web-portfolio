import { Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import Link from 'next/link';
import { IconChevronRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

interface IProps {
  label: string;
  link: string;
  isActive: boolean;
}

export default function NavigationLink({ label, link, isActive }: IProps) {
  const { hovered, ref } = useHover();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsHovered(hovered);
  }, [hovered]);

  return (
    <span ref={ref} className="relative flex w-36 items-center justify-end">
      {isActive && <IconChevronRight className="mr-1 animate-slideRight" />}
      <Text
        ta="end"
        component={Link}
        fz="lg"
        fw={400}
        href={link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        {label}
        <span
          className={`absolute bottom-0 left-0 h-[2px] w-full bg-current transform origin-center scale-x-0 ${
            isHovered ? 'animate-underline' : ''
          }`}
        />
      </Text>
    </span>
  );
}
