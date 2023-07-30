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
        ? 'bg-primaryRed hover:bg-primaryWhite hover:text-primarySemiDarkBlue'
        : 'bg-primaryDarkBlue text-primaryWhite hover:bg-primaryWhite hover:text-primaryDarkBlue'
    } rounded-md p-4 duration-200`}
  >
    {children}
  </button>
);

export default Button;
