import { About } from './About';
import { Awards } from './Awards';
import { Education } from './Education';
import { Experience } from './Experience';
import { Info } from './Info';
import { Profile } from './Profile';

export const Resume = () => {
  return (
    <div className='flex flex-col mt-28 gap-y-8'>
      {/* profile section*/}
      <Profile />

      <div className='flex flex-col gap-16 md:flex-row'>
        {/* left side section */}
        <div className='flex flex-col w-full gap-y-8'>
          {/* about section */}
          <About />

          {/* individual info */}
          <Info />
        </div>
        {/* right side section */}
        <div className='flex flex-col w-full gap-y-5'>
          {/* experiences section */}
          <Experience />
          {/* awards section*/}
          <Awards />
          {/* education section */}
          <Education />
        </div>
      </div>
    </div>
  );
};
