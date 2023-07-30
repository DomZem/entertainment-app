import BookmarkButton from '@/components/atoms/BookmarkButton/BookmarkButton';
import Dot from '@/components/atoms/Dot/Dot';
import CardPlayButton from '@/components/molecules/CardPlayButton/CardPlayButton';
import { useAppDispatch } from '@/hooks/storeHook';
import { useHover } from '@/hooks/useHover';
import useMediaQuery from '@/hooks/useMediaQuery';
import { bookmarkMovie, unbookmarkMovie } from '@/store/slices/moviesSlice';
import { type Movie } from '@/types';
import { motion } from 'framer-motion';
import { useRef, type FC } from 'react';
import { MdTv } from 'react-icons/md';
import { RiFilmFill } from 'react-icons/ri';

interface PrimaryCardMovieProps {
  data: Movie;
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const PrimaryCardMovie: FC<PrimaryCardMovieProps> = ({
  data: {
    id,
    title,
    category,
    ageRestriction,
    releaseYear,
    images,
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
    <motion.li variants={item}>
      <section className="relative" ref={hoverRef}>
        <img
          className="w-full rounded-lg"
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
        {desktopMatches ? <CardPlayButton isActive={isHover} /> : null}
      </section>
      <p className="mb-1 mt-2 flex items-center gap-[6px] truncate text-[11px] font-light text-primaryWhite opacity-75 md:text-[13px]">
        {releaseYear}
        <Dot />
        {category === 'Movie' ? (
          <RiFilmFill className="text-base" />
        ) : (
          <MdTv className="text-base" />
        )}
        {category}
        <Dot />
        {ageRestriction}
      </p>
      <h3 className="text-[14px] font-medium md:text-lg">{title}</h3>
    </motion.li>
  );
};

export default PrimaryCardMovie;
