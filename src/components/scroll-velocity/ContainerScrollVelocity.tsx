import ScrollVelocity from './ScrollVelocity';

export const ContainerScrollVelocity = () => {
  return (
    <article className='container-scroll-velocity'>
      <ScrollVelocity
        texts={['React Bits', 'Scroll Down']}
        velocity={100}
        className='custom-scroll-text'
      />
    </article>
  );
};
