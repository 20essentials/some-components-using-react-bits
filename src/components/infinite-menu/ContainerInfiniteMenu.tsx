import { withBase } from '@/utils/functionsTs';
import InfiniteMenu from './InfiniteMenu';

export const ContainerInfiniteMenu = () => {
  return (
    <article className='ContainerInfiniteMenu'>
         <InfiniteMenu
          items={Array.from({ length: 20 }, (_, i) => {
            return {
              image: withBase(`/assets/gallery/f${i + 1}.avif`),
              title: `Image ${i + 1}`,
              link: '#',
              description: 'This is pretty cool, right?'
            };
          })}
        />
    </article>
  );
};
