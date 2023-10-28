import { twMerge } from 'tailwind-merge';

// paragraph props type
type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export const Paragraph = ({ children, className }: ParagraphProps) => {
  return <p className={twMerge('text-zinc-500', className)}>{children}</p>;
};
