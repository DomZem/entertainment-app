import useMediaQuery from '@/hooks/useMediaQuery';
import { useState, type FC, type InputHTMLAttributes } from 'react';
import { MdSearch } from 'react-icons/md';

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: FC<SearchInputProps> = (props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const desktopMatches = useMediaQuery('(min-width: 1280px)');

  return (
    <div className="flex items-center input-wrapper gap-4">
      <MdSearch className="text-3xl" />
      <label
        className={`w-full xl:pb-4 relative ${
          isActive ? 'before:w-full' : ''
        } ${desktopMatches ? 'input-wrapper' : ''}`}
      >
        <input
          className="outline-none w-full border-none bg-transparent"
          type="text"
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          {...props}
        />
      </label>
    </div>
  );
};

export default SearchInput;
