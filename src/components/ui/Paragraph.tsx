import { twMerge } from 'tailwind-merge';

// paragraph props type
type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: (e?: any) => void;
};

export const Paragraph = ({ children, className, onClick }: ParagraphProps) => {
  return (
    <p
      className={twMerge('text-zinc-500', className)}
      onClick={onClick}
    >
      {children}
    </p>
  );
};
