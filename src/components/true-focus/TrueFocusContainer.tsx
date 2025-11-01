import './TrueFocus.css';
import TrueFocus from './TrueFocus';
import { Velustro } from 'uvcanvas';

export const ContainerTrueFocus = () => {
  return (
    <article className='container-true-focus'>
      <Velustro />
      <TrueFocus
        sentence='True Focus'
        manualMode={false}
        blurAmount={5}
        borderColor='red'
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
    </article>
  );
};
