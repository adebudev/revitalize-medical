import type { ReactNode, ElementType } from 'react';

type TextVariant = 'h1' | 'h2' | 'h3' | 'subtitle' | 'body' | 'small' | 'label';

interface TextProps {
  children: ReactNode;
  variant?: TextVariant;
  className?: string;
  as?: ElementType;
}

const variantStyles: Record<TextVariant, { tag: ElementType; className: string }> = {
  h1: {
    tag: 'h1',
    className: 'font-heading text-4xl md:text-5xl font-semibold leading-tight',
  },
  h2: {
    tag: 'h2',
    className: 'font-heading text-3xl md:text-4xl font-semibold leading-tight',
  },
  h3: {
    tag: 'h3',
    className: 'font-heading text-xl md:text-2xl font-semibold',
  },
  subtitle: {
    tag: 'p',
    className: 'text-lg text-text-light',
  },
  body: {
    tag: 'p',
    className: 'text-base leading-relaxed',
  },
  small: {
    tag: 'span',
    className: 'text-sm',
  },
  label: {
    tag: 'span',
    className: 'inline-block bg-accent-teal text-white px-5 py-1.5 rounded-full text-sm font-semibold',
  },
};

const Text = ({ children, variant = 'body', className = '', as }: TextProps) => {
  const { tag: DefaultTag, className: variantClassName } = variantStyles[variant];
  const Tag = as || DefaultTag;

  return <Tag className={`${variantClassName} ${className}`}>{children}</Tag>;
};

export default Text;
