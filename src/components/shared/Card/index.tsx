import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <div
      className={`
        bg-white rounded-[15px] shadow-md text-center
        ${hover ? 'transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
