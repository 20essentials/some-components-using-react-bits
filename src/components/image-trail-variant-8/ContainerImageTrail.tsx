import { withBase } from '@/utils/functionsTs';
import ImageTrail from './ImageTrail';
import './ImageTrail.css';

export const ContainerImageTrailVersion8 = () => {
  return (
    <article className='ContainerImageTrail'>
      <ImageTrail
        key={'adfs'}
        items={Array.from({ length: 20 }, (_, i) =>
          withBase(`/assets/gallery/f${i + 1}.avif`)
        )}
        variant={8}
      />
    </article>
  );
};
