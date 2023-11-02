import { Heading } from './ui/Heading';
import { Paragraph } from './ui/Paragraph';
import { motion } from 'framer-motion';
import {
  FaSquareXTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
} from 'react-icons/fa6';
import { LightCard } from '../layouts/LightCard';

const apps = [
  { icon: <FaDribbble /> },
  { icon: <FaBehance /> },
  { icon: <FaSquareXTwitter /> },
  { icon: <FaLinkedinIn /> },
];

export const Footer = () => {
  return (
    <div className='flex flex-col px-3 pb-24 mt-16 md:pb-8 gap-y-8'>
      <div className='flex flex-col items-center text-center gap-y-2'>
        <Heading className='text-xl md:text-2xl'>
          Want to build a new Project?
        </Heading>
        <Paragraph className='w-full md:w-3/5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tempor,
          malesuada adipiscing congue diam. Quis orci amet porttitor blandit
          amet nullam sit.
        </Paragraph>
      </div>

      <div className='inline-flex items-center justify-center gap-x-2'>
        {apps.map((app, index) => (
          <LightCard
            className='inline-flex items-center justify-center p-3 rounded-full cursor-pointer gap-x-2'
            key={index}
          >
            <motion.span whileHover={{ scale: 1.2 }}>{app.icon}</motion.span>
          </LightCard>
        ))}
      </div>
    </div>
  );
};
