import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { auth } from '@/firebase';
import { useAppDispatch } from '@/hooks/storeHook';
import { login } from '@/store/slices/authSlice';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { MdMovieCreation } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';

interface FormValues {
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = async ({
    email,
    password,
    repeatPassword,
  }) => {
    /// Create user's account
    if (password === repeatPassword) {
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        dispatch(login(user));
        navigate('/home');
        toast.success('Congratulations your account has been created!');
      } catch (e) {
        toast.error(
          'Something went wrong. The account has not been created. Try maybe later!'
        );
      }
    } else {
      toast.error(
        'The passwords provided are not the same. The account has not been created.'
      );
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
          <h1 className="text-4xl font-light">Sign Up</h1>
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
            <Input
              type="password"
              error={errors.repeatPassword}
              placeholder="Repeat password"
              autoComplete="off"
              {...register('repeatPassword', { required: "Can't be empty" })}
            />
          </section>
          <Button type="submit" isPrimary>
            Create an account
          </Button>
          <p className="mt-6 text-center">
            Already have an account?{' '}
            <NavLink to="/login" className="text-primaryRed">
              Login
            </NavLink>
          </p>
        </form>
      </article>
    </main>
  );
};

export default SignUp;
