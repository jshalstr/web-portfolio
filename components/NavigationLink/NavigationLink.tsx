import { MantineStyleProps, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import Link from 'next/link';
import { IconChevronRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

interface IProps {
  label: string;
  link: string;
  isActive?: boolean;
  onClick?: () => void;
  ta?: MantineStyleProps['ta'];
  justify?: string;
  target?: string;
}

export default function NavigationLink({
  label,
  link,
  isActive,
  onClick,
  ta,
  target,
  justify,
}: IProps) {
  const { hovered, ref } = useHover();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsHovered(hovered);
  }, [hovered]);

  return (
    <span ref={ref} className={`relative flex max-w-xs items-center ${justify}`}>
      {isActive && <IconChevronRight className="mr-1 animate-slideRight" />}
      <Text
        ta={ta}
        component={Link}
        fz={{ base: 'lg', sm: 'md', lg: 'lg' }}
        fw={200}
        href={link}
        target={target}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
        onClick={onClick}
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
