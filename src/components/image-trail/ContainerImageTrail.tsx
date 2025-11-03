import { withBase } from '@/utils/functionsTs';
import ImageTrail from './ImageTrail';
import './ImageTrail.css';

export const ContainerImageTrail = () => {
  return (
    <article className='ContainerImageTrail'>
      <ImageTrail
        key={'adfs'}
        items={Array.from({ length: 20 }, (_, i) =>
          withBase(`/assets/gallery/f${i + 1}.avif`)
        )}
        variant={4}
      />
    </article>
  );
};
