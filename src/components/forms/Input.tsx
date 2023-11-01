import { twMerge } from 'tailwind-merge';
import { Paragraph } from '../ui/Paragraph';
import { useField, Field } from 'formik';

type props = {
  type?: string;
  className?: string;
  name: string;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ type, label, name, className, ...rest }: props) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className='flex flex-col gap-y-1'>
      {/* display label if the label prop is not empty */}
      {label && (
        <label
          className='text-zinc-900'
          htmlFor={name}
        >
          {label}
        </label>
      )}

      {/* form field component */}
      <Field
        type={type ? type : 'text'}
        className={twMerge(
          'w-full px-2.5 ring-1 ring-zinc-200 py-2 outline-none rounded-lg transition-all duration-200 ease-in-out',
          meta.touched && !meta.error
            ? 'ring-zinc-900'
            : meta.error && meta.touched && 'ring-red-500',
          className
        )}
        name={name}
        onFocus={() => helpers.setTouched(true)}
        onBlur={() => helpers.setTouched(false)}
        {...rest}
      />

      {/* display error if there is any error */}
      {meta.error ? (
        <Paragraph className='text-sm text-red-500'>{meta.error}</Paragraph>
      ) : null}
    </div>
  );
};
