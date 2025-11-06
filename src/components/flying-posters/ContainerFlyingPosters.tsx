import { withBase } from '@/utils/functionsTs';
import FlyingPosters from './FlyingPosters';

const items = Array.from({ length: 20 }, (_, i) =>
  withBase(`/assets/gallery/f${i + 1}.avif`)
);

export const ContainerFlyingPosters = () => {
  return (
    <article className='ContainerFlyingPosters'>
      <FlyingPosters items={items} />
    </article>
  );
};
