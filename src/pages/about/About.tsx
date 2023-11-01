import { Helmet } from 'react-helmet-async';
import { Award } from './Award';
import { Experience } from './Experience';
import { Me } from './Me';
import { Profile } from './Profile';
import { Skills } from './Skills';

export const About = () => {
  return (
    <>
      {/* seo optimization */}
      <Helmet>
        <title>About Matt</title>
        <meta
          name='description'
          content='Learn more about Matt and his digital skills'
        />
        <link
          rel='canonical'
          href='/about'
        />
      </Helmet>

      {/* page components */}
      <div className='flex flex-col mt-28 md:mt-32 gap-y-12 md:gap-y-20'>
        {/* freelancer profile */}
        <Profile />

        {/* skills and experience section */}
        <div className='flex flex-col justify-between gap-10 md:flex-row'>
          {/* experience section */}
          <Experience />
          {/* skills section */}
          <Skills />
        </div>

        {/* about section */}
        <Me />

        {/* awards section */}
        <Award />
      </div>
    </>
  );
};
