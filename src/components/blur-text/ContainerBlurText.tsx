import './ContainerBlurText.css';
import BlurText from './BlurText';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export const ContainerBlurText = () => {
  return (
    <article className='container-blur-text'>
      <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy='words'
        direction='top'
        onAnimationComplete={handleAnimationComplete}
        className='text-2xl mb-8'
      />
    </article>
  );
};
