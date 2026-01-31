import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'dark' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-accent-teal text-white hover:bg-accent-teal hover:-translate-y-0.5',
  secondary: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary-dark',
  dark: 'bg-primary-dark text-white hover:bg-primary-blue',
  outline: 'bg-transparent text-primary-blue border-2 border-primary-blue hover:bg-primary-blue hover:text-white',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-8 py-3.5 text-base',
  lg: 'px-8 py-3.5 text-base',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`
        inline-block rounded-[5px] font-semibold cursor-pointer
        transition-all duration-300 ease-in-out
        border-none text-center
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
