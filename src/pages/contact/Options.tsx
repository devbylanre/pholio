import { Paragraph } from '../../components/ui/Paragraph';
import { LightCard } from '../../layouts/LightCard';
import { Heading } from '../../components/ui/Heading';
import { motion } from 'framer-motion';

import {
  PiDeviceMobileSpeakerBold,
  PiFlowArrowBold,
  PiIntersectBold,
  PiHandWavingBold,
  PiStackSimpleBold,
  PiLightningBold,
  PiArrowRightBold,
} from 'react-icons/pi';
import { Button } from '../../components/ui/Button';
import { twMerge } from 'tailwind-merge';

// option type
interface OptionType {
  title: string;
  icon: React.ReactElement;
}

const iconClassName: string = 'w-8 h-8 p-1.5 rounded-full bg-zinc-100';

const options: OptionType[] = [
  {
    title: 'website design',
    icon: <PiDeviceMobileSpeakerBold className={iconClassName} />,
  },
  {
    title: 'Interaction design',
    icon: <PiHandWavingBold className={iconClassName} />,
  },
  {
    title: 'UI/UX design',
    icon: <PiFlowArrowBold className={iconClassName} />,
  },
  { title: 'logo design', icon: <PiIntersectBold className={iconClassName} /> },
  { title: 'branding', icon: <PiStackSimpleBold className={iconClassName} /> },
  { title: 'general', icon: <PiLightningBold className={iconClassName} /> },
];

interface OptionsProps {
  chooseStep: (value: string) => void;
  chooseHelp: (value: string) => void;
  help: string | null;
}

export const Options = (props: OptionsProps) => {
  const { chooseStep, chooseHelp, help } = props;

  return (
    <>
      <Heading className='text-xl text-left md:text-2xl md:text-center'>
        Hey,
        <br /> How can we help you?
      </Heading>

      {/* options list */}
      <div className='grid grid-cols-1 gap-y-3 md:gap-5 md:grid-cols-2'>
        {options.map((option: OptionType) => (
          <LightCard
            key={option.title}
            className={twMerge(
              'inline-flex items-center ring-1 ring-zinc-50 gap-x-2 p-3 cursor-pointer gap-y-2',
              help === option.title && 'ring-zinc-900'
            )}
            onClick={() => chooseHelp(option.title)}
            transition={{ duration: 0.1, type: 'tween' }}
          >
            {/* option icon */}
            <motion.span
              animate={help === option.title ? { rotate: 45 } : { rotate: 0 }}
            >
              {option.icon}
            </motion.span>
            {/* option title */}
            <Paragraph className='text-sm capitalize text-zinc-900'>
              {option.title}
            </Paragraph>
          </LightCard>
        ))}
      </div>

      {/* show button if an option is selected */}
      {help !== null && (
        <Button
          className='px-5 py-2 transition-all duration-200 ease-in-out bg-white border rounded-lg border-zinc-200 hover:bg-zinc-50'
          onClick={() => chooseStep('info')}
        >
          <span>Jump start with {help}</span>
          <PiArrowRightBold />
        </Button>
      )}
    </>
  );
};
