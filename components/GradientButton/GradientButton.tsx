interface IProps {
  label: string;
  link?: string;
  tooltip?: string;
}

export default function GradientButton({ label, link, tooltip }: IProps) {
  return (
    <>
      <div className="relative inline-flex group">
        <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#F08F27] via-[#1DB9D1] to-[#691FE1] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
        <a
          href={link || '#'}
          title={tooltip}
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
          target="_blank"
          rel="noreferrer"
        >
          {label}
        </a>
      </div>
    </>
  );
}
