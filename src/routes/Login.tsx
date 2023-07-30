import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { auth, provider } from '@/firebase';
import { useAppDispatch } from '@/hooks/storeHook';
import { login } from '@/store/slices/authSlice';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { MdMovieCreation } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';

export interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async ({ email, password }) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        dispatch(login(user));
        navigate('/home');
      }
    } catch (e) {
      toast.error('Something went wrong. Try maybe later!');
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
      toast.error('Something went wrong. Try maybe later!');
    }
  };

  return (
    <main className="flex h-screen items-center justify-center p-6">
      <article className="flex w-full flex-col items-center">
        <MdMovieCreation className="mb-14 text-4xl text-primaryRed md:mb-16 lg:mb-20" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-lg flex-col rounded-lg bg-primarySemiDarkBlue p-6"
        >
          <h1 className="text-3xl font-light">Login</h1>
          <section className="mb-10 mt-10 flex flex-col gap-6">
            <Input
              type="email"
              error={errors.email}
              placeholder="Email address"
              autoComplete="off"
              {...register('email', { required: "Can't be empty" })}
            />
            <Input
              type="password"
              error={errors.password}
              placeholder="Password"
              autoComplete="off"
              {...register('password', { required: "Can't be empty" })}
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
          <p className="mt-6 text-center">
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
