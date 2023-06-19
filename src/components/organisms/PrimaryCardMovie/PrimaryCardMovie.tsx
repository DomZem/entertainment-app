import BookmarkButton from '@/components/atoms/BookmarkButton/BookmarkButton';
import Dot from '@/components/atoms/Dot/Dot';
import useMediaQuery from '@/hooks/useMediaQuery';
import { type Movie } from '@/types';
import { type FC } from 'react';

interface PrimaryCardMovieProps {
  data: Movie;
}

const PrimaryCardMovie: FC<PrimaryCardMovieProps> = ({
  data: { title, category, ageRestriction, releaseYear, images, isBookmarked },
}) => {
  const tabletMatches = useMediaQuery('(min-width: 768px)');
  const desktopMatches = useMediaQuery('(min-width: 1280px)');

  return (
    <li>
      <section className="relative">
        <img
          className="rounded-lg w-full"
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
      </section>
      <p className="flex font-light items-center gap-[6px] md:text-[13px] text-[11px] text-primaryWhite opacity-75 mt-2 mb-1">
        {releaseYear}
        <Dot />
        {category}
        <Dot />
        {ageRestriction}
      </p>
      <h3 className="text-[14px] font-medium md:text-lg">{title}</h3>
    </li>
  );
};

export default PrimaryCardMovie;
