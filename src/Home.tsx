import { Background } from '@/components/Background.tsx';
import { Hero } from './components/Hero';
import { ContainerComponents } from './components/ContainerComponents';

export const Home = () => {
  return (
    <>
      <Background />
      <Hero />
      <ContainerComponents />
    </>
  );
};
