import { Heading } from '../../components/ui/Heading';
import { Paragraph } from '../../components/ui/Paragraph';

type ExperienceProps = {
  title: string;
  brand: string;
  duration: string;
};

const experiences: ExperienceProps[] = [
  {
    title: 'UI/UX designer',
    brand: 'Google, New York',
    duration: '2018 - 2020',
  },
  {
    title: 'Product designer',
    brand: 'IBM, Las Vegas',
    duration: '2020 - 2021',
  },
  {
    title: 'Product design lead',
    brand: 'Meta, London',
    duration: '2021 - Now',
  },
];

export const Experience = () => {
  return (
    <div className='w-full'>
      <Heading className='text-xl'>Experience</Heading>
      {/* experience */}
      <div className='flex flex-col mt-5 gap-y-4'>
        {experiences.map((experience) => (
          <div key={experience.brand}>
            <Heading>
              {experience.title} - {experience.brand}
            </Heading>
            <Paragraph className='text-sm mt-0.5'>
              {experience.duration}
            </Paragraph>
          </div>
        ))}
      </div>
    </div>
  );
};
