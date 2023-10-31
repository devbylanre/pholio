import { Heading } from '../../components/ui/Heading';
import { FieldControl } from '../../components/forms/FieldControl';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';
import { PiBellSimpleRingingBold } from 'react-icons/pi';
import { Paragraph } from '../../components/ui/Paragraph';
import { Alert } from '../../components/ui/Alert';

interface InfoProps {
  chooseStep: (data: string) => void;
  validateForm: () => any;
}

export const Info = ({ chooseStep, validateForm }: InfoProps) => {
  const [hasErrors, setHasErrors] = useState<true | false>(false);

  // handle the next form step requirements
  const handleGoTo = async () => {
    await validateForm().then((errors: {}) => {
      // check if there was an error
      if (Object.keys(errors).length > 0) {
        setHasErrors(true);
      } else {
        setHasErrors(false);
        chooseStep('option');
      }
    });
  };

  return (
    <>
      <Heading className='text-xl text-left md:text-2xl md:text-center'>
        What do I call you?
      </Heading>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        <FieldControl
          control='input'
          type='text'
          min={0}
          name='firstName'
          label='First name'
        />
        <FieldControl
          control='input'
          type='text'
          min={0}
          name='lastName'
          label='Last name'
        />
        <FieldControl
          control='input'
          type='email'
          min={0}
          name='email'
          label='Email'
        />
        <FieldControl
          control='input'
          type='tel'
          min={0}
          name='tel'
          label='Mobile'
        />
      </div>
      {/* button invokes the handleGoTo function */}
      <Button
        type='button'
        className='px-4 py-2 bg-white border rounded-lg border-zinc-200'
        onClick={handleGoTo}
      >
        Let's discuss about your project
      </Button>

      {/* an alert that is visible when there's an error */}
      <Alert
        state='danger'
        isVisible={hasErrors}
        setClosed={() => setHasErrors(false)}
        className='inline-flex gap-x-3'
      >
        <PiBellSimpleRingingBold className='w-6 h-6 fill-red-900' />
        <Paragraph className='text-sm font-medium text-red-900'>
          Fill the fields with the required values to proceed. We would love to
          hear more from you
        </Paragraph>
      </Alert>
    </>
  );
};
