import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import SignUp from './routes/SignUp';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
