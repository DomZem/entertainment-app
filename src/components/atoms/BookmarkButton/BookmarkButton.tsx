import { type ButtonHTMLAttributes, type FC } from 'react';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';

interface BookmarkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isBookmarked?: boolean;
}

const BookmarkButton: FC<BookmarkButtonProps> = ({ isBookmarked, ...rest }) => (
  <button
    {...rest}
    className={`absolute w-8 h-8 top-2 right-2 flex justify-center items-center duration-200 -translate-x-1 translate-y-1 rounded-full opacity-50 bg-primaryDarkBlue ${
      !isBookmarked ? 'hover:bg-primaryWhite hover:opacity-100' : ''
    }`}
  >
    {isBookmarked ? (
      <IoBookmark className="text-primaryWhite" />
    ) : (
      <IoBookmarkOutline className="duration-200 hover:text-primaryDarkBlue" />
    )}
  </button>
);

export default BookmarkButton;