import BookmarkButton from '@/components/atoms/BookmarkButton/BookmarkButton';
import Dot from '@/components/atoms/Dot/Dot';
import useMediaQuery from '@/hooks/useMediaQuery';
import { type Movie } from '@/types';
import { type FC } from 'react';

interface TrendingCardMovieProps {
  data: Movie;
}

const TrendingCardMovie: FC<TrendingCardMovieProps> = ({
  data: { title, images, releaseYear, category, ageRestriction, isBookmarked },
}) => {
  const tabletMatches = useMediaQuery('(min-width: 768px)');
  const desktopMatches = useMediaQuery('(min-width: 1280px)');

  return (
    <li className="relative flex-shrink-0 rounded-lg">
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
      <BookmarkButton isBookmarked={isBookmarked} />
      <div className="absolute bottom-4 left-4 translate-x-1 w-full">
        <p className="flex items-center gap-2 opacity-75 text-primaryWhite font-light text-[15px]">
          {releaseYear} <Dot />
          {category} <Dot />
          {ageRestriction}
        </p>
        <h3 className="font-medium text-[15px] mt-1 md:text-2xl">{title}</h3>
      </div>
    </li>
  );
};

export default TrendingCardMovie;
