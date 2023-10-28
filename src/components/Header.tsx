import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';

const menus = [
  {
    title: 'Overview',
    url: '/',
  },
  {
    title: 'Workshop',
    url: '',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Credentials',
    url: '',
  },
  {
    title: 'Contact',
    url: '',
  },
];

// interface menuInterface

export const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className='flex flex-col items-center justify-center'>
      <motion.div
        className='fixed w-11/12 md:w-[840px] m-auto rounded-full bg-white top-4 inline-flex items-center justify-between py-3 z-50 px-3 md:px-5 shadow-light'
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Link
          to='/'
          className='text-lg font-medium'
        >
          <span>Portfolio v1</span>
        </Link>

        {/* navigation menus */}
        <div
          className={`absolute left-0 flex-col w-full p-4 md:bg-none md:w-fit rounded-xl md:flex-row md:static gap-x-8 top-16 shadow-light md:shadow-none md:p-0 bg-inherit ${
            !isHidden ? 'hidden' : 'flex'
          }`}
        >
          {menus.map((menu) => (
            <NavLink
              key={menu.title}
              to={menu.url}
              className='w-full py-3 text-zinc-600 hover:text-zinc-900 md:py-0'
            >
              <motion.p transition={{ duration: 0.4 }}>{menu.title}</motion.p>
            </NavLink>
          ))}
        </div>

        {/* nav menu hamburger */}
        <div
          className='flex items-center justify-center transition-all duration-200 rounded-full cursor-pointer w-7 h-7 md:hidden bg-zinc-100 hover:bg-zinc-200'
          onClick={() => setIsHidden(!isHidden)}
        >
          <PiDotsThreeOutlineFill className='w-4 h-4 fill-gray-500 ' />
        </div>
      </motion.div>
    </div>
  );
};
