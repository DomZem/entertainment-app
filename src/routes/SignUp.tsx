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
        console.log(e);
      }
    } else {
      toast.error(
        'The passwords provided are not the same. The account has not been created.'
      );
    }
  };

  return (
    <main className="h-screen flex justify-center items-center p-6">
      <article className="flex flex-col items-center w-full">
        <MdMovieCreation className="text-primaryRed text-4xl mb-14 md:mb-16 lg:mb-20" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-primarySemiDarkBlue rounded-lg p-6 max-w-lg flex flex-col w-full"
        >
          <h1 className="text-4xl font-light">Sign Up</h1>
          <section className="flex flex-col gap-6 mt-10 mb-10">
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
          <p className="text-center mt-6">
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
