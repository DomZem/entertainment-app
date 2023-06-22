import Spinner from '@/components/atoms/Spinner/Spinner';
import Title from '@/components/atoms/Title/Title';
import TrendingCardMovie from '@/components/organisms/TrendingCardMovie/TrendingCardMovie';
import MovieList from '@/components/templates/MovieList/MovieList';
import MovieViewTemplate from '@/components/templates/MovieViewTemplate/MovieViewTemplate';
import { useAppSelector } from '@/hooks/storeHook';
import { type Movie } from '@/types';
import { useState } from 'react';

const Home = () => {
  const movies = useAppSelector((state) => state.movies.movies);
  const moviesStatus = useAppSelector((state) => state.movies.status);
  const error = useAppSelector((state) => state.movies.error);

  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const [searchPhrase, setSearchPhrase] = useState('');

  const handleSearchMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(e.target.value.toLowerCase());
    setFilteredMovies(
      movies.filter((movie) => movie.title.toLowerCase().includes(searchPhrase))
    );
  };

  let content;

  if (moviesStatus === 'idle') {
    content = (
      <div className="w-full h-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  } else if (moviesStatus === 'succeeded') {
    if (searchPhrase === '') {
      content = (
        <>
          <article>
            <Title>Trending</Title>
            <ul className="overflow-x-auto flex gap-4 mt-4 md:mt-6 md:gap-10 no-scrollbar">
              {movies
                .filter((movie) => movie.isTrending)
                .map((movie) => (
                  <TrendingCardMovie data={movie} key={movie.id} />
                ))}
            </ul>
          </article>
          <MovieList
            title="Recommended for you"
            movieList={movies.filter((movie) => !movie.isTrending)}
          />
        </>
      );
    } else {
      content = (
        <MovieList
          title={`Found ${filteredMovies.length} results for '${searchPhrase}'`}
          movieList={filteredMovies}
        />
      );
    }
  } else {
    content = (
      <div className="w-full h-full flex justify-center items-center">
        <Title>{error}</Title>
      </div>
    );
  }

  return (
    <MovieViewTemplate
      searchPlaceholder="Search for movies or TV series"
      onSearchInputChange={handleSearchMovie}
    >
      {content}
    </MovieViewTemplate>
  );
};

export default Home;
