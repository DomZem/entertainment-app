import MovieList from '@/components/templates/MovieList/MovieList';
import MovieViewTemplate from '@/components/templates/MovieViewTemplate/MovieViewTemplate';
import { useAppSelector } from '@/hooks/storeHook';
import { type Movie } from '@/types';
import { useState } from 'react';

const Bookmarked = () => {
  const movies = useAppSelector((state) => state.movies.movies);
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
          <MovieList title="Bookmarked Movies" movieList={bookmarkedMovies} />
          <MovieList
            title="Bookmarked TV Series"
            movieList={bookmarkedTvSeries}
          />
        </>
      ) : (
        <MovieList
          title={`Found ${filteredMovies.length} results for '${searchPhrase}'`}
          movieList={filteredMovies}
        />
      )}
    </MovieViewTemplate>
  );
};

export default Bookmarked;
