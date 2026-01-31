import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`max-w-[1200px] mx-auto px-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
