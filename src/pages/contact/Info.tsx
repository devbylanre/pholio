import { Heading } from '../../components/ui/Heading';
import { Input } from '../../components/ui/Input';

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
        <Input
          type='number'
          min={0}
          defaultValue={0}
          name='firstName'
          label='First name'
          error='Sorry only numbers are allowed'
        />
        <Input
          type='text'
          min={0}
          name='lastName'
          label='Last name'
        />
        <Input
          type='email'
          min={0}
          name='email'
          label='Email'
        />
        <Input
          type='tel'
          min={0}
          name='telephone'
          label='Mobile'
        />
      </div>
    </>
  );
};
