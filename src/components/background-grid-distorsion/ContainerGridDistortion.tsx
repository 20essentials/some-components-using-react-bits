import { withBase } from '@/utils/functionsTs';
import GridDistortion from './GridDistortion';

export const ContainerGridDistortion = () => {
  return (
    <article className='ContainerGridDistortion'>
      <GridDistortion
        imageSrc={withBase('/assets/grid-distorsion-bg.avif')}
        grid={10}
        mouse={0.1}
        strength={0.15}
        relaxation={0.9}
        className='custom-class'
      />
    </article>
  );
};
