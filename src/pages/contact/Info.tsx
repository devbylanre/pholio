import { Heading } from '../../components/ui/Heading';
import { FieldControl } from '../../components/forms/FieldControl';

interface InfoProps {
  chooseStep: (data: string) => void;
}

export const Info = ({ chooseStep }: InfoProps) => {
  return (
    <>
      <Heading className='text-xl text-left md:text-2xl md:text-center'>
        What do I call you?
      </Heading>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
        <FieldControl
          control='input'
          type='number'
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
          name='telephone'
          label='Mobile'
        />
      </div>
    </>
  );
};
