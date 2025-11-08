import DotGrid from './DotGrid';

export const ContainerDotGrid = () => {
  return (
    <article className='ContainerDotGrid'>
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor='#271e37'
        activeColor='#5227FF'
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
    </article>
  );
};
