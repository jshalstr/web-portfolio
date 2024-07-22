import { Anchor, Button } from '@mantine/core';

interface IProps {
  label: string;
  link?: string;
  tooltip?: string;
}

export default function GradientButton({ label, link, tooltip }: IProps) {
  return (
    <>
      <div className="relative inline-flex group">
        <div className="absolute transition-all duration-1000 opacity-70 inset-1 bg-gradient-to-r from-[#F08F27] via-[#1DB9D1] to-[#691FE1] blur-lg group-hover:opacity-100 group-hover:inset-0 group-hover:duration-200 animate-tilt"></div>
        <Button
          component="a"
          href={link || '#'}
          title={tooltip}
          color="white"
          variant="outline"
          size="xl"
          className="relative inline-flex transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          target="_blank"
          rel="noreferrer"
        >
          {label}
        </Button>
      </div>
    </>
  );
}
