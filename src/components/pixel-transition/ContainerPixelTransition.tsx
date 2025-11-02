import { withBase } from '@/utils/functionsTs';
import PixelTransition from './PixelTransition';
import { Xenon } from 'uvcanvas';

export const ContainerPixelTransition = () => {
  return (
    <article className='ContainerPixelTransition'>
      <Xenon />

      <PixelTransition
        firstContent={
          <img
            src={withBase('/assets/favicon.webp')}
            alt='default pixel transition content, a cat!'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        }
        secondContent={
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'grid',
              placeItems: 'center',
              backgroundColor: '#111'
            }}
          >
            <p style={{ fontWeight: 900, fontSize: '3rem', color: '#ffffff' }}>
              Hello!
            </p>
          </div>
        }
        gridSize={12}
        pixelColor='#ffffff'
        once={false}
        animationStepDuration={0.4}
        className='custom-pixel-card'
      />
    </article>
  );
};
