import { Heading } from './ui/Heading';
import { Paragraph } from './ui/Paragraph';
import {
  FaSquareXTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaBehance,
} from 'react-icons/fa6';
import { LightCard } from '../layouts/LightCard';

const apps = [
  { icon: <FaDribbble />, username: 'joinmatt' },
  { icon: <FaBehance />, username: 'mattdesign' },
  { icon: <FaSquareXTwitter />, username: 'joinmatt' },
  { icon: <FaLinkedinIn />, username: 'joinmatt' },
];

export const Footer = () => {
  return (
    <div className='flex flex-col px-3 pb-24 mt-16 md:pb-8 gap-y-8'>
      <div className='flex flex-col items-start text-left md:items-center gap-y-2 md:text-center'>
        <Heading className='text-xl md:text-2xl'>
          Want to build a new Project?
        </Heading>
        <Paragraph className='w-full md:w-3/5'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tempor,
          malesuada adipiscing congue diam. Quis orci amet porttitor blandit
          amet nullam sit.
        </Paragraph>
      </div>

      <div className='grid self-center w-full grid-cols-2 gap-2 md:grid-cols-4 justify-items-center md:w-fit'>
        {apps.map((app, index) => (
          <LightCard
            className='inline-flex items-center justify-center w-full px-3 py-2 gap-x-2'
            key={index}
          >
            {app.icon}
            <Paragraph className='text-sm first-letter:capitalize text-zinc-900'>
              @{app.username}
            </Paragraph>
          </LightCard>
        ))}
      </div>
    </div>
  );
};
