import { ContainerBlurText } from '@/components/blur-text/ContainerBlurText';
import { ContainerCircularText } from '@/components/circular-text/ContainerCircularText';
import { ShinyTextContainer } from '@/components/shiny-text/ShinyTextContainer';
import { ShuffleContainer } from '@/components/shuffle/ShuffleContainer';
import { ContainerTextType } from '@/components/text-type/ContainerTextType';
import { Home } from '../Home';
import { Navigate } from 'react-router-dom';

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
  },
  {
    imageUrl: '/assets/type-text.avif',
    path: '/text-type',
    element: <ContainerTextType />
  },
  {
    imageUrl: '/assets/shuffle-text.avif',
    path: '/shuffle-text',
    element: <ShuffleContainer />
  },
  {
    imageUrl: '/assets/shiny-text-bg-result.avif',
    path: '/shiny-text',
    element: <ShinyTextContainer />
  },
  { path: '*', element: <Navigate to='/' replace /> }
];

export const pathsAndImages = projects.slice(1, -1);
