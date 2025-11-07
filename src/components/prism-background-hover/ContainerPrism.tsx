import Prism from './Prism';

export const ContainerPrismHover = () => {
  return (
    <article className='ContainerPrism'>
      <Prism
        animationType='hover'
        timeScale={0.5}
        scale={3.6}
        height={3.5}
        baseWidth={5.5}
        noise={0}
        glow={1}
        hueShift={0}
        colorFrequency={1}
      />
    </article>
  );
};
