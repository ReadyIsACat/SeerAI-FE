import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  style?: React.CSSProperties;
  type?: 'button' | 'submit' | 'reset';
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  disabled,
  variant = 'primary',
  style,
  type = 'button',
}) => {
  const baseGradient =
    variant === 'primary'
      ? 'linear-gradient(90deg,rgb(11, 29, 110) 0%, #764ba2 100%)'
      : 'linear-gradient(90deg, #764ba2 0%, #f857a6 100%)';
  const borderColor = variant === 'primary' ? 'rgb(116, 92, 223)' : '#764ba2';
  const hoverBorderColor = variant === 'primary' ? 'rgb(152, 208, 223)' : '#f857a6';
  const hoverBoxShadow =
    variant === 'primary'
      ? '0 4px 16px 0 rgba(255, 255, 255, 0.25)'
      : '0 4px 16px 0 rgba(71, 113, 30, 0.25)';
  const focusBoxShadow =
    variant === 'primary'
      ? '0 0 0 3px rgba(239, 221, 158, 0.25)'
      : '0 0 0 3px rgba(248,87,166,0.18)';
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '12px 32px',
        fontSize: 16,
        borderRadius: 25,
        border: `2px solid ${borderColor}`,
        background: baseGradient,
        color: '#fff',
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontWeight: 'bold',
        boxShadow: disabled
          ? 'none'
          : '0 2px 8px 0 rgba(0,0,0,0.10)',
        opacity: disabled ? 0.6 : 1,
        transition: 'all 0.2s cubic-bezier(.4,0,.2,1)',
        outline: 'none',
        ...style,
      }}
      onMouseOver={e => {
        if (!disabled) {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = hoverBoxShadow;
          (e.currentTarget as HTMLButtonElement).style.borderColor = hoverBorderColor;
        }
      }}
      onMouseOut={e => {
        if (!disabled) {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            '0 2px 8px 0 rgba(0,0,0,0.10)';
          (e.currentTarget as HTMLButtonElement).style.borderColor = borderColor;
        }
      }}
      onFocus={e => {
        if (!disabled) {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = focusBoxShadow;
        }
      }}
      onBlur={e => {
        if (!disabled) {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            '0 2px 8px 0 rgba(0,0,0,0.10)';
        }
      }}
    >
      {children}
    </button>
  );
}; 