import ColorBends from './ColorBends';

export const ContainerColorBends = () => {
  return (
    <article className='ContainerColorBends'>
      <ColorBends
        colors={['#f00', '#00f', '#0f0']}
        rotation={0}
        autoRotate={0}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.1}
        transparent
      />
    </article>
  );
};
