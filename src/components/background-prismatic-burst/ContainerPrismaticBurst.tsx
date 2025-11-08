import PrismaticBurst from './PrismaticBurst';

export const ContainerPrismaticBurst = () => {
  return (
    <article className='ContainerPrismaticBurst'>
      <PrismaticBurst
        animationType='rotate3d'
        intensity={2}
        speed={0.5}
        distort={0}
        paused={false}
        offset={{ x: 0, y: 0 }}
        hoverDampness={0.25}
        rayCount={0}
        mixBlendMode='lighten'
        colors={['#ff007a', '#00f', '#0f0']}
      />
    </article>
  );
};
