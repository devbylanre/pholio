import { PiChatCenteredDotsBold } from 'react-icons/pi';
import { LightCard } from '../../layouts/LightCard';
import { Heading } from '../../components/ui/Heading';
import { Paragraph } from '../../components/ui/Paragraph';
import { motion } from 'framer-motion';

interface SuccessProps {
  plan: string | null;
}

export const Success = (props: SuccessProps) => {
  const { plan } = props;

  return (
    <LightCard className='flex flex-col px-5 py-12 md:px-12 col-span-full gap-y-5'>
      <motion.span
        className='self-center p-2.5 bg-green-100 rounded-full'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <PiChatCenteredDotsBold className='w-8 h-8 fill-green-900' />
      </motion.span>
      <div className='text-center'>
        <Heading className='text-xl'>You message has been received</Heading>
        <Paragraph className='mt-1 text-zinc-600'>
          Your have successfully sent us a message regarding{' '}
          <span className='font-medium capitalize text-zinc-900'>{plan}</span>{' '}
          plan. We'll reach out to you within the next 24 hours
        </Paragraph>
      </div>
    </LightCard>
  );
};
