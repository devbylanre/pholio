import { Heading } from '../../components/ui/Heading';
import { Paragraph } from '../../components/ui/Paragraph';
import { PiAtom, PiArrowLeftBold } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';

const variants: {} = {
  animate: {
    translate: 0,
    rotate: 360,
    transition: {
      duration: 2,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

export const NotFound = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='w-full md:w-[640px] flex flex-col items-center gap-y-10'>
        <motion.span
          variants={variants}
          animate='animate'
        >
          <PiAtom className='p-2.5 bg-white rounded-full shadow w-14 h-14 ring-1 ring-zinc-200 fill-gray-500' />
        </motion.span>
        <div className='text-center'>
          <Heading className='text-3xl md:text-5xl'>You seem lost.</Heading>
          <Paragraph className='mx-0 mt-3 md:mx-10'>
            It appears you've ventured into uncharted territory, encountering a
            404 error along the way. Don't worry; this is just a minor break on
            your digital journey.
          </Paragraph>
        </div>
        <Button
          className='w-full py-2 bg-white rounded-lg ring-1 ring-zinc-200 md:w-3/5'
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Take me Back
          <motion.span
            initial={{ x: 5 }}
            animate={isHovered ? { x: -2 } : {}}
          >
            <PiArrowLeftBold />
          </motion.span>
        </Button>
      </div>
    </div>
  );
};
