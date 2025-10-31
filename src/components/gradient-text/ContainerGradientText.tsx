import './GradientText.css';
import GradientText from './GradientText';

export const ContainerGradientText = () => {
  return (
    <article className='container-gradient-text'>
      <GradientText
        colors={['#40ffaa', '#4079ff', '#40ffaa', '#4079ff', '#40ffaa']}
        animationSpeed={3}
        showBorder={false}
        className='custom-class'
      >
        Add a splash of color!
      </GradientText>
    </article>
  );
};
