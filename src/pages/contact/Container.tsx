import { useState } from 'react';
import { Options } from './Options';
import { Info } from './Info';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

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

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First name value is required')
      .min(4, 'First name must be at least 4 characters'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      <Form className='flex flex-col gap-y-8 w-full md:w-[500px]'>
        {renderStep(step)}
      </Form>
    </Formik>
  );
};
