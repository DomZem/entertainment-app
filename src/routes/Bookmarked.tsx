import Title from '@/components/atoms/Title/Title';
import PrimaryCardMovie from '@/components/organisms/PrimaryCardMovie/PrimaryCardMovie';
import MovieViewTemplate from '@/components/templates/MovieViewTemplate/MovieViewTemplate';
import { useAppSelector } from '@/hooks/storeHook';
import { type Movie } from '@/types';
import { useState } from 'react';

const Bookmarked = () => {
  const movies = useAppSelector((state) => state.movies);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);
  const [searchPhrase, setSearchPhrase] = useState('');

  const bookmarkedMovies = movies.filter(
    (movie) => movie.isBookmarked && movie.category === 'Movie'
  );

  const bookmarkedTvSeries = movies.filter(
    (movie) => movie.isBookmarked && movie.category === 'TV Series'
  );

  const handleSearchMovie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(e.target.value.toLowerCase());
    setFilteredMovies(
      movies.filter((movie) => movie.title.toLowerCase().includes(searchPhrase))
    );
  };

  return (
    <MovieViewTemplate
      searchPlaceholder="Search for bookmarked shows"
      onSearchInputChange={handleSearchMovie}
    >
      {searchPhrase === '' ? (
        <>
          <article>
            <Title>Bookmarked Movies</Title>
            <ul className="grid grid-cols-2 mt-6 gap-4 md:grid-cols-3 xl:gap-x-8 xl:grid-cols-4 md:gap-6 xl:gap-10 xl:mt-8">
              {bookmarkedMovies.map((movie) => (
                <PrimaryCardMovie data={movie} key={movie.id} />
              ))}
            </ul>
          </article>
          <article>
            <Title>Bookmarked TV Series</Title>
            <ul className="grid grid-cols-2 mt-6 gap-4 md:grid-cols-3 xl:gap-x-8 xl:grid-cols-4 md:gap-6 xl:gap-10 xl:mt-8">
              {bookmarkedTvSeries.map((movie) => (
                <PrimaryCardMovie data={movie} key={movie.id} />
              ))}
            </ul>
          </article>
        </>
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

export default Bookmarked;
