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
    percent: 95,
  },
  {
    title: 'Product design',
    percent: 90,
    icon: <PiExcludeBold />,
  },
  {
    title: 'Logo design',
    percent: 89,
    icon: <PiStrategyBold />,
  },
  {
    title: 'Website design',
    percent: 85,
    icon: <PiStackBold />,
  },
  {
    title: 'Branding',
    percent: 87,
    icon: <PiSignatureBold />,
  },
  {
    title: 'Interaction design',
    percent: 86,
    icon: <PiCursorClickBold />,
  },
];

export const Skills = () => {
  const [currentSkill, setCurrentSkill] = useState<null | number>(null);
  const [counterProps, setCounterProps] = useState({
    min: 0,
    max: 0,
    speed: 0,
  });

  const { count, setCount } = useNumberCounter(counterProps);

  const handleClickButton = (index: number, max: number) => {
    setCurrentSkill(index); // set the current skill
    setCount(0); //reset the count to zero

    return setCounterProps((prevObj) => {
      const obj = prevObj; //store the previous state to the variable
      // return a new object to state current state
      return { ...obj, max: max, speed: 20 };
    });
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
              {currentSkill !== index ? (
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
