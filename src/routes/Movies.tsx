import MovieList from '@/components/templates/MovieList/MovieList';
import MovieViewTemplate from '@/components/templates/MovieViewTemplate/MovieViewTemplate';
import { useAppSelector } from '@/hooks/storeHook';
import { type Movie } from '@/types';
import { useState } from 'react';

const Movies = () => {
  const movies = useAppSelector((state) => state.movies.movies).filter(
    (movie) => movie.category === 'Movie'
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
      searchPlaceholder="Search for movies"
      onSearchInputChange={handleSearchMovie}
    >
      {searchPhrase === '' ? (
        <MovieList title="Movies" movieList={movies} />
      ) : (
        <MovieList
          title={`Found ${filteredMovies.length} results for '${searchPhrase}'`}
          movieList={filteredMovies}
        />
      )}
    </MovieViewTemplate>
  );
};

export default Movies;
