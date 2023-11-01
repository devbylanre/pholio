import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  PiCompassBold,
  PiUserSwitchBold,
  PiPaperclipBold,
  PiChatCenteredDotsBold,
} from 'react-icons/pi';
import { Paragraph } from './ui/Paragraph';

const Icon = ({ icon }: { icon: React.ReactElement }) => (
  <motion.span
    whileHover={{ y: 4 }}
    className='block md:hidden'
  >
    {icon}
  </motion.span>
);

interface itemsProp {
  title: string;
  icon: React.ReactElement;
  url: string;
}

const iconClassName: string = 'w-6 h-6';

const items: itemsProp[] = [
  {
    title: 'Overview',
    icon: <Icon icon={<PiCompassBold className={iconClassName} />} />,
    url: '/',
  },
  {
    title: 'About',
    icon: <Icon icon={<PiUserSwitchBold className={iconClassName} />} />,
    url: '/about',
  },
  {
    title: 'Resume',
    icon: <Icon icon={<PiPaperclipBold className={iconClassName} />} />,
    url: '/resume',
  },
  {
    title: 'Contact',
    icon: <Icon icon={<PiChatCenteredDotsBold className={iconClassName} />} />,
    url: '/contact',
  },
];

// interface menuInterface

export const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <motion.div
        className='fixed z-50 inline-flex items-center justify-between w-11/12 px-5 m-auto bg-white rounded-full top-[90%] gap-x-10 md:w-fit md:top-4 shadow-light overflow-clip'
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        {items.map((item) => (
          <NavLink
            key={item.title}
            to={item.url}
            className={({ isActive }) =>
              `inline-flex gap-x-1 py-3 text-sm font-medium text-zinc-500 hover:text-zinc-900 ${
                isActive && 'border-b-2 border-zinc-900 text-zinc-900'
              }`
            }
          >
            {item.icon}
            <Paragraph className='hidden md:block text-inherit'>
              {item.title}
            </Paragraph>
          </NavLink>
        ))}
      </motion.div>
    </div>
  );
};
