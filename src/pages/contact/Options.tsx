import { Paragraph } from '../../components/ui/Paragraph';
import { LightCard } from '../../layouts/LightCard';
import { Heading } from '../../components/ui/Heading';

import {
  PiPaintBucketBold,
  PiFlowArrowBold,
  PiIntersectBold,
  PiHandWavingBold,
  PiStackSimpleBold,
  PiLightningBold,
  PiArrowRightBold,
} from 'react-icons/pi';
import { Button } from '../../components/ui/Button';

// option type
interface OptionType {
  title: string;
  icon: React.ReactElement;
}

const options: OptionType[] = [
  {
    title: 'website design',
    icon: <PiPaintBucketBold className='w-10 h-10' />,
  },
  {
    title: 'Interaction design',
    icon: <PiHandWavingBold className='w-10 h-10' />,
  },
  { title: 'UI/UX design', icon: <PiFlowArrowBold className='w-10 h-10' /> },
  { title: 'logo design', icon: <PiIntersectBold className='w-10 h-10' /> },
  { title: 'branding', icon: <PiStackSimpleBold className='w-10 h-10' /> },
  { title: 'general', icon: <PiLightningBold className='w-10 h-10' /> },
];

interface OptionsProps {
  chooseStep: (value: string) => void;
  chooseHelp: (value: string) => void;
  help: string | null;
}

export const Options = (props: OptionsProps) => {
  const { chooseStep, chooseHelp, help } = props;

  // setCompTitle('Hey, How can we help you?');

  return (
    <>
      <Heading className='text-xl text-left md:text-2xl md:text-center'>
        Hey,
        <br /> How can we help you?
      </Heading>
      <div className='grid grid-cols-2 gap-5 md:grid-cols-3'>
        {options.map((option: OptionType) => (
          <LightCard
            key={option.title}
            className={`${
              help === option.title && 'border-zinc-900 border-2'
            } flex flex-col items-center p-4 cursor-pointer gap-y-2`}
            onClick={() => chooseHelp(option.title)}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.1, type: 'tween' }}
          >
            {option.icon}
            <Paragraph className='text-sm capitalize text-zinc-900'>
              {option.title}
            </Paragraph>
          </LightCard>
        ))}
      </div>
      {help !== null && (
        <Button
          className='self-center px-5 py-2 transition-all duration-200 ease-in-out bg-white border rounded-lg border-zinc-200 hover:bg-zinc-50'
          onClick={() => chooseStep('info')}
        >
          <PiArrowRightBold />
          <span>Continue</span>
        </Button>
      )}
    </>
  );
};
