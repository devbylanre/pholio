import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Preloader } from '../components/ui/Preloader';

export const RootLayout = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Header />
      <div className='px-3 md:px-0'>
        <Outlet />
      </div>
      <Footer />
    </Suspense>
  );
};
