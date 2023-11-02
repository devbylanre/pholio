import { Alert } from '../../components/ui/Alert';
import { Paragraph } from '../../components/ui/Paragraph';
import { PiBellSimpleRingingBold } from 'react-icons/pi';

interface FormErrorProps {
  message: string;
  isVisible: boolean;
  setClose: () => void;
}

export const FormError = (props: FormErrorProps) => {
  const { message, isVisible, setClose } = props;
  return (
    <Alert
      state='danger'
      isVisible={isVisible}
      setClose={setClose}
      className='flex flex-col gap-3 md:flex-row'
    >
      <PiBellSimpleRingingBold className='w-6 h-6 fill-red-900' />
      <Paragraph className='text-sm font-medium text-red-900'>
        {message}
      </Paragraph>
    </Alert>
  );
};
