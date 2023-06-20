import Title from '@/components/atoms/Title/Title';
import PrimaryCardMovie from '@/components/organisms/PrimaryCardMovie/PrimaryCardMovie';
import MovieViewTemplate from '@/components/templates/MovieViewTemplate/MovieViewTemplate';
import { useAppSelector } from '@/hooks/storeHook';
import { type Movie } from '@/types';
import { useState } from 'react';

const TvSeries = () => {
  const movies = useAppSelector((state) => state.movies).filter(
    (movie) => movie.category === 'TV Series'
  );

  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const [searchPhrase, setSearchPhrase] = useState('');

  const handleSearchMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(e.target.value.toLowerCase());
    setFilteredMovies(
      movies.filter((movie) => movie.title.toLowerCase().includes(searchPhrase))
    );
  };

  return (
    <MovieViewTemplate
      searchPlaceholder="Search for TV series"
      onSearchInputChange={handleSearchMovie}
    >
      {searchPhrase === '' ? (
        <article>
          <Title>TV Series</Title>
          <ul className="grid grid-cols-2 mt-6 gap-4 md:grid-cols-3 xl:gap-x-8 xl:grid-cols-4 md:gap-6 xl:gap-10 xl:mt-8">
            {movies.map((movie) => (
              <PrimaryCardMovie data={movie} key={movie.id} />
            ))}
          </ul>
        </article>
      ) : (
        <article>
          <Title>
            Found {filteredMovies.length} results for `{searchPhrase}`
          </Title>
          <ul className="grid grid-cols-2 mt-6 gap-4 md:grid-cols-3 xl:gap-x-8 xl:grid-cols-4 md:gap-6 xl:gap-10 xl:mt-8">
            {filteredMovies.map((movie) => (
              <PrimaryCardMovie data={movie} key={movie.id} />
            ))}
          </ul>
        </article>
      )}
    </MovieViewTemplate>
  );
};

export default TvSeries;
