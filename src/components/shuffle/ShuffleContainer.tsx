import Shuffle from './Shuffle';

export const ShuffleContainer = () => {
  return (
    <article className='shuffle-container'>
      <Shuffle
        text='Hello World'
        shuffleDirection='right'
        duration={0.35}
        animationMode='evenodd'
        shuffleTimes={1}
        ease='power3.out'
        stagger={0.03}
        threshold={0.1}
        triggerOnce={true}
        triggerOnHover={true}
        respectReducedMotion={true}
      />
      ;
    </article>
  );
};
