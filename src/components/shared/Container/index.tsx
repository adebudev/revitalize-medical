import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`max-w-[1200px] w-full mx-auto px-5 sm:px-6 lg:px-0 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
