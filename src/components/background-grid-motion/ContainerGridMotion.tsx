import { withBase } from '@/utils/functionsTs';
import GridMotion from './GridMotion';

export const ContainerGridMotion = () => {
  return (
    <article className='ContainerGridMotion'>
      <GridMotion
        items={Array.from({ length: 28 }, (_, i) => {
          const index = i % 20; // 🔁 vuelve al inicio cuando llega a 20
          return withBase(`/assets/gallery/f${index + 1}.avif`);
        })}
      />
    </article>
  );
};
