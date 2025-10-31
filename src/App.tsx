import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { projects } from './routes/projects';

const arrayOfPaths = projects.map(obj => ({ ...obj }));

const router = createBrowserRouter(arrayOfPaths, {
  basename: '/some-components-using-react-bits'
});

export const App = () => {
  return <RouterProvider router={router} />;
};
