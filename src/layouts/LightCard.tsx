import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

// single project props type
type SingleProjectProps = {
  className?: string;
  children: React.ReactNode;
  whileHover?: {};
  transition?: {};
  onClick?: () => void;
};

export const LightCard = (props: SingleProjectProps) => {
  const { className, children, whileHover, transition, onClick } = props;

  return (
    <motion.div
      className={twMerge(
        'gap-8 overflow-hidden transition-all duration-200 bg-white rounded-xl border border-zinc-200',
        className
      )}
      whileHover={whileHover}
      onClick={onClick}
      transition={transition}
    >
      {/* children */}
      {children}
    </motion.div>
  );
};
