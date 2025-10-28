import { ContainerBlurText } from './components/blur-text/ContainerBlurText';
import { ContainerCircularText } from './components/circular-text/ContainerCircularText';
import { Home } from './Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const projects = [
  { imageUrl: '', path: '/', element: <Home /> },
  {
    imageUrl: '/assets/blur-text.avif',
    path: '/blur-text',
    element: <ContainerBlurText />
  },
  {
    imageUrl: '/assets/circular-text.avif',
    path: '/circular-text',
    element: <ContainerCircularText />
  }
];

const arrayOfPaths = projects.map(obj => ({ ...obj }));

const router = createBrowserRouter(arrayOfPaths);

export const App = () => {
  return <RouterProvider router={router} />;
};
