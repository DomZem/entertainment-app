import Title from '@/components/atoms/Title/Title';
import PrimaryCardMovie from '@/components/organisms/PrimaryCardMovie/PrimaryCardMovie';
import { type Movie } from '@/types';
import { motion } from 'framer-motion';
import { type FC } from 'react';

interface MovieListProps {
  title: string;
  movieList: Movie[];
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const MovieList: FC<MovieListProps> = ({ title, movieList }) => (
  <article>
    <Title>{title}</Title>
    <motion.ul
      className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:mt-8 xl:grid-cols-4 xl:gap-10 xl:gap-x-8"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {movieList.map((movie) => (
        <PrimaryCardMovie data={movie} key={movie.id} />
      ))}
    </motion.ul>
  </article>
);

export default MovieList;
