import { Helmet } from 'react-helmet-async';
import { Container } from './Container';

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Matt</title>
        <meta
          name='keyword'
          content='contact'
        />
        <meta
          name='description'
          content='Reach out to Matt regarding your next digital creative project'
        />
      </Helmet>
      <div className='flex flex-col items-center justify-start min-h-screen pt-8 md:justify-center md:pt-0'>
        <Container />
      </div>
    </>
  );
};
