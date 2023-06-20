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
    <section className="bg-primarySemiDarkBlue flex gap-2 items-center justify-between p-4 md:m-5 md:mb-0 md:rounded-lg xl:row-span-full xl:flex-col md:p-6 xl:m-8 xl:mr-0 xl:pt-9 xl:pb-9 xl:pr-8 xl:pl-8 xl:rounded-[20px]">
      <MdMovieCreation className="text-primaryRed text-3xl md:text-4xl" />
      <nav className="flex gap-6 xl:flex-col md:gap-8 xl:gap-10">
        {menus.map((item) => (
          <NavLink to={item.destiny} key={item.destiny}>
            <item.icon
              className={`text-2xl md:text-3xl ${
                pathname.includes(item.destiny)
                  ? 'text-primaryWhite'
                  : 'text-primaryGreishBlue'
              } hover:text-primaryRed duration-20`}
            />
          </NavLink>
        ))}
        <NavLink to="/login" onClick={handleLogout}>
          <MdLogout className="text-2xl md:text-3xl text-primaryGreishBlue hover:text-primaryRed duration-200" />
        </NavLink>
      </nav>

      <img
        className="w-7 h-7 md:w-8 md:h-8 xl:w-10 xl:h-10 rounded-full border-2 border-primaryWhite"
        src={user ? user.photoURL ?? unknownUser : unknownUser}
        alt="User Avatar"
      />
    </section>
  );
};

export default Sidebar;
