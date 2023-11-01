import { Input } from './Input';
import { Select } from './Select';
import { Textarea } from './Textarea';

type props = {
  control: string;
} & any;

export const FieldControl = (props: props) => {
  const { control, ...rest } = props;

  switch (control) {
    case 'input':
      return (
        <Input
          control={control}
          {...rest}
        />
      );
    case 'select':
      return (
        <Select
          control={control}
          {...rest}
        />
      );
    case 'textarea':
      return (
        <Textarea
          control={control}
          {...rest}
        />
      );

    default:
      return null;
  }
};
