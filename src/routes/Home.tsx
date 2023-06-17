import { useAppSelector } from '@/hooks/storeHook';

const Home = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <main className="p-4">
      <h2>Hello in home page {user?.displayName}</h2>
    </main>
  );
};

export default Home;
