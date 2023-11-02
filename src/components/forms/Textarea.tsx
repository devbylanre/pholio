import { Field, useField } from 'formik';
import { twMerge } from 'tailwind-merge';
import { Paragraph } from '../ui/Paragraph';
import { useEffect } from 'react';

interface TextareaProps {
  name: string;
  label?: string;
}

export const Textarea = (props: TextareaProps) => {
  const { name, label } = props;
  const [field, meta, helpers] = useField(name);

  // select textarea field
  const textarea = document.querySelector(`#${name}`) as HTMLTextAreaElement;

  // adjust height of textarea to fit content are of box
  useEffect(() => {
    if (textarea) {
      textarea.style.height = 'fit-content';
      if (textarea.value.length > 1) {
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }
  }, [textarea, textarea?.value]);

  return (
    <div className='flex flex-col gap-y-1'>
      {/* field label */}
      {label && (
        <label
          htmlFor={name}
          className='text-zinc-900'
        >
          {label}
        </label>
      )}
      {/* textarea field */}
      <Field
        id={name}
        className={twMerge(
          'w-full px-3 py-2 rounded-lg outline-none bg-white resize-none ring-1 ring-inset ring-zinc-200 transition-all duration-200 ease-in-out',
          meta.touched && !meta.error
            ? 'ring-zinc-900'
            : meta.error && meta.touched && 'ring-red-500'
        )}
        name={name}
        as='textarea'
        rows='1'
        onFocus={() => helpers.setTouched(true)}
        onBlur={() => helpers.setTouched(false)}
      />

      {/* error block */}
      {meta.error && (
        <Paragraph className='text-sm text-red-500'>{meta.error}</Paragraph>
      )}
    </div>
  );
};
