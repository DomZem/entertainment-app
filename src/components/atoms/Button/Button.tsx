import { type FC } from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => (
  <button className="bg-primaryRed p-4 rounded-md hover:bg-primaryWhite duration-200 hover:text-primarySemiDarkBlue">
    {children}
  </button>
);

export default Button;
