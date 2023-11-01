import { Hero } from './Hero';
import { Portfolio } from './Portfolio';
import { Features } from './Features';
import { Story } from './Story';
import { Helmet } from 'react-helmet-async';

export const Index = () => {
  return (
    <>
      <Helmet>
        <title>A new era of digital creativity</title>
        <meta
          name='keyword'
          content=''
        />
      </Helmet>
      <div className='flex flex-col gap-y-32'>
        {/* hero section */}
        <Hero />
        {/* portfolio section */}
        <Portfolio />
        {/* features section */}
        <Features />
        {/* story section */}
        <Story />
        {/*  */}

        {/* homepage fifth section */}
      </div>
    </>
  );
};
