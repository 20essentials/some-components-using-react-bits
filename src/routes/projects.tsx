import { ContainerBlurText } from '@/components/blur-text/ContainerBlurText';
import { ContainerCircularText } from '@/components/circular-text/ContainerCircularText';
import { ContainerCurvedLoop } from '@/components/curved-loop/ContainerCurvedLoop';
import { ShinyTextContainer } from '@/components/shiny-text/ShinyTextContainer';
import { ShuffleContainer } from '@/components/shuffle/ShuffleContainer';
import { ContainerTextPressure } from '@/components/text-pressure/ContainerTextPressure';
import { ContainerTextType } from '@/components/text-type/ContainerTextType';
import { Home } from '@/Home';

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
  {
    imageUrl: '/assets/text-pressure.avif',
    path: '/text-pressure',
    element: <ContainerTextPressure />
  },
  {
    imageUrl: '/assets/curved-loop.avif',
    path: '/curved-loop',
    element: <ContainerCurvedLoop />
  },
  { imageUrl: '', path: '*', element: <Home /> }
];

export const pathsAndImages = projects.slice(1, -1);
