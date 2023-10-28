import { Heading } from '../../components/ui/Heading';

export const Profile = () => {
  return (
    <div className='flex flex-col items-center gap-y-5'>
      <img
        className='w-16 border rounded-full shadow-lg md:w-20 border-zinc-200 bg-zinc-50'
        src='./assets/images/memoji.png'
        alt='memoji'
      />
      <Heading className='text-2xl md:text-3xl'>Digital designer</Heading>
    </div>
  );
};
