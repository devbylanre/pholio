import { motion } from 'framer-motion';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

// component props type
type ButtonProps = {
  title: string | number | React.ReactElement;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onHoverIcon?: Object;
  onClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  const { className, title, icon, iconPosition, onHoverIcon, onClick } = props; // button props
  const [isHovered, setIsHovered] = useState<true | false>(false); // state for mouse over

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={twMerge(
        'inline-flex gap-x-2 items-center justify-center',
        className
      )}
      onClick={onClick}
    >
      {icon && iconPosition === 'left' && (
        <motion.span animate={isHovered ? onHoverIcon : {}}>{icon}</motion.span>
      )}
      {/* button title */}
      {title}
      {/* icon */}
      {icon && iconPosition === 'right' && (
        <motion.span animate={isHovered ? onHoverIcon : {}}>{icon}</motion.span>
      )}
    </button>
  );
};
