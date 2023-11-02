import { useField } from 'formik';
import { Paragraph } from '../ui/Paragraph';
import { PiCaretDownBold } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';

// component props interface
interface SelectProps {
  options: Option[];
  name: string;
  placeholder: string;
  label?: string;
}

//option interface
interface Option {
  title: string;
  value: string | number;
}

export const Select = (props: SelectProps) => {
  const { options, name, placeholder, label } = props;
  const [field, meta, helpers] = useField(name);

  const setTouched = () => {
    if (meta.touched) {
      helpers.setTouched(false);
    } else {
      helpers.setTouched(true);
    }
  };

  const setValue = (value: string | number) => {
    helpers.setTouched(false);
    helpers.setValue(value);
  };

  return (
    <div className='relative flex flex-col gap-y-1'>
      {label && <label htmlFor={name}>{label}</label>}

      {/* select field */}
      <div
        className={twMerge(
          'py-2 px-2.5 rounded-lg cursor-pointer ring-1 ring-inset ring-zinc-200 bg-white inline-flex justify-between items-center w-full gap-x-5',
          meta.touched && 'ring-zinc-900'
        )}
        onClick={setTouched}
      >
        <Paragraph className={twMerge(field.value && 'text-zinc-900')}>
          {field.value ? field.value : placeholder}
        </Paragraph>
        <PiCaretDownBold className='fill-zinc-500' />
      </div>

      {/* options block */}
      {meta.touched && (
        <div className='absolute left-0 w-full overflow-hidden bg-white rounded-lg ring-1 ring-inset ring-zinc-200 top-[80px]'>
          {options.map((option, index: number) => (
            <Paragraph
              key={index}
              className={twMerge(
                'px-4 py-2 cursor-pointer hover:bg-zinc-100',
                meta.value === option.value && 'text-zinc-900 font-semibold'
              )}
              onClick={() => setValue(option.value)}
            >
              {option.title}
            </Paragraph>
          ))}
        </div>
      )}

      {/* error block */}
      {meta.error && (
        <Paragraph className='text-sm text-red-500 '>{meta.error}</Paragraph>
      )}
    </div>
  );
};
