import './TextPressure.css';
import TextPressure from './TextPressure';
import { Lumiflex } from 'uvcanvas';

export const ContainerTextPressure = () => {
  return (
    <article className='container-text-pressure'>
      <Lumiflex />
      <div className='texto'>
        <TextPressure
          text='Ufficiami!'
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor='#000'
          strokeColor='#ff0000'
          minFontSize={36}
        />
      </div>
    </article>
  );
};
