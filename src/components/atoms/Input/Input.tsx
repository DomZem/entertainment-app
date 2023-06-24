import { useState, type FC, type InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = (props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      className={`w-full before:w-full ${
        isActive ? 'before:bg-primaryWhite' : ''
      } relative input-wrapper flex justify-between items-start`}
    >
      <label>
        <input
          className="w-full bg-transparent m-4 mt-0 border-none outline-none text-base"
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          {...props}
        />
      </label>
    </div>
  );
};
export default Input;
