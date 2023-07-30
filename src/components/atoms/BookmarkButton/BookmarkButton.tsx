import { useHover } from '@/hooks/useHover';
import { useRef, type ButtonHTMLAttributes, type FC } from 'react';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';

interface BookmarkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isBookmarked?: boolean;
}

const BookmarkButton: FC<BookmarkButtonProps> = ({ isBookmarked, ...rest }) => {
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  return (
    <button
      ref={hoverRef}
      {...rest}
      className={`absolute right-2 top-2 z-50 flex h-8 w-8 -translate-x-1 translate-y-1 items-center justify-center rounded-full bg-primaryDarkBlue opacity-50 duration-200 ${
        !isBookmarked ? 'hover:bg-primaryWhite hover:opacity-100' : ''
      }`}
    >
      {isBookmarked ? (
        <IoBookmark className="text-primaryWhite" />
      ) : (
        <IoBookmarkOutline
          className={`${
            isHover ? 'text-primaryDarkBlue' : 'text-primaryWhite'
          } duration-200`}
        />
      )}
    </button>
  );
};

export default BookmarkButton;
