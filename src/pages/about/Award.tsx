import { Heading } from '../../components/ui/Heading';

const awards: string[] = [
  'Best Visual Designer of the Year',
  'The Webby Awards',
  'The D&AD Awards - Category: Digital Design',
  'The Lovie Awards - Category: Websites',
  'Online Advertising, Social Media 5x Awwwards',
];

export const Award = () => {
  return (
    <div>
      <Heading className='text-xl'>Awards</Heading>
      <div className='flex flex-col mt-5 gap-y-3'>
        {awards.map((award, index) => (
          <Heading key={index}>{award}</Heading>
        ))}
      </div>
    </div>
  );
};
