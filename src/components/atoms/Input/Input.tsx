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
        } input-wrapper relative flex items-start justify-between p-4 pt-0
      ${error ? 'before:bg-primaryRed' : ''}`}
      >
        <label>
          <input
            ref={ref}
            {...props}
            className="w-full border-none bg-transparent text-base outline-none"
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
          />
        </label>

        {error && <p className="min-w-fit text-primaryRed">{error.message}</p>}
      </div>
    );
  }
);

export default Input;
