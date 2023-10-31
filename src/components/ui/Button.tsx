import { twMerge } from 'tailwind-merge';

// component props type
type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  const { className, children, ...rest } = props; // button props

  return (
    <button
      className={twMerge(
        'inline-flex gap-x-2 items-center justify-center',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
