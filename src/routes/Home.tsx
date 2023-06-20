import Title from '@/components/atoms/Title/Title';
import PrimaryCardMovie from '@/components/organisms/PrimaryCardMovie/PrimaryCardMovie';
import TrendingCardMovie from '@/components/organisms/TrendingCardMovie/TrendingCardMovie';
import MovieViewTemplate from '@/components/templates/MovieViewTemplate/MovieViewTemplate';
import { useAppSelector } from '@/hooks/storeHook';
import { type Movie } from '@/types';
import { useState } from 'react';

const Home = () => {
  const movies = useAppSelector((state) => state.movies);

  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const [searchPhrase, setSearchPhrase] = useState('');

  const handleSearchMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(e.target.value);
    setFilteredMovies(
      movies.filter((movie) => movie.title.includes(searchPhrase))
    );
  };

  return (
    <MovieViewTemplate
      searchPlaceholder="Search for movies or TV series"
      onSearchInputChange={handleSearchMovie}
    >
      {searchPhrase === '' ? (
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
          <article>
            <Title>Recommended for you</Title>
            <ul className="grid grid-cols-2 mt-6 gap-4 md:grid-cols-3 xl:gap-x-8 xl:grid-cols-4 md:gap-6 xl:gap-10 xl:mt-8">
              {movies
                .filter((movie) => !movie.isTrending)
                .map((movie) => (
                  <PrimaryCardMovie data={movie} key={movie.id} />
                ))}
            </ul>
          </article>
        </>
      ) : (
        <>
          <Title>
            Found {filteredMovies.length} results for `{searchPhrase}`
          </Title>
          <ul className="grid grid-cols-2 mt-6 gap-4 md:grid-cols-3 xl:gap-x-8 xl:grid-cols-4 md:gap-6 xl:gap-10 xl:mt-8">
            {filteredMovies.map((movie) => (
              <PrimaryCardMovie data={movie} key={movie.id} />
            ))}
          </ul>
        </>
      )}
    </MovieViewTemplate>
  );
};

export default Home;
