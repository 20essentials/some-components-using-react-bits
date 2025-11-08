import Orb from './Orb';

export const ContainerOrb = () => {
  return (
    <article className='ContainerOrb'>
      <Orb
        hoverIntensity={2}
        rotateOnHover={true}
        hue={0}
        forceHoverState={false}
      />
    </article>
  );
};
