import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';

const menus = [
  {
    title: 'Overview',
    url: '/',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Resume',
    url: '/resume',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

// interface menuInterface

export const Header = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className='flex flex-col items-center justify-center'>
      <motion.div
        className='fixed z-50 inline-flex items-center justify-between w-11/12 px-3 m-auto bg-white rounded-full md:w-fit top-4 md:px-5 shadow-light'
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
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
              className={({ isActive }) =>
                `w-full py-3 text-sm font-medium text-zinc-600 hover:text-zinc-900 ${
                  isActive && 'border-b-2 border-zinc-900 text-zinc-900'
                }`
              }
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
