import { Heading } from '../../components/ui/Heading';
import { Paragraph } from '../../components/ui/Paragraph';

export const Profile = () => {
  return (
    <div className='text-center'>
      <Heading className='text-2xl md:text-3xl'>My resume</Heading>
      <Paragraph className='mt-1 text-base md:text-lg'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tempor,
        malesuada adipiscing congue diam.
      </Paragraph>
    </div>
  );
};
