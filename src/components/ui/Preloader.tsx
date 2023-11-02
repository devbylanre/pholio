import { motion } from 'framer-motion';
import { PiBoneBold } from 'react-icons/pi';

export const Preloader = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <motion.span
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: 'easeInOut',
          repeatDelay: 0.75,
          duration: 0.4,
        }}
      >
        <PiBoneBold className='w-8 h-8' />
      </motion.span>
    </div>
  );
};
