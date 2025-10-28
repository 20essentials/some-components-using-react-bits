import { ContainerBlurText } from './components/blur-text/ContainerBlurText';
import { Home } from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const projects = [
  { imageUrl: '', path: '/', element: <Home /> },
  {
    imageUrl: '/assets/blur-text.avif',
    path: '/blur-text',
    element: <ContainerBlurText />
  }
];

const arrayOfPaths = projects.map(obj => ({ ...obj }));

const router = createBrowserRouter(arrayOfPaths);

export const App = () => {
  return <RouterProvider router={router} />;
};
