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
      className={`absolute w-8 h-8 top-2 right-2 flex justify-center items-center duration-200 -translate-x-1 translate-y-1 rounded-full opacity-50 bg-primaryDarkBlue ${
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
