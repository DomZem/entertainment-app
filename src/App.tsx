import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './routes/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
