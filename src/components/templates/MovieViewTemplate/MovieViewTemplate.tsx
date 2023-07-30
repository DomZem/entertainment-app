import SearchInput from '@/components/atoms/SearchInput/SearchInput';
import { type FC } from 'react';

interface MovieViewTemplateProps {
  searchPlaceholder: string;
  children: React.ReactNode;
  onSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MovieViewTemplate: FC<MovieViewTemplateProps> = ({
  searchPlaceholder,
  onSearchInputChange,
  children,
}) => {
  return (
    <main className="flex h-full flex-col overflow-hidden">
      <div className="flex-1 pb-6 pl-4 pr-4 pt-6 md:pb-8 md:pl-6 md:pr-6 md:pt-8 xl:pb-5 xl:pl-9 xl:pr-9 xl:pt-16">
        <SearchInput
          placeholder={searchPlaceholder}
          onChange={onSearchInputChange}
        />
      </div>
      <div className="flex h-full flex-col gap-6 overflow-y-scroll p-4 pt-0 md:gap-10 md:p-6 md:pt-0 xl:p-9 xl:pt-0">
        {children}
      </div>
    </main>
  );
};

export default MovieViewTemplate;
