import BookmarkButton from '@/components/atoms/BookmarkButton/BookmarkButton';
import Dot from '@/components/atoms/Dot/Dot';
import CardPlayButton from '@/components/molecules/CardPlayButton/CardPlayButton';
import { useAppDispatch } from '@/hooks/storeHook';
import { useHover } from '@/hooks/useHover';
import useMediaQuery from '@/hooks/useMediaQuery';
import { bookmarkMovie, unbookmarkMovie } from '@/store/slices/moviesSlice';
import { type Movie } from '@/types';
import { useRef, type FC } from 'react';
import { MdTv } from 'react-icons/md';
import { RiFilmFill } from 'react-icons/ri';

interface TrendingCardMovieProps {
  data: Movie;
}

const TrendingCardMovie: FC<TrendingCardMovieProps> = ({
  data: {
    id,
    title,
    images,
    releaseYear,
    category,
    ageRestriction,
    isBookmarked,
  },
}) => {
  const tabletMatches = useMediaQuery('(min-width: 768px)');
  const desktopMatches = useMediaQuery('(min-width: 1280px)');
  const dispatch = useAppDispatch();

  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  const handleBookmarkMovie = () => {
    void dispatch(bookmarkMovie(id));
  };

  const handleUnbookmarkMovie = () => {
    void dispatch(unbookmarkMovie(id));
  };

  return (
    <li className="relative flex-shrink-0 rounded-lg" ref={hoverRef}>
      <img
        className="w-[240px] rounded-lg md:w-[470px]"
        src={
          desktopMatches
            ? images.large
            : tabletMatches
            ? images.medium
            : images.small
        }
        alt={`${title} picture`}
      />
      <BookmarkButton
        isBookmarked={isBookmarked}
        onClick={isBookmarked ? handleUnbookmarkMovie : handleBookmarkMovie}
      />
      <div className="absolute bottom-4 left-4 translate-x-1 w-full">
        <p className="flex items-center gap-2 opacity-75 text-primaryWhite font-light text-[15px]">
          {releaseYear} <Dot />
          {category === 'Movie' ? (
            <RiFilmFill className="text-base" />
          ) : (
            <MdTv className="text-base" />
          )}
          {category} <Dot />
          {ageRestriction}
        </p>
        <h3 className="font-medium text-[15px] mt-1 md:text-2xl">{title}</h3>
      </div>
      {desktopMatches ? <CardPlayButton isActive={isHover} /> : null}
    </li>
  );
};

export default TrendingCardMovie;
