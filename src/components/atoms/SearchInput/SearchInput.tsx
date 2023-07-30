import useMediaQuery from '@/hooks/useMediaQuery';
import { useState, type FC, type InputHTMLAttributes } from 'react';
import { MdSearch } from 'react-icons/md';

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: FC<SearchInputProps> = (props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const desktopMatches = useMediaQuery('(min-width: 1280px)');

  return (
    <div className="input-wrapper flex items-center gap-4">
      <MdSearch className="text-3xl" />
      <label
        className={`relative w-full xl:pb-4 ${
          isActive ? 'before:w-full' : ''
        } ${desktopMatches ? 'input-wrapper' : ''}`}
      >
        <input
          className="w-full border-none bg-transparent outline-none"
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
