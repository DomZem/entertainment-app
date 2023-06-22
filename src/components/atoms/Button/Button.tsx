import { type ButtonHTMLAttributes, type FC } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isPrimary?: boolean;
}

const Button: FC<ButtonProps> = ({ children, isPrimary, ...rest }) => (
  <button
    {...rest}
    type="submit"
    className={`${
      isPrimary
        ? 'bg-primaryRed hover:text-primarySemiDarkBlue hover:bg-primaryWhite'
        : 'bg-primaryDarkBlue text-primaryWhite hover:bg-primaryWhite hover:text-primaryDarkBlue'
    } p-4 rounded-md duration-200`}
  >
    {children}
  </button>
);

export default Button;
