import PrimaryCardMovie from '@/components/organisms/PrimaryCardMovie/PrimaryCardMovie';
import { useAppSelector } from '@/hooks/storeHook';
import { MdSearch } from 'react-icons/md';

const Bookmarked = () => {
  const bookmarkedMovies = useAppSelector((state) => state.movies).filter(
    (movie) => movie.isBookmarked && movie.category === 'Movie'
  );
  const bookmarkedTvSeries = useAppSelector((state) => state.movies).filter(
    (movie) => movie.isBookmarked && movie.category === 'TV Series'
  );

  return (
    <main className="p-4 pt-6 flex flex-col gap-6 h-full overflow-y-scroll md:p-6 md:gap-10">
      <div className="flex items-center gap-4">
        <MdSearch className="text-3xl" />
        <input
          className="outline-none w-full border-none bg-transparent"
          type="text"
          placeholder="Search for movies or TV series"
        />
      </div>
      <article>
        <h2 className="text-xl font-light md:text-[32px]">Bookmarked Movies</h2>
        <ul className="grid grid-cols-2 mt-6 gap-4 md:grid-cols-3 xl:gap-x-8 xl:grid-cols-4 md:gap-6 xl:gap-10 xl:mt-8">
          {bookmarkedMovies.map((movie) => (
            <PrimaryCardMovie data={movie} key={movie.id} />
          ))}
        </ul>
      </article>
      <article>
        <h2 className="text-xl font-light md:text-[32px]">
          Bookmarked TV Series
        </h2>
        <ul className="grid grid-cols-2 mt-6 gap-4 md:grid-cols-3 xl:gap-x-8 xl:grid-cols-4 md:gap-6 xl:gap-10 xl:mt-8">
          {bookmarkedTvSeries.map((movie) => (
            <PrimaryCardMovie data={movie} key={movie.id} />
          ))}
        </ul>
      </article>
    </main>
  );
};

export default Bookmarked;
