import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { auth, provider } from '@/firebase';
import { useAppDispatch } from '@/hooks/storeHook';
import { login } from '@/store/slices/authSlice';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { MdMovieCreation } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      dispatch(login(user));
      navigate('/home');
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      if (user) {
        dispatch(login(user));
        navigate('/home');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className="h-screen flex justify-center items-center p-6">
      <article className="flex flex-col items-center w-full">
        <MdMovieCreation className="text-primaryRed text-4xl mb-14 md:mb-16 lg:mb-20" />

        <form
          onSubmit={handleLogin}
          className="bg-primarySemiDarkBlue rounded-lg p-6 max-w-lg flex flex-col w-full"
        >
          <h1 className="text-3xl font-light">Login</h1>
          <section className="flex flex-col gap-6 mt-10 mb-10">
            <Input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </section>
          <section className="flex flex-col gap-4">
            <Button type="submit" isPrimary>
              Login to your account
            </Button>
            <Button type="button" onClick={handleSignInWithGoogle}>
              Login to your account with google
            </Button>
          </section>
          <p className="text-center mt-6">
            Don’t have an account?{' '}
            <NavLink to="/signup" className="text-primaryRed">
              Sign Up
            </NavLink>
          </p>
        </form>
      </article>
    </main>
  );
};

export default Login;
