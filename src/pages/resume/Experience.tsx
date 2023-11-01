import { Heading } from '../../components/ui/Heading';
import { Paragraph } from '../../components/ui/Paragraph';
import { LightCard } from '../../layouts/LightCard';

interface experienceType {
  brand: string;
  position: string;
  duration: string;
  roles: string[];
}

const experiences: experienceType[] = [
  {
    brand: 'XYZ agency',
    position: 'UI/UX designer',
    duration: '2018-2020',
    roles: [
      'Designed marketing materials for clients in various industries',
      'Developed brand guidelines for multiple clients',
      'Collaborated with a team of designers and copywriters',
    ],
  },
  {
    brand: 'Google',
    position: 'Product Designer',
    duration: '2020-2021',
    roles: [
      'Designed logos and branding packages for small businesses',
      'Created marketing marketing materials for small businesses',
    ],
  },
];

export const Experience = () => {
  return (
    <div>
      <Heading>Experiences</Heading>
      <div className='flex flex-col mt-3 gap-y-8'>
        {experiences.map((experience) => (
          <LightCard
            key={experience.brand}
            className='p-4'
          >
            <Heading className='text-sm'>{experience.brand}</Heading>
            <Paragraph className='mt-0.5 text-sm'>
              {experience.position} {experience.duration}
            </Paragraph>
            {/* roles */}
            <div className='flex flex-col mt-3 gap-y-2'>
              {experience.roles.map((role, index) => (
                <Paragraph
                  key={index}
                  className='text-sm'
                >
                  {role}
                </Paragraph>
              ))}
            </div>
          </LightCard>
        ))}
      </div>
    </div>
  );
};
