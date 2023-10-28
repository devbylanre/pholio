import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const RootLayout = () => {
  return (
    <div>
      <Header />
      <div className='px-3 md:px-0'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
