import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import ProtectedRoute from './helpers/ProtectedRoute';
import { useAppDispatch } from './hooks/storeHook';
import Bookmarked from './routes/Bookmarked';
import Home from './routes/Home';
import Login from './routes/Login';
import Movies from './routes/Movies';
import SignUp from './routes/SignUp';
import TvSeries from './routes/TvSeries';
import { login } from './store/slices/authSlice';
import { fetchMovies } from './store/slices/moviesSlice';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user != null) {
        dispatch(login(user));
        void dispatch(fetchMovies());
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.removeItem('user');
      }
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to="login" />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="home" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tvseries" element={<TvSeries />} />
          <Route path="bookmarked" element={<Bookmarked />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
