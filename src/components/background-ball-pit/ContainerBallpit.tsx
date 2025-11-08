import Ballpit from './Ballpit';
import './Ballpit.css';

export const ContainerBallpit = () => {
  return (
    <article className='ContainerBallpit'>
      <Ballpit
        count={200}
        gravity={1}
        friction={3}
        wallBounce={1}
        followCursor={true}
        colors={['#0f0', '#f0f', '#00f', '#0ff']}
      />
    </article>
  );
};
