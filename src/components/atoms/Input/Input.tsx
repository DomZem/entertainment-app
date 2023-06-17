import { type FC, type InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = (props) => (
  <div className="border-b-primaryGreishBlue w-full border-b flex justify-between items-start">
    <label>
      <input
        className="w-full bg-transparent m-4 mt-0 border-none outline-none text-base"
        {...props}
      />
    </label>
  </div>
);

export default Input;
