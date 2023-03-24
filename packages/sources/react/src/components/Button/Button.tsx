import '@template/css-button/dist/index.css';
import * as React from 'react';
import { ButtonSize, ButtonVariant } from './types';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  /**
   * The variant of the button.
   * @defaultValue 'primary'
   */
  variant?: ButtonVariant;
  /**
   * The size of the button.
   * @defaultValue 'medium'
   */
  size?: ButtonSize;

  /**
   * The content to render inside the component.
   * @defaultValue undefined
   */
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'medium', children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`btn btn_variant--${variant} btn_size--${size} ${className ? className : ''}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

const MemoButton = React.memo(Button);

MemoButton.displayName = 'Button';

export default MemoButton;
