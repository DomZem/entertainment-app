import { type FC, type InputHTMLAttributes } from 'react';
import { MdSearch } from 'react-icons/md';

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: FC<SearchInputProps> = (props) => (
  <div className="flex items-center gap-4">
    <MdSearch className="text-3xl" />
    <label className="w-full">
      <input
        className="outline-none w-full border-none bg-transparent"
        type="text"
        {...props}
      />
    </label>
  </div>
);

export default SearchInput;
