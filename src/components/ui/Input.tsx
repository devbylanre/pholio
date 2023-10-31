import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Paragraph } from './Paragraph';

type props = {
  type?: string;
  error?: string;
  className?: string;
  name: string;
  label?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  type,
  label,
  name,
  error,
  className,
  ...rest
}: props) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className='flex flex-col gap-y-1'>
      {label && (
        <label
          className='text-zinc-500'
          htmlFor={name}
        >
          {label}
        </label>
      )}

      <input
        type={type ? type : 'text'}
        className={twMerge(
          'w-full px-2.5 ring-1 ring-zinc-200 py-2 outline-none rounded-lg transition-all duration-200 ease-in-out',
          isFocused && !error
            ? 'ring-zinc-900'
            : error && isFocused && 'ring-red-500',
          className
        )}
        name={name}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />

      {error ? (
        <Paragraph className='text-sm text-red-500'>{error}</Paragraph>
      ) : null}
    </div>
  );
};
