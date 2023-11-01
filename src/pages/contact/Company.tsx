import { useState } from 'react';
import { FieldControl } from '../../components/forms/FieldControl';
import { Button } from '../../components/ui/Button';
import { Heading } from '../../components/ui/Heading';
import { PiCircleNotchBold } from 'react-icons/pi';
import { AnimatePresence, motion } from 'framer-motion';
import { FormError } from './FormError';

// user roles
const options = [
  {
    title: 'Manager',
    value: 'Manager',
  },
  {
    title: 'Ceo',
    value: 'Ceo',
  },
  {
    title: 'HR manager',
    value: 'HR manager',
  },
];

// component props
interface CompanyProps {
  validateForm: () => any;
  submitForm: () => any;
}

export const Company = (props: CompanyProps) => {
  const { validateForm, submitForm } = props;
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [hasErrors, setHasErrors] = useState<boolean>(false);

  //handles form submission
  const handleSubmit = async () => {
    const fields = ['role', 'org', 'description']; //fields name within component
    setIsSubmitting(true); // assign true to isSubmitting
    const errors = await validateForm(); // store errors

    // loop through fields
    for (const field of fields) {
      // check if the field has an error message
      if (errors[field]) {
        const errorTimer = setTimeout(() => {
          setHasErrors(true); //assign true if the field has an error message
          setIsSubmitting(false);
        }, 3000); //time to wait before assigning false to isSubmitting
        return () => clearTimeout(errorTimer);
      }
    }

    setHasErrors(false); //assign false to hasErrors
    const successTimer = setTimeout(() => {
      setIsSubmitting(false); //assign false to isSubmitting
      submitForm(); //submit form
    }, 3000);
    return () => clearTimeout(successTimer);
  };

  return (
    <>
      {/* component title or head */}
      <Heading className='text-xl text-left md:text-2xl md:text-center'>
        Tell us more about your organization
      </Heading>
      {/* fields grid */}
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        <FieldControl
          control='select'
          options={options}
          name='role'
          placeholder='Select a role'
          label='What is your role?'
        />
        <FieldControl
          control='input'
          name='org'
          label='Organization name'
        />
        <div className='col-span-full'>
          <FieldControl
            control='textarea'
            name='description'
            label='Briefly describe how we can help you'
          />
        </div>

        <Button
          type='button'
          className='py-2 bg-white border rounded-lg col-span-full hover:bg-zinc-100 border-x-zinc-200'
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          Send message
          <AnimatePresence>
            {isSubmitting && (
              <motion.span
                key='loader'
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                exit={{ opacity: 0 }}
              >
                <PiCircleNotchBold className='animate-spin' />
              </motion.span>
            )}
          </AnimatePresence>
        </Button>

        {/* error block */}
        <div className='col-span-full'>
          <FormError
            isVisible={hasErrors}
            setClose={() => setHasErrors(false)}
            message=' Fill the fields with the required values to proceed. We would love to hear more from you'
          />
        </div>
      </div>
    </>
  );
};
