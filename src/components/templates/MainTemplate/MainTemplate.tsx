import Sidebar from '@/components/organisms/Sidebar/Sidebar';
import { type FC } from 'react';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => (
  <div className="grid grid-rows-[auto_1fr] xl:grid-cols-[auto_1fr] h-screen xl:grid-rows-1fr">
    <Sidebar />
    {children}
  </div>
);

export default MainTemplate;
