import { Heading } from '../../components/ui/Heading';
import { Paragraph } from '../../components/ui/Paragraph';
import { LightCard } from '../../layouts/LightCard';

type awardType = {
  title: string;
  count: number;
};

const awards: awardType[] = [
  {
    title: 'site of the day',
    count: 3,
  },
  {
    title: 'best web designer',
    count: 5,
  },
  {
    title: 'honorable designer',
    count: 2,
  },
  {
    title: 'mobile excellence',
    count: 4,
  },
];

export const Awards = () => {
  const TotalAwardCount = awards.reduce(
    (accumulator, award) => accumulator + award.count,
    0
  );

  return (
    <div>
      <Heading>Awards - {TotalAwardCount}</Heading>
      <LightCard className='flex flex-col p-3 mt-3 md:p-4 gap-y-2'>
        {awards.map((award) => (
          <div
            key={award.count}
            className='inline-flex justify-between'
          >
            <Paragraph className='text-sm capitalize'>
              {award.title} - {award.count}
            </Paragraph>
          </div>
        ))}
      </LightCard>
    </div>
  );
};
