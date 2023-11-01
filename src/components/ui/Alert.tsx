import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  state: 'danger' | 'success' | 'warning';
  isVisible: boolean;
  setClose: () => void;
}

export const Alert = (props: AlertProps) => {
  const { children, className, state, isVisible, setClose } = props;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setClose(), 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, setClose]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key='alert'
        exit={{ opacity: 0, y: 20 }}
        className={twMerge(
          'p-3 rounded-xl',
          className,
          state === 'danger' && 'bg-red-100'
        )}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
