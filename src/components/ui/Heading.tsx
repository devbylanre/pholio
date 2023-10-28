import { twMerge } from 'tailwind-merge';

// heading prop types
type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  weight?: string;
};

export const Heading = (props: HeadingProps) => {
  const { children, className, weight } = props;

  const headingWeight = weight ? `font-${weight}` : 'font-medium';

  return (
    <h3 className={twMerge('text-zinc-900', className, headingWeight)}>
      {children}
    </h3>
  );
};
