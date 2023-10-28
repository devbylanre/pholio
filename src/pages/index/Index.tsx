import { Hero } from './Hero';
import { Portfolio } from './Portfolio';
import { Features } from './Features';
import { Story } from './Story';

export const Index = () => {
  return (
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
  );
};
