/* eslint-disable react/display-name */
import React, { useState, type InputHTMLAttributes } from 'react';
import { type FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, ...props }, ref) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
      <div
        className={`w-full before:w-full ${
          isActive ? 'before:bg-primaryWhite' : ''
        } relative input-wrapper flex justify-between p-4 pt-0 items-start
      ${error ? 'before:bg-primaryRed' : ''}`}
      >
        <label>
          <input
            ref={ref}
            {...props}
            className="w-full bg-transparent border-none outline-none text-base"
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
          />
        </label>

        {error && <p className="text-primaryRed min-w-fit">{error.message}</p>}
      </div>
    );
  }
);

export default Input;
