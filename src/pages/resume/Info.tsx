import { Heading } from '../../components/ui/Heading';
import { Paragraph } from '../../components/ui/Paragraph';
import { LightCard } from '../../layouts/LightCard';

type InfoType = {
  title: string;
  value: string | number;
};

const infos: InfoType[] = [
  {
    title: 'profession',
    value: 'digital designer',
  },
  {
    title: 'Date of birth',
    value: '14, July 1998',
  },
  {
    title: 'education',
    value: 'University of arts, DC Washington',
  },
  {
    title: 'language',
    value: 'English',
  },
  {
    title: 'city',
    value: 'New York',
  },
];

export const Info = () => {
  return (
    <div>
      <LightCard className='flex flex-col p-3 md:p-4 gap-y-0'>
        {infos.map((info) => (
          <div
            key={info.title}
            className='inline-flex justify-between py-2 capitalize border-b border-zinc-200 gap-x-5'
          >
            <Heading className='text-sm'>{info.title}</Heading>
            <Paragraph className='text-sm'>{info.value}</Paragraph>
          </div>
        ))}
      </LightCard>
    </div>
  );
};
