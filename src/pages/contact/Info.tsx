import { Heading } from '../../components/ui/Heading';
import { FieldControl } from '../../components/forms/FieldControl';
import { Button } from '../../components/ui/Button';
import { useState } from 'react';
import { FormError } from './FormError';
import { PiArrowRightBold } from 'react-icons/pi';

// props interface
interface InfoProps {
  chooseStep: (data: string) => void;
  validateForm: () => any;
}

export const Info = ({ chooseStep, validateForm }: InfoProps) => {
  const [hasErrors, setHasErrors] = useState<boolean>(false);

  // handle the next form step requirements
  const handleGoTo = async () => {
    const fields = ['firstName', 'lastName', 'email', 'tel'];
    const newErrors = await validateForm();

    // loops through the fields array
    for (const field of fields) {
      //check if any of the existing field has an error
      if (newErrors[field]) {
        setHasErrors(true);
        return;
      }
    }

    setHasErrors(false); //set hasErrors to false
    chooseStep('company'); // go to the company form or step
  };

  return (
    <>
      {/* heading or title */}
      <Heading className='text-xl text-left md:text-2xl md:text-center'>
        What do I call you?
      </Heading>
      {/* fields */}
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        {/* first name field */}
        <FieldControl
          control='input'
          type='text'
          min={0}
          name='firstName'
          label='First name'
        />
        {/* last name field */}
        <FieldControl
          control='input'
          type='text'
          min={0}
          name='lastName'
          label='Last name'
        />
        {/* email address field */}
        <FieldControl
          control='input'
          type='email'
          min={0}
          name='email'
          label='Email - work or personal'
        />
        {/* mobile number field */}
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
        <PiArrowRightBold />
      </Button>

      {/* form error block */}
      <FormError
        isVisible={hasErrors}
        setClose={() => setHasErrors(false)}
        message='Fill the fields with the required values to proceed. We would love to
        hear more from you'
      />
    </>
  );
};
