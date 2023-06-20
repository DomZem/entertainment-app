import React, { type FC } from 'react';

interface TitleProps {
  children: React.ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => (
  <h2 className="text-xl font-light md:text-[32px]">{children}</h2>
);

export default Title;
