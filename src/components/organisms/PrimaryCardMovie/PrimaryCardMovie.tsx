import BookmarkButton from '@/components/atoms/BookmarkButton/BookmarkButton';
import Dot from '@/components/atoms/Dot/Dot';
import { useAppDispatch } from '@/hooks/storeHook';
import useMediaQuery from '@/hooks/useMediaQuery';
import { bookmarkMovie, unbookmarkMovie } from '@/store/slices/moviesSlice';
import { type Movie } from '@/types';
import { motion } from 'framer-motion';
import { type FC } from 'react';
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

  const handleBookmarkMovie = () => {
    void dispatch(bookmarkMovie(id));
  };

  const handleUnbookmarkMovie = () => {
    void dispatch(unbookmarkMovie(id));
  };

  return (
    <motion.li variants={item}>
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
        <BookmarkButton
          isBookmarked={isBookmarked}
          onClick={isBookmarked ? handleUnbookmarkMovie : handleBookmarkMovie}
        />
      </section>
      <p className="flex font-light items-center gap-[6px] md:text-[13px] text-[11px] text-primaryWhite opacity-75 mt-2 mb-1 truncate">
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
