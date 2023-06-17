import { HiSquares2X2 } from 'react-icons/hi2';
import { IoMdBookmark } from 'react-icons/io';
import { MdLogout, MdMovieCreation, MdTv } from 'react-icons/md';
import { RiFilmFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const menus = [
  {
    destiny: 'home',
    icon: HiSquares2X2,
  },
  {
    destiny: 'movies',
    icon: RiFilmFill,
  },
  {
    destiny: 'tvseries',
    icon: MdTv,
  },
  {
    destiny: 'bookmarked',
    icon: IoMdBookmark,
  },
];

const Sidebar = () => (
  <section
    className="bg-primarySemiDarkBlue flex gap-2 items-center justify-between p-4 md:m-5 md:rounded-lg
  xl:row-span-full xl:flex-col"
  >
    <MdMovieCreation className="text-primaryRed text-3xl" />
    <nav className="flex gap-5 xl:flex-col">
      {menus.map((item) => (
        <NavLink to={item.destiny} key={item.destiny}>
          <item.icon className="text-2xl text-primaryGreishBlue hover:text-primaryWhite duration-200" />
        </NavLink>
      ))}
    </nav>
    <NavLink to="login">
      <MdLogout className="text-2xl text-primaryGreishBlue hover:text-primaryWhite duration-200" />
    </NavLink>
  </section>
);

export default Sidebar;
