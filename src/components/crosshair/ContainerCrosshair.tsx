import { useRef } from 'react';
import Crosshair from './Crosshair';
import './Crosshair.css';

export const ContainerCrosshair = () => {
  const containerRef = useRef<HTMLAnchorElement>(null);

  return (
    <article
      className='ContainerCrosshair'
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <a
        ref={containerRef}
        href='#'
        className="crosshair-link"
      >
        Hover me
        <Crosshair color='#0070f3' />
      </a>
    </article>
  );
};
