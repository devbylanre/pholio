import { LightCard } from '../../layouts/LightCard';
import { Heading } from '../../components/ui/Heading';
import { Paragraph } from '../../components/ui/Paragraph';

const stacks = [
  {
    title: 'Figma',
    className: 'p-3 col-span-full md:col-span-8',
    usage:
      'Collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.',
  },
  {
    title: 'adobe illustrator',
    className: 'p-3 col-span-full md:col-span-4',
    usage:
      'Vector graphics editor and design program developed and marketed by Adobe Inc.',
  },
  {
    title: 'PhotoShop',
    className: 'p-3 col-span-full md:col-span-4',
    usage:
      'Raster graphics editor used for image creation, graphic design and photo editing software',
  },
  {
    title: 'After effects',
    className: 'p-3 col-span-full md:col-span-8',
    usage:
      ' Digital visual effects, motion graphics, and compositing application used for creating animated graphics, video promotion videos, animated logos,a nd lots more.',
  },
];

export const Stack = () => {
  return (
    <div className='grid grid-cols-12 gap-5 md:grid-cols-12'>
      {stacks.map((stack) => (
        <LightCard
          className={stack.className}
          key={stack.title}
        >
          <Heading className='capitalize'>{stack.title}</Heading>
          <Paragraph className='mt-2'>{stack.usage}</Paragraph>
        </LightCard>
      ))}
    </div>
  );
};
