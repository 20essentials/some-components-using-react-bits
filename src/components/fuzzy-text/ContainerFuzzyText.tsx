import FuzzyText from './FuzzyText';
import './FuzzyText.css'

export const ContainerFuzzyText = () => {
  return (
    <article className='container-fuzzytext'>
      <FuzzyText baseIntensity={0.2} hoverIntensity={0.8} enableHover={true}>
        404
      </FuzzyText>
    </article>
  );
};
