import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { MdMovieCreation } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Login = () => (
  <main className="h-screen flex justify-center items-center p-6">
    <article className="flex flex-col items-center w-full">
      <MdMovieCreation className="text-primaryRed text-4xl mb-14 md:mb-16 lg:mb-20" />

      <form className="bg-primarySemiDarkBlue rounded-lg p-6 max-w-lg flex flex-col w-full">
        <h1 className="text-3xl font-light">Login</h1>
        <section className="flex flex-col gap-6 mt-10 mb-10">
          <Input type="text" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
        </section>
        <Button>Login to your account</Button>
        <p className="text-center mt-6">
          Don’t have an account?{' '}
          <NavLink to="SignUp" className="text-primaryRed">
            Sign Up
          </NavLink>
        </p>
      </form>
    </article>
  </main>
);

export default Login;
