import './ContainerCircularText.css';
import CircularText from './CircularText';

export const ContainerCircularText = () => {
  return (
    <article className='container-circular-text'>
      <CircularText
        text='REACT*BITS*COMPONENTS*'
        onHover='speedUp'
        spinDuration={20}
        className='custom-class'
      />
    </article>
  );
};
