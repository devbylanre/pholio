import { Helmet } from 'react-helmet-async';
import { About } from './About';
import { Awards } from './Awards';
import { Education } from './Education';
import { Experience } from './Experience';
import { Info } from './Info';
import { Profile } from './Profile';

export const Resume = () => {
  return (
    <>
      <Helmet>
        <title>My Resume</title>
        <meta
          name='keyword'
          content='resume'
        />
        <meta
          name='description'
          content='Hi, my name is Matt a digital creative agent with over 5 years of experience. You can find my resume attached to the webpage'
        />
      </Helmet>
      <div className='flex flex-col pt-8 md:pt-28 gap-y-8'>
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
    </>
  );
};
