import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  bgColor?: string;
}

const Card = ({ children, className = '', hover = true, style = {}, bgColor = "bg-white" }: CardProps & { style?: React.CSSProperties }) => {
  return (
    <div
      className={`
        ${bgColor} text-center
        ${hover ? 'transition-all duration-300 hover:-translate-y-2.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]' : ''}
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
