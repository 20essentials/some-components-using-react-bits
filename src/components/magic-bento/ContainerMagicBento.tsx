import MagicBento from './MagicBento';

export const ContainerMagicBento = () => {
  return (
    <article className='ContainerMagicBento'>
      <MagicBento
        textAutoHide={true}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        glowColor='132, 0, 255'
      />
    </article>
  );
};
