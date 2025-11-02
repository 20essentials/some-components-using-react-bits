import { withBase } from '@/utils/functionsTs';
import LaserFlow from './LaserFlow';
import { useRef } from 'react';

export const ContainerLaserFlow = () => {
  const revealImgRef = useRef(null);

  return (
    <article className='ContainerLaserFlow'>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#060010'
        }}
        className='container-laser'
        onMouseMove={e => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const el = revealImgRef.current;
          if (el) {
            (el as HTMLElement).style.setProperty('--mx', `${x}px`);
            (el as HTMLElement).style.setProperty(
              '--my',
              `${y + rect.height * 0.5}px`
            );
          }
        }}
        onMouseLeave={() => {
          const el = revealImgRef.current;
          if (el) {
            (el as HTMLElement).style.setProperty('--mx', '-9999px');
            (el as HTMLElement).style.setProperty('--my', '-9999px');
          }
        }}
      >
        <LaserFlow
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0.0}
          color='#0f0'
        />

        <img
          ref={revealImgRef}
          src={withBase('/assets/favicon.webp')}
          alt='Reveal effect'
          style={{
            position: 'absolute',
            width: '100%',
            top: '-50%',
            zIndex: 5,
            mixBlendMode: 'lighten',
            opacity: 0.3,
            pointerEvents: 'none',
            //@ts-ignore
            '--mx': '-9999px',
            '--my': '-9999px',
            WebkitMaskImage:
              'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
            maskImage:
              'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat'
          }}
        />
      </div>
    </article>
  );
};
