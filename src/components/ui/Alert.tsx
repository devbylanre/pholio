import { useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

interface AlertProps {
  children: React.ReactNode;
  className?: string;
  state: 'danger' | 'success' | 'warning';
  isVisible: boolean;
  setClosed: () => void;
}

export const Alert = (props: AlertProps) => {
  const { children, className, state, isVisible, setClosed } = props;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setClosed(), 5000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, setClosed]);

  if (!isVisible) return null;

  return (
    <div
      className={twMerge(
        'p-3 rounded-xl',
        className,
        state === 'danger' && 'bg-red-100'
      )}
    >
      {children}
    </div>
  );
};
