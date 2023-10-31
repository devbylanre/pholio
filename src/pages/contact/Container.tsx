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

  const renderStep = (step: string, formik: any) => {
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
        return (
          <Info
            chooseStep={chooseStep}
            validateForm={formik.validateForm}
          />
        );
      default:
        return null;
    }
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First name value is required')
      .min(4, 'First name must be at least 4 characters'),
    lastName: Yup.string()
      .required('Last name value is required')
      .min(4, 'Last name must be at least 4 characters'),
    tel: Yup.string()
      .required('Mobile number value is required')
      .min(4, 'Mobile number must be at least 4 characters'),
    email: Yup.string()
      .required('Email value is required')
      .min(4, 'Email must be at least 4 characters'),
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    tel: '',
    email: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={() => {}}
    >
      {(formik) => (
        <Form className='flex flex-col gap-y-8 w-full md:w-[500px]'>
          {renderStep(step, formik)}
        </Form>
      )}
    </Formik>
  );
};
