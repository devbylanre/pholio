import { useState } from 'react';
import { Options } from './Options';
import { Info } from './Info';

export const Container = () => {
  const [step, setStep] = useState<string>('option');
  const [help, setHelp] = useState<string | null>(null);

  const chooseStep = (value: string) => setStep(value); //choose form step
  const chooseHelp = (value: string) => setHelp(value); //choose form help sections

  const renderStep = (step: string) => {
    switch (step) {
      case 'option':
        return (
          <Options
            chooseStep={chooseStep}
            chooseHelp={chooseHelp}
            help={help}
          />
        );
      case 'info':
        return <Info chooseStep={chooseStep} />;
      default:
        return null;
    }
  };

  return (
    <div className='flex flex-col gap-y-8 w-full md:w-[500px]'>
      {renderStep(step)}
    </div>
  );
};
