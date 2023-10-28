import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

// single project props type
type SingleProjectProps = {
  className?: string;
  children: React.ReactNode;
  animate?: boolean;
};

export const LightCard = (props: SingleProjectProps) => {
  const { className, children, animate } = props;

  return (
    <motion.div
      className={twMerge(
        'gap-8 overflow-hidden transition-all duration-200 bg-white rounded-xl border border-zinc-200',
        className
      )}
      whileHover={
        animate
          ? {
              scale: 0.98,
              origin: 0,
              boxShadow: '0 0 25px 1px rgba(0, 0, 0, 0.05)',
            }
          : {}
      }
    >
      {/* children */}
      {children}
    </motion.div>
  );
};
