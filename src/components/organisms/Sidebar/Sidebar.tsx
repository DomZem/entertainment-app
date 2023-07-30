import unknownUser from '@/assets/unknown_user.jpg';
import { auth } from '@/firebase';
import { useAppDispatch, useAppSelector } from '@/hooks/storeHook';
import { logout } from '@/store/slices/authSlice';
import { signOut } from 'firebase/auth';
import { HiSquares2X2 } from 'react-icons/hi2';
import { IoMdBookmark } from 'react-icons/io';
import { MdLogout, MdMovieCreation, MdTv } from 'react-icons/md';
import { RiFilmFill } from 'react-icons/ri';
import { NavLink, useLocation } from 'react-router-dom';

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

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
  };

  return (
    <section className="flex items-center justify-between gap-2 bg-primarySemiDarkBlue p-4 md:m-5 md:mb-0 md:rounded-lg md:p-6 xl:row-span-full xl:m-8 xl:mr-0 xl:flex-col xl:rounded-[20px] xl:pb-9 xl:pl-8 xl:pr-8 xl:pt-9">
      <MdMovieCreation className="text-3xl text-primaryRed md:text-4xl" />
      <nav className="flex gap-4 md:gap-8 xl:flex-col xl:gap-10">
        {menus.map((item) => (
          <NavLink to={item.destiny} key={item.destiny}>
            <item.icon
              className={`text-2xl md:text-3xl ${
                pathname.includes(item.destiny)
                  ? 'text-primaryWhite'
                  : 'text-primaryGreishBlue'
              } duration-200 hover:text-primaryRed`}
            />
          </NavLink>
        ))}
        <NavLink to="/login" onClick={handleLogout}>
          <MdLogout className="text-2xl text-primaryGreishBlue duration-200 hover:text-primaryRed md:text-3xl" />
        </NavLink>
      </nav>

      <img
        className="h-7 w-7 rounded-full border-2 border-primaryWhite md:h-8 md:w-8 xl:h-10 xl:w-10"
        src={user ? user.photoURL ?? unknownUser : unknownUser}
        alt="User Avatar"
      />
    </section>
  );
};

export default Sidebar;
