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
    <main className="h-full flex flex-col overflow-hidden">
      <div className="flex-1 pr-4 pl-4 pt-6 pb-6 md:pl-6 md:pr-6 md:pt-8 md:pb-8 xl:pt-16 xl:pl-9 xl:pr-9">
        <SearchInput
          placeholder={searchPlaceholder}
          onChange={onSearchInputChange}
        />
      </div>
      <div className="overflow-y-scroll h-full flex flex-col gap-6 md:gap-10 p-4 pt-0 md:p-6 md:pt-0 xl:p-9 xl:pt-0">
        {children}
      </div>
    </main>
  );
};

export default MovieViewTemplate;
