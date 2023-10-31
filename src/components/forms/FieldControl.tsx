import { Input } from './Input';

type props = {
  control: string;
} & any;

export const FieldControl = (props: props) => {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return <Input {...rest} />;

    default:
      return null;
  }
};
