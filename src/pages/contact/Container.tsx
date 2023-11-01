import { useState } from 'react';
import { Options } from './Options';
import { Info } from './Info';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Company } from './Company';
import { Success } from './Success';

export const Container = () => {
  const [step, setStep] = useState<string>('option');
  const [help, setHelp] = useState<string | null>(null);

  const chooseStep = (value: string) => setStep(value); //choose form step
  const chooseHelp = (value: string) => setHelp(value); //choose form help option

  // handles switching between form components
  const renderStep = (step: string, formik: any) => {
    // switch between form components
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
      case 'company':
        return (
          <Company
            submitForm={formik.submitForm}
            validateForm={formik.validateForm}
          />
        );
      case 'success':
        return <Success plan={help} />;
      default:
        return null;
    }
  };

  // form validation schema
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
    org: Yup.string().required('What is your organization name'),
    role: Yup.string().required('Please select a role'),
    description: Yup.string()
      .required('Briefly state why you would like to reach out to us')
      .min(50, 'Must be more than 50 characters'),
  });

  // form initial values
  const initialValues = {
    firstName: '',
    lastName: '',
    tel: '',
    email: '',
    org: '',
    role: '',
    description: '',
  };

  // handles form submission
  const handleSubmit = () => chooseStep('success'); //go to the success form component

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form className='flex flex-col gap-y-8 w-full md:w-[500px]'>
          {renderStep(step, formik)}
        </Form>
      )}
    </Formik>
  );
};
