import { LightCard } from '../../layouts/LightCard';
import { Heading } from '../../components/ui/Heading';
import { Paragraph } from '../../components/ui/Paragraph';

const features = [
  {
    title: 'strategy',
    comment:
      'Marketing strategy is no longer about the stuff you make, but about the stories you tell',
  },
  {
    title: 'Brand',
    comment:
      'The aim of marketing is to know the customer so well the product or service sells itself.',
  },
  {
    title: 'Development',
    comment:
      'The more you engage with customers, the clearer things become and the easier it is to determine.',
  },
  {
    title: 'AI',
    comment: `AI is no longer a futuristic technology – it's becoming an integral part of our everyday lives.`,
  },
];

export const Features = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      {features.map((demo) => (
        <LightCard
          className='p-5'
          key={demo.title}
        >
          <Heading className='capitalize'>{demo.title}</Heading>
          <Paragraph className='mt-2'>{demo.comment}</Paragraph>
        </LightCard>
      ))}
    </div>
  );
};
