import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import ProtectedRoute from './helpers/ProtectedRoute';
import { useAppDispatch } from './hooks/storeHook';
import Home from './routes/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import { login, logout } from './store/slices/authSlice';
import { fetchMovies } from './store/slices/moviesSlice';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (cruUser) => {
      if (cruUser != null) {
        dispatch(login(cruUser));
        localStorage.setItem('user', JSON.stringify(cruUser));
      } else {
        dispatch(logout());
        localStorage.removeItem('user');
      }
    });

    void dispatch(fetchMovies());
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
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
