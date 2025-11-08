import RippleGrid from './RippleGrid';

export const ContainerRippleGrid = () => {
  return (
    <article className='ContainerRippleGrid'>
      <RippleGrid
        enableRainbow={false}
        gridColor='#5227ff'
        rippleIntensity={0.1}
        gridSize={20}
        gridThickness={15}
        fadeDistance={1.5}
        vignetteStrength={2}
        glowIntensity={0.1}
        opacity={1}
        gridRotation={0}
        mouseInteraction={true}
        mouseInteractionRadius={0.8}
      />
    </article>
  );
};
