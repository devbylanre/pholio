import { Paragraph } from '../../components/ui/Paragraph';
import { Heading } from '../../components/ui/Heading';
import { LightCard } from '../../layouts/LightCard';

const schools: string[] = [
  'Bachelor of fine arts in Graphic design, university of arts',
  'Adobe certified expert in PhotoShop, Illustrator, and InDesign',
  'Certificate in UX design, general assembly',
];

export const Education = () => {
  return (
    <div className=''>
      <Heading>Education</Heading>
      <LightCard className='flex flex-col p-4 mt-3 gap-y-2'>
        {schools.map((school, index) => (
          <Paragraph
            key={index}
            className='text-sm'
          >
            {school}
          </Paragraph>
        ))}
      </LightCard>
    </div>
  );
};
