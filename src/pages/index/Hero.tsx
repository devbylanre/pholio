import { motion } from 'framer-motion';
import { PiMapPinLineBold } from 'react-icons/pi';

// theme components
import { Heading } from '../../components/ui/Heading';
import { Paragraph } from '../../components/ui/Paragraph';

export const Hero = () => {
  return (
    <motion.div
      className='flex flex-col items-start justify-center min-h-screen text-left md:text-center md:items-center gap-y-5'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.25 }}
    >
      <Heading
        className='text-5xl font-semibold leading-tight text-transparent capitalize md:text-6xl bg-clip-text bg-gradient-to-r from-zinc-300 to-zinc-900'
        weight='semibold'
      >
        Hi, I'm matt s. scott
      </Heading>

      <Paragraph className='w-full text-lg md:w-3/5'>
        I'm a{' '}
        <span className='font-semibold text-zinc-900'>digital designer</span>{' '}
        who has a passion for aesthetic perfection. I have spent my career
        honing my skills in graphic design, web design and branding.
      </Paragraph>

      <div className='inline-flex items-center gap-x-2'>
        <PiMapPinLineBold className='w-5 h-5 fill-zinc-500' />
        <Paragraph className='text-lg capitalize'>Brooklyn, New york</Paragraph>
      </div>
    </motion.div>
  );
};
