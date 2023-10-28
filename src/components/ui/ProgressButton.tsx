import { useState } from 'react';
import { useNumberCounter } from '../../utils/useNumberCounter';
import { Button } from './Button';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';

export const ProgressButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { count } = useNumberCounter({ min: 5, max: 100, speed: 20 }, () =>
    setIsLoading(false)
  );

  return (
    <div className='flex flex-col items-center gap-y-5'>
      {!isLoading ? (
        <Button
          className='px-3 py-2 capitalize bg-white border rounded-lg border-zinc-200'
          title='Bar preloader'
          onClick={() => setIsLoading(true)}
        />
      ) : (
        <div className='flex flex-col w-full gap-y-1'>
          <div className='inline-flex justify-between text-xs'>
            <Paragraph className='text-zinc-900'>Loading</Paragraph>
            <Heading className='text-zinc-900'>{count}</Heading>
          </div>
          {/* preloader bar */}
          <div className='h-0.5 w-full bg-zinc-200 rounded-full overflow-clip'>
            <div
              className='h-full bg-zinc-900'
              style={{
                width: `${isLoading ? count + '%' : '5%'}`,
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};
