import { useState } from 'react';
import { Heading } from '../../components/ui/Heading';
import { Button } from '../../components/ui/Button';
import {
  PiPerspectiveBold,
  PiExcludeBold,
  PiStrategyBold,
  PiStackBold,
  PiSignatureBold,
  PiCursorClickBold,
} from 'react-icons/pi';
import { useNumberCounter } from '../../utils/useNumberCounter';
import { Paragraph } from '../../components/ui/Paragraph';

interface SkillsProps {
  title: string;
  percent: number;
  icon: React.ReactElement;
}

const skills: SkillsProps[] = [
  {
    title: 'UI/UX design',
    icon: <PiPerspectiveBold />,
    percent: 99,
  },
  {
    title: 'Product design',
    percent: 95,
    icon: <PiExcludeBold />,
  },
  {
    title: 'Logo design',
    percent: 89,
    icon: <PiStrategyBold />,
  },
  {
    title: 'Website design',
    percent: 75,
    icon: <PiStackBold />,
  },
  {
    title: 'Branding',
    percent: 82,
    icon: <PiSignatureBold />,
  },
  {
    title: 'Interaction design',
    percent: 86,
    icon: <PiCursorClickBold />,
  },
];

export const Skills = () => {
  const [isLoading, setIsLoading] = useState<null | number>(null);
  const [counterProps, setCounterProps] = useState({
    min: 0,
    max: 0,
    speed: 0,
  });

  const { count } = useNumberCounter(counterProps);

  const handleClickButton = (index: number, max: number) => {
    setIsLoading(index);

    return setCounterProps((prevObj) => ({ ...prevObj, max: max, speed: 20 }));
  };

  return (
    <div className='w-full'>
      <Heading className='text-xl'>Skills</Heading>
      <div className='flex flex-wrap items-stretch gap-3 mt-5'>
        {skills.map((skill, index) => (
          <Button
            onClick={() => handleClickButton(index, skill.percent)}
            key={index}
            className='px-3 py-1 text-sm transition-all duration-200 ease-in-out bg-white rounded-full hover:bg-gray-100 ring-1 ring-inset ring-zinc-900'
          >
            {skill.icon}
            <span>
              {isLoading !== index ? (
                skill.title
              ) : (
                <div className='flex items-center gap-x-2'>
                  <div className='min-w-[100px] h-0.5 bg-zinc-300 rounded-full overflow-clip'>
                    {/* count progress bar */}
                    <div
                      style={{
                        height: '100%',
                        backgroundColor: '#000',
                        width: `${count}%`,
                      }}
                    ></div>
                  </div>
                  {/* count progress value */}
                  <Paragraph className='text-xs text-zinc-900'>
                    {count}
                  </Paragraph>
                </div>
              )}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
};
