import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import { MdMovieCreation } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const SignUp = () => (
  <main className="h-screen flex justify-center items-center p-6">
    <article className="flex flex-col items-center w-full">
      <MdMovieCreation className="text-primaryRed text-4xl mb-14 md:mb-16 lg:mb-20" />

      <form className="bg-primarySemiDarkBlue rounded-lg p-6 max-w-lg flex flex-col w-full">
        <h1 className="text-4xl font-light">Sign Up</h1>
        <section className="flex flex-col gap-6 mt-10 mb-10">
          <Input type="text" placeholder="Email address" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Repeat password" />
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

export default SignUp;
